#!/usr/bin/env python3
"""Download non-blog routes and their newly-referenced assets."""
import html
import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).parent
BASE = "https://specific-community-017135.framer.app"
PAGES_DIR = ROOT / "pages"
PAGES_DIR.mkdir(exist_ok=True)

ROUTES = [
    "/projects",
    "/idiom",
    "/base-ui/building-multi-brand-design-system",
    "/base-ui/components-atomic-design",
]

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"

def fetch_html(route: str) -> Path:
    out = PAGES_DIR / (route.lstrip("/").replace("/", "__") + ".html")
    rc = subprocess.run(
        ["curl", "-sSL", "-A", UA, BASE + route, "-o", str(out)],
        capture_output=True,
    )
    if rc.returncode != 0 or not out.exists() or out.stat().st_size == 0:
        raise SystemExit(f"failed: {route}: {rc.stderr.decode()[:200]}")
    return out

def collect_urls(html_path: Path):
    text = html_path.read_text()
    raw = re.findall(r'https://framerusercontent\.com/[^"\'\s<>)]+', text)
    return set(html.unescape(u) for u in raw)

def classify(urls):
    fonts, images, scripts, data = {}, {}, {}, {}
    for u in urls:
        p = urlparse(u)
        path = p.path
        if path.endswith(".woff2"):
            fonts[Path(path).name] = u
        elif path.endswith(".svg") or "/images/" in path:
            base = Path(path).name
            if base in images:
                old_u = images[base]
                old_q = urlparse(old_u).query
                new_q = p.query
                old_score = ("scale-down-to" not in old_q, "lossless" in old_q, len(old_q))
                new_score = ("scale-down-to" not in new_q, "lossless" in new_q, len(new_q))
                if new_score > old_score:
                    images[base] = u
            else:
                images[base] = u
        elif path.endswith(".mjs"):
            scripts[Path(path).name] = u
        elif path.endswith(".json"):
            data[Path(path).name] = u
    return fonts, images, scripts, data

def fetch(targets, dest):
    dest.mkdir(parents=True, exist_ok=True)
    new, skipped, failed = 0, 0, []
    for name, url in sorted(targets.items()):
        out = dest / name
        if out.exists() and out.stat().st_size > 0:
            skipped += 1
            continue
        rc = subprocess.run(
            ["curl", "-sSL", "-A", UA, url, "-o", str(out)],
            capture_output=True,
        )
        if rc.returncode != 0 or not out.exists() or out.stat().st_size == 0:
            failed.append((name, url, rc.stderr.decode()))
            if out.exists() and out.stat().st_size == 0:
                out.unlink()
        else:
            new += 1
    return new, skipped, failed

all_urls = set()
print("Fetching pages:")
for route in ROUTES:
    html_path = fetch_html(route)
    urls = collect_urls(html_path)
    all_urls |= urls
    print(f"  {route}: {html_path.relative_to(ROOT)} ({len(urls)} unique URLs)")

fonts, images, scripts, data = classify(all_urls)
print(f"\nUnique assets across pages: fonts={len(fonts)}, images={len(images)}, scripts={len(scripts)}, data={len(data)}")

all_failed = []
for label, targets, dest in [
    ("fonts", fonts, ROOT / "assets/fonts"),
    ("images", images, ROOT / "assets/images"),
    ("scripts", scripts, ROOT / "assets/scripts"),
    ("data", data, ROOT / "assets/data"),
]:
    new, skipped, failed = fetch(targets, dest)
    print(f"  {label}: +{new} new, {skipped} already present" + (f", {len(failed)} failed" if failed else ""))
    all_failed.extend(failed)

if all_failed:
    print(f"\n{len(all_failed)} failed:")
    for n, u, err in all_failed:
        print(f"  {n}: {err.strip()[:120]}")
    sys.exit(1)

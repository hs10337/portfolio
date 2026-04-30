#!/usr/bin/env python3
"""Download all unique assets referenced by the Framer landing page."""
import html
import os
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).parent
HTML_PATH = ROOT / "index.html"
text = HTML_PATH.read_text()

raw_urls = re.findall(r'https://framerusercontent\.com/[^"\'\s<>)]+', text)
urls = set(html.unescape(u) for u in raw_urls)

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
            old_score = (
                "scale-down-to" not in old_q,
                "lossless" in old_q,
                len(old_q),
            )
            new_score = (
                "scale-down-to" not in new_q,
                "lossless" in new_q,
                len(new_q),
            )
            if new_score > old_score:
                images[base] = u
        else:
            images[base] = u
    elif path.endswith(".mjs"):
        scripts[Path(path).name] = u
    elif path.endswith(".json"):
        data[Path(path).name] = u

def fetch(targets, dest):
    dest.mkdir(parents=True, exist_ok=True)
    failed = []
    for name, url in sorted(targets.items()):
        out = dest / name
        if out.exists() and out.stat().st_size > 0:
            continue
        rc = subprocess.run(
            ["curl", "-sSL", "-A", "Mozilla/5.0", url, "-o", str(out)],
            capture_output=True,
        )
        if rc.returncode != 0 or not out.exists() or out.stat().st_size == 0:
            failed.append((name, url, rc.stderr.decode()))
            if out.exists() and out.stat().st_size == 0:
                out.unlink()
    return failed

print(f"fonts: {len(fonts)}, images: {len(images)}, scripts: {len(scripts)}, data: {len(data)}")
all_failed = []
for label, targets, dest in [
    ("fonts", fonts, ROOT / "assets/fonts"),
    ("images", images, ROOT / "assets/images"),
    ("scripts", scripts, ROOT / "assets/scripts"),
    ("data", data, ROOT / "assets/data"),
]:
    failed = fetch(targets, dest)
    print(f"  {label}: {len(targets) - len(failed)}/{len(targets)} downloaded")
    all_failed.extend(failed)

if all_failed:
    print(f"\n{len(all_failed)} failed:")
    for n, u, err in all_failed:
        print(f"  {n}: {err.strip()[:120]}")
    sys.exit(1)

# Framer landing-page scaffold

Local snapshot of the existing Framer site, captured to seed the Next.js rebuild.

Source: https://specific-community-017135.framer.app
Captured: 2026-04-30

## What's here

```
scaffold/
├── index.html        Raw HTML of the landing page (as served by Framer)
├── searchIndex.json  Framer's search index — handy because it lists every route
│                     on the site (homepage, /projects, /blog, /idiom, ~30 posts)
├── content.md        Cleaned-up copy + project list + image-to-tile mapping
├── download.py       Script that pulled all assets below
└── assets/
    ├── images/       Project tile PNGs + favicon SVG (9 files)
    ├── fonts/        Woff2 files referenced by the page (65 files — Framer
    │                 includes a lot of subset/weight variants)
    ├── scripts/      Framer/React/motion runtime .mjs bundles (kept for reference;
    │                 we won't ship these — Next.js will replace them)
    └── data/         The two searchIndex JSON files
```

## Coverage

This is the **landing page only**. The site has a lot more (about ~30 blog posts,
a `/projects` index, a `/idiom` page, two `/base-ui/...` pages). Routes are listed
in `searchIndex.json` if/when we want to pull them too.

## What to do with this

- `content.md` is the source of truth for the homepage copy — drop it into the
  Next.js page as we build.
- `assets/images/*.png` map to project tiles per the table in `content.md`.
  Treat them as placeholders; Belle will likely want to swap in higher-fidelity
  art per the brand direction in `AGENTS.md`.
- `assets/fonts/` — these are Framer-host woff2 files, not the canonical font
  family files. For the rebuild, prefer self-hosting via `next/font` from
  Google Fonts / Fontshare rather than copying the woff2 blobs.
- `assets/scripts/` are Framer's runtime bundles. They're here for reference
  only (e.g. inspecting motion behaviour) — don't load them in the new site.
- `index.html` is the SSR'd output — useful as a layout reference but mostly
  built by Framer's React runtime, so reading the structure is hard. The
  cleaned copy in `content.md` is more usable.

## Re-running

```sh
python3 download.py
```

Idempotent — skips files that already exist.

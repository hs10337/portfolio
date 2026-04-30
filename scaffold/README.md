# Framer site scaffold

Local snapshot of the existing Framer site, captured to seed the Next.js rebuild.

Source: https://specific-community-017135.framer.app
Captured: 2026-04-30

## What's here

```
scaffold/
├── index.html             Raw HTML of the landing page
├── pages/                 Raw HTML of the four non-blog subpages
│   ├── projects.html
│   ├── idiom.html
│   ├── base-ui__building-multi-brand-design-system.html
│   └── base-ui__components-atomic-design.html
├── searchIndex.json       Framer's search index — lists every route on the site
│                          AND has the full pre-rendered text per route, so it's
│                          the cleanest place to grab paragraph copy
├── content.md             Cleaned-up homepage copy + project-tile→image mapping
├── pages.md               Section hierarchies + image-order for each subpage
├── download.py            Pulls landing-page assets
├── download_pages.py      Pulls subpages + their newly-referenced assets
└── assets/
    ├── images/            Project tiles, case-study figures, favicon (34 files)
    ├── fonts/             Woff2 files referenced across the site (65 files)
    ├── scripts/           Framer/React/motion runtime .mjs bundles (27 files)
    └── data/              Search-index JSONs
```

## Coverage

- **Captured:** homepage, `/projects`, `/idiom`, `/base-ui/building-multi-brand-design-system`,
  `/base-ui/components-atomic-design`.
- **Not captured:** the ~30 `/blog/*` posts and the `/blog` index. Routes are
  listed in `searchIndex.json` if you want them later.

## What to use vs. what to discard

- **`content.md`** — homepage copy reference for the Next.js page.
- **`pages.md`** — section/heading skeleton + image-order for each case study.
  For full paragraph text, look up the route in `searchIndex.json` (the `p`
  array has every paragraph, in order) or read `pages/<route>.html`.
- **`assets/images/`** — placeholders; map to tiles/figures via `content.md`
  and `pages.md`. Belle will likely swap in higher-fidelity art per the brand
  direction in `AGENTS.md`.
- **`assets/fonts/`** — these are Framer's hashed woff2 subsets, not canonical
  family files. For the rebuild, prefer `next/font` (Google Fonts / Fontshare)
  rather than shipping these blobs.
- **`assets/scripts/`** — Framer's runtime bundles. Reference only (e.g. for
  inspecting motion behaviour). Don't load them from the new site.
- **`index.html` / `pages/*.html`** — SSR'd output. Mostly Framer-React runtime,
  so reading the DOM structure is messy. The markdown summaries are usually
  more useful than the raw HTML.

## Re-running

```sh
python3 download.py        # homepage + landing assets
python3 download_pages.py  # subpages + new assets
```

Both scripts are idempotent — they skip files that already exist locally.

# Kaizrug OS v2.1 Production Site

This repository is a static production site for Kaizrug OS v2.1. It has no build
step, no package manager, and no backend runtime. Deploy the repository root as a
static site.

## Production Entry Points

The root HTML files are lightweight redirects kept for clean public URLs:

- `index.html` -> `html/index.html`
- `about.html` -> `html/about.html`
- `about.ar.html` -> `html/about.ar.html`
- `journey.html` -> `html/journey.html`

The full production pages live in `html/`.

## Core Files

- `html/index.html` - main landing page with hero, proof carousel, live systems,
  operating domains, and contact footer.
- `html/about.html` - English profile and internal proof page.
- `html/about.ar.html` - Arabic RTL scroll experience with canvas particles.
- `html/journey.html` - mobile-first story sequence.
- `css/shared.css` - shared production styling, theme tokens, carousel animation,
  focus states, RTL helpers, and reduced-motion rules.
- `js/carousel.js` - homepage carousel pause/play behavior.
- `js/scroll-sections.js` - Arabic page section activation and particles.
- `js/stage-animator.js` - journey page scene rotation, progress, and particles.

## Archive

Non-production files are grouped under `archive/` so the root stays focused on
deployment:

- `archive/workshop/` - older workshop and studio pages plus their local CSS.
- `archive/legacy/` - unused root styles/scripts, placeholder assets, and the
  empty legacy `README.md.txt`.

These files remain available for reference, but they are not part of the primary
public URL set.

## Deployment

Cloudflare Pages settings:

- Framework preset: None
- Build command: leave empty
- Build output directory: `/`

After deployment, verify:

- `/`
- `/about.html`
- `/about.ar.html`
- `/journey.html`

For detailed launch steps, see `DEPLOYMENT_GUIDE.md`.

# Deployment and Runtime Verification — Kaizrug OS

**Updated:** 7 November 2026  
**Status:** **HOLD — preview/build evidence exists; current production runtime is not reproduced**

This document supersedes the May 2026 setup instructions in this repository. Do not create a new Pages project or upload a second copy simply because an older guide described that workflow.

## 1. What the current repository and build records show

- `index.html` at the repository root redirects to `html/index.html`.
- `html/` contains the public-facing pages.
- `css/` contains shared styling.
- `js/` contains page behavior.
- `wrangler.jsonc` declares:
  - Worker name: `kaizrugos`
  - Static assets directory: `.`
  - Compatibility date: `2026-06-08`

Current CI/deployment evidence:
- GitHub Actions reported a successful GitHub Pages deploy job on 25 October 2026 for main commit `f0e60bdc1c64f128f6c589de3b3b6ba6c86d4975`.
- Cloudflare Workers reported a successful preview build for current review commit `e16e4098db03a65d1308d085c41354dd46d201de`.
- The current preview build reported Worker version `2d0e766d-d573-45cf-b339-70af339874c5` and branch preview URL `https://fix-public-claims-and-docs-2026-11-07-kaizrugos.kayzjoel.workers.dev`.
- A targeted HTTP smoke test returned 200 for the root, `/html/`, the English and Arabic profile routes, the journey route, shared CSS, and the three referenced JavaScript assets.

These records prove that the build completed and the preview endpoints returned content at test time. They do **not** prove full browser rendering, interaction behavior, mobile layout, console cleanliness, formal accessibility conformance, or the current production Worker route.

## 2. Do not do these things during recovery

- Do not create a second Cloudflare project to replace an unidentified existing project.
- Do not assume this repository is connected to Cloudflare Pages because an old guide says so.
- Do not change the Worker/Pages product type, build output, routes, DNS, or custom domains without first identifying the current production configuration.
- Do not upload local folders over an existing project until its source and deployment history are known.
- Do not label a route LIVE based only on the existence of `wrangler.jsonc`, a GitHub repository, a successful build, or an old screenshot.

## 3. Recovery and verification sequence

### A. Identify the production deployment authority

In the Cloudflare account, inspect Workers & Pages and locate the Worker associated with the recorded route:

- `kaizrugos` (the name declared in `wrangler.jsonc` and in the Cloudflare build check)
- Any separately maintained `kaizrug-hq` project

Record the exact project/Worker name, production URL, connected repository, production branch, build/deploy settings, route configuration, and latest production deployment/version identifier.

A successful PR preview build is not a substitute for inspecting the active production configuration.

### B. Match deployment to source

The GitHub Pages deploy job is associated with main commit `f0e60bdc1c64f128f6c589de3b3b6ba6c86d4975`. The Cloudflare PR preview build is associated with review commit `4636c1fdc6a6de3874af5e8df2a15fa5853c0304`. These mappings are recorded in [PROOF.md](./PROOF.md).

The review branch is not merged to `main`. Its successful preview build is not a production release. Confirm the active production branch and deployed version in Cloudflare before any production change.

### C. Verify the actual route

From a browser, test:

- `/`
- `/html/index.html`
- `/html/about.html`
- `/html/about.ar.html`
- `/html/journey.html`

Confirm that CSS and JavaScript load without 404s, the root redirect works, Arabic text direction is correct, and all external links are intentional.

### D. Verify behavior

Test on mobile and desktop:

- Keyboard navigation and focus visibility
- Carousel pause/play and scene navigation
- Reduced-motion behavior
- Arabic RTL rendering
- WhatsApp, email, and external project links
- Browser console and network errors

Do not claim a formal accessibility standard based solely on this manual checklist.

### E. Record evidence

For each route, save the date, tested URL, observed page title/content, browser result, deployment identifier, source commit, and evidence location. Update [PROOF.md](./PROOF.md) only after the evidence is available.

## 4. Release gate

A release can be considered for publication only after:

- The production hosting project and route configuration are identified.
- The active production source-to-deployment mapping is established.
- The exact target URL is tested.
- The changed pages and interactions are reviewed.
- No private data or unverified live claims are published.

Until then, the production route status is **NOT REPRODUCED** or **BLOCKED**, not LIVE.

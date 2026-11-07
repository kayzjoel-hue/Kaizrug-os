# Deployment and Runtime Verification — Kaizrug OS

**Updated:** 7 November 2026  
**Status:** **HOLD — deployment authority and runtime mapping not reproduced**

This document supersedes the May 2026 setup instructions in this repository. Do not create a new Pages project or upload a second copy simply because an older guide described that workflow.

## 1. What the current repository contains

- `index.html` at the repository root redirects to `html/index.html`.
- `html/` contains the public-facing pages.
- `css/` contains shared styling.
- `js/` contains page behavior.
- `wrangler.jsonc` declares:
  - Worker name: `kaizrugos`
  - Static assets directory: `.`
  - Compatibility date: `2026-06-08`

This is source/configuration evidence. It does **not** prove that a Cloudflare Worker or Pages project is deployed from this branch, or that any recorded public URL currently serves this commit.

## 2. Do not do these things during recovery

- Do not create a second Cloudflare project to replace an unidentified existing project.
- Do not assume this repository is connected to Cloudflare Pages because an old guide says so.
- Do not change the Worker/Pages product type, build output, routes, DNS, or custom domains without first identifying the current project.
- Do not upload local folders over an existing project until its source and deployment history are known.
- Do not label a route LIVE based only on the existence of `wrangler.jsonc`, a GitHub repository, or an old screenshot.

## 3. Recovery and verification sequence

### A. Identify the existing deployment authority

In the Cloudflare account, inspect Workers & Pages and locate the project/Worker associated with the recorded route:

- `kaizrugos` (the name declared in `wrangler.jsonc`)
- Any separately maintained `kaizrug-hq` project

Record the exact project name, type (Worker or Pages), production URL, connected repository, production branch, build/deploy settings, and latest deployment identifier.

If the expected project cannot be found, mark the route **BLOCKED** and resolve ownership before creating anything new.

### B. Match deployment to source

Compare the deployed source commit or asset version with the intended GitHub branch and commit. The source branch currently has a separate review branch for evidence-safe copy fixes; those changes are not merged into `main` and are not a production release.

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

- The deployment authority is identified.
- The source-to-deployment mapping is established.
- The exact target URL is tested.
- The changed pages and interactions are reviewed.
- No private data or unverified live claims are published.

Until then, the correct status is **NOT REPRODUCED** or **BLOCKED**, not LIVE.

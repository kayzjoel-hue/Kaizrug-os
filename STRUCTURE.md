# Kaizrug OS — Repository Structure

**Review date:** 7 November 2026  
**Scope:** GitHub source tree inspection. This document describes the repository, not a verified live deployment.

## Source layout

```text
Kaizrug-os/
├── 00_System_Core/
├── archive/
├── css/
│   └── shared.css
├── diagrams/
├── docs/
├── html/
│   ├── index.html
│   ├── about.html
│   ├── about.ar.html
│   └── journey.html
├── js/
│   ├── carousel.js
│   ├── scroll-sections.js
│   └── stage-animator.js
├── index.html
├── wrangler.jsonc
├── README.md
├── ARCHITECTURE.md
├── BOUNDARIES.md
├── DESIGN-TRUTH.md
├── DEPLOYMENT_GUIDE.md
├── EXECUTION_REPORT.md
├── PROOF.md
├── SIR.md
└── START_HERE.md
```

The exact contents of `00_System_Core/`, `archive/`, `diagrams/`, and `docs/` may evolve; inspect the branch before changing them.

## Page roles

| File | Role |
|---|---|
| Root `index.html` | Redirects to `html/index.html` |
| `html/index.html` | Main visual introduction and portfolio references |
| `html/about.html` | English profile and governance-model explanation |
| `html/about.ar.html` | Arabic RTL profile and documented system models |
| `html/journey.html` | Mobile-first presentation of the governance model and recorded URLs |

## Shared assets

- `css/shared.css` — shared typography, surfaces, animation helpers, and styling.
- `js/carousel.js` — carousel pause/play behavior.
- `js/scroll-sections.js` — scroll-triggered section behavior and visual effects.
- `js/stage-animator.js` — mobile scene progression and controls.
- `wrangler.jsonc` — declares Worker name `kaizrugos` and static asset directory `.`.

## Important boundaries

- The eight-part stack is a **documented governance model**, not proof that all eight layers run as production services.
- “Human-governed AI workflows” describes the permission model; it is not a claim that autonomous agents are active.
- The recorded external URLs are portfolio references. Their current availability and source-to-deployment mapping are tracked separately in [PROOF.md](./PROOF.md).
- The source includes accessibility-aware patterns. This repository review does not certify WCAG 2.1 AA conformance.
- The repository contains inline scripts in some HTML pages; do not describe it as having zero inline scripts.

## Deployment status

The presence of `wrangler.jsonc` does not establish a current Cloudflare deployment. See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) and [SIR.md](./SIR.md) before any release.

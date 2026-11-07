# Kaizrug OS

Kaizrug OS is a **Notion-based governance and execution framework** for organizing decisions, work, knowledge, automation permissions, product development, and evidence.

It is not a kernel operating system, cloud platform, or autonomous agent runtime.

Its operating idea is:

```text
Information
→ Evidence
→ Decisions
→ Controlled execution
→ Reusable assets
→ Measured outcomes
```

## What it is designed to support

- Runtime decision and work tracking
- Knowledge capture and retrieval
- Permission-aware automation governance
- Product and project documentation
- Evidence collection and review
- Public explanation and distribution

## Platform boundaries

| Surface | Intended role |
|---|---|
| Notion | Governance, operating records, decisions, and runtime status |
| GitHub | Source code, public documentation, change history, and review |
| Cloudflare / Vercel | Deployment and runtime evidence for the projects they actually host |
| Web | Public presentation and distribution |
| Product storefront | Checkout and customer delivery |

A repository, design, workflow specification, or deployment configuration does not by itself prove a live service, successful integration, customer usage, or revenue.

## Core frameworks

- Command Center
- Truth Stack
- Design Truth
- Open Loops
- Access Maps
- Automation and integration records
- Template Studio
- Knowledge archive
- Product and revenue records
- Royal Connect Africa workstreams

## Current evidence status — 7 November 2026

| Area | Current status |
|---|---|
| Public GitHub repository | **VERIFIED** — repository and source files are accessible |
| Static-site source | **VERIFIED** — HTML, CSS, JavaScript, and Wrangler configuration are present |
| Latest observed main-branch commit | **VERIFIED** — 25 October 2026; see [PROOF.md](./PROOF.md) |
| GitHub Pages deploy job | **VERIFIED** — GitHub reported success for the 25 October main-branch commit; current route content is not thereby verified |
| Cloudflare Workers PR preview build | **VERIFIED** — Cloudflare built the current review-branch head; preview smoke test returned HTTP 200 for the key pages and assets |
| Current PR preview route responses | **VERIFIED** — HTTP 200 for root, main pages, shared CSS, and referenced JavaScript; see [PROOF.md](./PROOF.md) |
| Current production runtime/version mapping | **NOT REPRODUCED** — preview is not production |
| Production automations / autonomous agents | **NOT CLAIMED** |
| Formal WCAG 2.1 AA conformance | **NOT CERTIFIED** by this repository audit |
| Customer outcomes / revenue | Must be evidenced separately; no claim is made here |

The recorded URLs and build evidence are retained in [PROOF.md](./PROOF.md). A successful build or deployment job is not an uptime guarantee or proof of a tested customer journey.

## Current phase

```text
Source reconciliation
→ Runtime verification
→ Customer-facing packaging
→ Controlled distribution
→ Measured outcomes
```

## Start here

1. Read [BOUNDARIES.md](./BOUNDARIES.md) before changing system claims or authority.
2. Read [ARCHITECTURE.md](./ARCHITECTURE.md) for the intended framework.
3. Read [PROOF.md](./PROOF.md) for current evidence status.
4. Read [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) before any deployment investigation.
5. Read [SIR.md](./SIR.md) for the latest source-level review.

## Evidence rule

Use these distinctions consistently:

- **VERIFIED** — directly reproduced with evidence.
- **NOT REPRODUCED** — evidence was not obtained; this does not prove the service is down.
- **INFERRED** — suggested by source structure or configuration, not directly observed.
- **BLOCKED** — a required permission, source, or test is unavailable.

Do not promote a designed capability or preview test into a production-service claim without a current production runtime test.

See [BOUNDARIES.md](./BOUNDARIES.md).

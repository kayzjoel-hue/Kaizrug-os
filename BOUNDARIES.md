# Kaizrug OS Boundaries

This document defines the platform boundaries for Kaizrug OS.

The goal is to prevent multi-source truth confusion.

## Core rule

```text
Notion decides.
GitLab tests.
GitHub explains.
Web distributes.
Products monetize.
```

## Platform roles

| Platform | Role | What belongs here |
|---|---|---|
| Notion | Runtime OS | Command Center, Truth Stack, Open Loops, decisions, ledgers, execution tracking |
| GitLab | Engineering Lab | Drafts, experiments, automation tests, prototypes, unreleased templates |
| GitHub | Public Truth Layer | README, architecture, framework maps, proof, product catalog, roadmap |
| Web | Distribution Layer | Landing pages, public sites, product pages, marketing |
| Products | Revenue Layer | Templates, consulting, audits, guides, RCA offers |

## Notion boundary

Notion is the only runtime source of truth.

It contains:

- Command Center
- Truth Stack
- Open Loops
- Execution tracking
- Memory
- Decisions
- Runtime governance
- Ledgers

GitHub and GitLab cannot override Notion runtime truth.

## GitLab boundary

GitLab is the Engineering Lab.

It may contain:

- Drafts
- Experiments
- Automation tests
- Internal specifications
- Architecture prototypes
- Template development
- Research branches

GitLab is not public truth.

GitLab is not runtime truth.

## GitHub boundary

GitHub is the Public Truth Layer.

It may contain:

- Public architecture
- README
- Framework maps
- Diagrams
- Proof links
- Screenshots
- Public templates
- Roadmap
- Product catalog

GitHub explains the system. It does not run the system.

## Web boundary

The Web layer distributes and sells.

It may contain:

- Landing pages
- Public portfolio pages
- Product pages
- Case studies
- Contact forms
- Campaign pages

The Web layer should never claim more than runtime proof supports.

## Product boundary

Products are monetized outputs.

They may include:

- Notion templates
- Operating system kits
- Documentation audits
- Consulting offers
- Hospitality systems
- RCA trade/tourism systems
- Guides and playbooks

## Claim hygiene

Do not publicly say:

- “Production automation is live”
- “Agents are running”
- “Fully automated execution”

unless current runtime proof confirms it.

Use proof-safe language:

```text
Designed, documented, staged, and governed by verification gates.
```

## Promotion flow

```text
Notion runtime need
↓
GitLab experiment
↓
Validated output
↓
GitHub public explanation
↓
Web distribution
↓
Product / revenue offer
```

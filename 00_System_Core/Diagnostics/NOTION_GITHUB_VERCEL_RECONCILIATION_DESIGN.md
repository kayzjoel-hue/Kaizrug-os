# Notion ↔ GitHub ↔ Vercel Reconciliation — Design

**State:** PROPOSED / documentation only. No workflow is enabled by this document.
**Prepared:** 2026-10-25
**Governance:** [KX-PROT-01 — Anti-Drift & Re-Entry Protocol](https://app.notion.com/p/c32faf8e7f80428d9b1dd4c0c734cdf3) · [Semantic Loop Closure Map](https://app.notion.com/p/3d2e52a1d2ea818a924ad74723826a42) · [KAIZRUG HQ — Master Index](https://app.notion.com/p/0fcf3a11bd5143b985432635ccd0bcb6) · [Command Center v2026.2](https://app.notion.com/p/322e52a1d2ea813f9595fa26567503fa)

## 1. Purpose and authority

Provide an evidence-first reconciliation of canonical Notion runtime references, GitHub source/CI state, and deployment state. This is a control and evidence workflow, not a new source of truth.

- **Notion:** runtime governance, canonical records, and operational truth.
- **GitHub:** repository history, code/documentation, review trail, and CI evidence.
- **Vercel:** deployment evidence only where a verified Vercel project-to-repository mapping exists.
- **Actual runtime:** must be separately observed; a matching SHA or READY deployment does not prove application health or usage.

The two repositories have distinct roles:
- `kayzjoel-hue/Kaizrug-os`: public OS explanation / documentation authority.
- `kayzjoel-hue/kaizrug-hq`: HQ support/portal and implementation companion; preserve existing `00-core/` namespace and project registry.

## 2. Baseline findings (2026-10-25)

- **VERIFIED:** GitHub connector can read both repositories; authenticated repository metadata reports `admin/maintain/push/pull` permissions and default branch `main`.
- **VERIFIED:** `00_System_Core/README.md` and its hierarchy are present on `main` in both repositories. The hierarchy commits are `f0e60bdc1c64f128f6c589de3b3b6ba6c86d4975` (OS) and `9f32a2af0f87a107bfe3465ac68d7885a07ebf20` (HQ).
- **VERIFIED:** KX-PROT-01 states the sequence retrieve → establish authority/canonicality → separate truth layers → reconcile → minimum intervention → verify. It designates CC v2026.2 as runtime authority and KX-DB-11 as integration truth.
- **VERIFIED:** the Semantic Loop Closure Map defines Experience → Insight → Framework → Database/System → Documentation → Integration/Deployment → Verification → Execution → Measurement → Revenue/Legacy.
- **NOT REPRODUCED:** Vercel project searches filtered to either target repository returned no projects in the authenticated Vercel scope. The returned team context listed other linked projects, not these two repositories.
- **INFERRED:** the README's listed public routes include GitHub Pages and Cloudflare Workers, so Vercel may not be the deployment provider for these repos. This must be mapped, not assumed.
- **BLOCKED:** deployment reconciliation for these repositories until the owning deployment provider/project and canonical production target are verified. No claim is made that a Vercel project cannot exist in another account/team or inaccessible scope.
- **NOT REPRODUCED:** current Notion API permission scopes and the exact canonical database/data-source IDs for a machine-readable reconciliation record have not yet been proven end-to-end.

## 3. Smallest safe architecture

### A. Evidence Collector — read-only

Initial trigger: manual `workflow_dispatch` only. No schedule, push trigger, automatic deployment, or production write.

Collect:
1. Repository identity, default branch, current HEAD SHA, latest relevant commits, and changed paths.
2. GitHub Actions run/check state for the inspected commit, with run URLs and timestamps.
3. Notion canonical reference identifiers, titles, URLs, last-edited/freshness facts, and explicitly readable properties/content needed for comparison.
4. Vercel project/deployment IDs, linked repository, target, deployment SHA, status, URL, and timestamps only when a verified project mapping is available.
5. Deployment-provider mapping for public routes when Vercel is not the actual provider.

Output: a timestamped JSON evidence manifest plus human-readable Markdown summary. Store no tokens, environment-variable values, or private payloads in artifacts.

### B. Reconciliation Engine — deterministic

Compare observations against explicit expectations and report each finding with:
- `VERIFIED`: directly observed from an authoritative source in this run.
- `NOT REPRODUCED`: a prior/documented claim was not confirmed by the available search or observation; scope limitations must be stated.
- `INFERRED`: reasoned conclusion, explicitly not direct evidence.
- `BLOCKED`: required access, mapping, identifier, or evidence is missing.

Core checks:
- Canonical repository and branch identity agree with the Notion registry.
- CI evidence is attached to the inspected commit, not merely the branch name.
- Deployment source repository and SHA are attributable to the target repository.
- The deployment provider and target environment are explicitly mapped.
- Notion references are current enough for the claim and point to the canonical pages/data sources.
- Any mismatch produces a discrepancy record; absence of evidence is not automatically a mismatch.
- A matching source SHA does not certify runtime health, customer usage, or revenue.

### C. Review / controlled execution — gated

Phase 1 is report-only. Do not mutate Notion, merge PRs, deploy, change secrets, or toggle automations.

After the report has been tested and reviewed, a separately authorized phase may:
1. Create a GitHub Issue or PR comment containing the exact evidence-manifest ID/hash and proposed change.
2. Validate reviewer identity/permission and bind approval to that exact evidence snapshot and change.
3. Publish a Notion reconciliation record only after explicit approval and only to a verified canonical target.
4. Read back the Notion record and append the resulting page ID, timestamps, action result, and audit links.

A generic label or `/approve` comment alone is not sufficient. Re-check the evidence snapshot and reviewer permission at execution time. If either changed, require a new review.

## 4. Minimal evidence schema

```json
{
  "schema_version": "1.0",
  "run_id": "generated-per-run",
  "observed_at": "ISO-8601",
  "scope": {
    "repositories": ["kayzjoel-hue/Kaizrug-os", "kayzjoel-hue/kaizrug-hq"],
    "notion_refs": ["KX-PROT-01", "Semantic Loop Closure Map", "CC v2026.2"],
    "deployment_provider": "unknown-until-verified"
  },
  "observations": [],
  "findings": [],
  "limitations": [],
  "approval": {
    "required": true,
    "evidence_manifest_hash": null,
    "reviewer": null,
    "approved_at": null
  }
}
```

Every observation should include source system, resource ID/URL, timestamp, value, and retrieval result. Keep secrets and secret values out of this schema.

## 5. Permissions and security

- GitHub: least-privilege read permissions for repository contents, metadata, Actions checks/runs, and pull-request/issue review evidence. No write token is needed for Phase 1.
- Notion: read-only access to explicitly shared canonical pages/data sources. Do not request write scopes until a separate approval phase is authorized.
- Vercel: read-only access to project/deployment metadata only. Never read or export environment-variable values.
- Keep credentials in repository/environment secret storage; never commit them, print them, or include them in Notion or artifacts.
- Use GitHub Actions permissions explicitly; default to `contents: read`. Pin third-party actions to reviewed immutable SHAs before production use.
- Manual trigger only until repeatability, data minimization, failure handling, and operator recovery are verified.
- No production deploy, rollback, domain change, Notion mutation, or automation activation is in scope for this design branch.

## 6. Failure handling

- Missing permission or canonical ID → `BLOCKED`, stop that source's checks, report the exact missing prerequisite.
- Rate limit / transient error → bounded retry with backoff; if still failing, mark incomplete, never pass.
- No Vercel project mapping → deployment finding `BLOCKED`; do not fabricate a project ID or infer a deployment from a URL.
- Conflicting Notion references → preserve all candidates and escalate to the runtime authority; do not select by recency or search rank alone.
- Partial evidence → report partial coverage and list uninspected sources.
- Failed validation → no publish action; preserve artifacts/log URLs for re-entry.

## 7. Acceptance gates

1. Both repository identities and inspected SHAs are captured correctly.
2. Every CI result is tied to the inspected SHA with source URLs.
3. Notion reads use verified canonical references and explicitly report unavailable fields/scopes.
4. Deployment provider/project mapping is proven before comparing deployment SHAs.
5. Missing data is distinguished from negative evidence.
6. A test run produces a report/artifact without changing Notion, GitHub default branches, Vercel settings, or production.
7. Reviewer approval is identity-checked and bound to the manifest hash before any future write.
8. Any future write is read back and verified; failures preserve the return path.
9. The operator runbook can be followed without exposing credentials or requiring architectural judgment.

## 8. Rollout sequence

- **P0 — Reconcile:** confirm canonical Notion IDs and actual deployment provider/project mapping.
- **P1 — Read-only proof:** implement manual collector and deterministic report; test on known commits and deliberate missing-data cases.
- **P2 — Review:** add a GitHub Issue/PR review surface tied to a manifest hash; still no writes to Notion.
- **P3 — Controlled publication:** only after explicit authorization, verified Notion target, reviewer identity checks, and successful read-back tests.
- **P4 — Scheduling:** only after repeated successful manual runs, operational ownership, alerting, and recovery have been demonstrated.

**Current disposition:** design branch only. No workflow has been added or enabled, no Notion data has been changed, and no deployment has been triggered.

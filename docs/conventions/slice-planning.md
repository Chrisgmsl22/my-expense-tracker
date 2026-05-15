# Slice Planning

How to plan a vertical slice **before** writing code. The goal is to ship 2-3
small PRs per week, which only works if each slice has a clear scope before it
starts.

## When to plan

When a slice becomes "next up" (active), spend ~10-15 minutes filling in the
planning block in the phase file. Don't plan slices that are weeks out —
context will be stale by then.

## Where the planning lives

Inline in the phase file, under the slice's task list. The Plan block is
**temporary** — it exists only while the slice is in flight. At most one
slice has a Plan block at a time (the active one); all other slices stay as
bare checklists.

**The Plan block is deleted in the same PR that ships the slice**, not after
merging. This keeps `main` clean: there's never a window where the merged
branch has a stale Plan block. The Plan content is preserved in the PR
description, which is its permanent home.

For non-trivial design decisions discovered during planning, write an ADR in
`docs/decisions/`.

## The template

```markdown
#### N.M.K: [Slice name] [PR]

##### Plan

**Scope (in)**
- Bullet list of what this PR touches.
- File-level granularity is good ("services/category.service.ts").

**Scope (out)**
- Things explicitly deferred to later slices.
- Anything tempting to bundle in but doesn't belong here.

**Design decisions**
- Key calls being made (link to ADRs for the big ones).
- Method signatures if non-obvious.

**Acceptance criteria**
- What needs to be true for this to ship.
- Tests passing, lint green, manual smoke check (if applicable).

**Open questions**
- Anything I'm unsure about — flag for design discussion with AI before coding.

##### Tasks

- [ ] ...the actual checklist
```

## Rules of thumb

- **Scope (out) is as important as Scope (in)**. Naming what's NOT in the PR
  is the most reliable way to keep PRs small.
- **One slice = one concern**. If the "Scope (in)" has two unrelated items,
  it's two slices.
- **Open questions block coding**. Resolve them in design discussion first —
  don't start coding with unanswered design questions; you'll either rework or
  bundle the answer into the PR.
- **Acceptance criteria should be checkable**. "Tests pass" is fine. "Code is
  clean" is not — it's not measurable.

## The cycle

1. **Slice becomes "next up"** → fill in the Plan block in the phase file.
2. **Discuss open questions** with AI → resolve before coding.
3. **Implement** (per [learning mode](../../claude.md#three-modes-of-working)).
4. **Tests + lint green** locally.
5. **Pre-PR cleanup** (all in one commit, part of the slice's PR):
   - Mark all tasks `[x]` in the phase file.
   - Copy the Plan block content into the PR description (Summary / Design / Test plan).
   - **Delete the Plan block** from the phase file.
6. **Open PR** → the PR template's checklist enforces all three pre-PR steps.
   Unchecked boxes block the merge via CI.
7. **Merge** → `main` is immediately clean. No stale Plan blocks ever land
   on `main`.
8. **Update** `docs/roadmap/README.md` if a sub-phase or phase status changed.

### Why "delete in the PR, not after"

If deletion happened after merge, `main` would briefly contain a stale Plan
block between the slice merge and a follow-up cleanup PR. By bundling the
deletion into the slice's own PR, the cleanup is atomic with the work, and
the PR description preserves the planning content permanently.

## What a "good" slice looks like

- **One concern**: a service, a controller, a piece of cross-domain integration.
- **30 minutes to review**: a reviewer can hold the whole change in their head.
- **Tests included**: every PR ships with the tests that cover its code.
- **Independently mergeable**: doesn't depend on an unmerged sibling PR.

## What's NOT a slice

- "Implement all of Sub-Phase 2.2" — that's the whole sub-phase, multiple slices.
- "Refactor + new feature" — split into "refactor" PR + "feature" PR.
- "Big bang infrastructure change" — break into independently reviewable steps.

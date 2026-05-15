# PR Strategy

How work is sliced into PRs across this project.

## Goal

Ship one PR every 1-2 days. Sub-phases are structured as **vertical slices** —
small, independently shippable PRs marked with `[PR]` in the roadmap.

A vertical slice is a self-contained piece of work that can be reviewed,
tested, and merged on its own. "Service + types + unit tests" is one slice;
"Controller + routes + validation + controller unit tests" is another.

## Rules of thumb

- Each slice should be reviewable in under 30 minutes.
- Each slice ends with passing tests and a green CI.
- Don't bundle unrelated work into a single PR.
- It's better to have 3 small PRs than 1 big one.
- When in doubt, split smaller.

## Default split pattern per feature domain

For most backend feature domains (budgets, income, debt, etc.):

1. **Service + types + unit tests** `[PR]`
2. **Cross-domain integrations** (e.g., dashboard updates) `[PR]`
3. **Controller + routes + validation + controller unit tests** `[PR]`
4. **Manual E2E testing in Postman** — verification step, no PR

## Frontend slices

Frontend slices are mostly self-contained pages or features. Each `[PR]` is
independently shippable. Bundle together only if a feature is truly trivial.

## Commit guidelines

- One logical change per commit.
- Clear, descriptive commit messages (use imperative mood: "add", "fix",
  "refactor", not "added" / "fixed").
- Co-authored attribution when applicable.

## When to commit

- After completing a sub-phase.
- After tests pass.
- Only commit when explicitly asked — do not auto-commit.

## Branching

- `main` — production-ready code, branch-protected.
- `feat/<feature-name>` — feature branches.
- `docs/<topic>` — documentation-only branches.
- `fix/<issue>` — bug fix branches.

# ADR-0000: Using Architecture Decision Records

Date: 2026-05-13
Status: Accepted

## Context

As MoneyFlow grows, design decisions get made in conversations, PR descriptions,
or — worse — only in someone's head. Six months later, nobody remembers *why*
a certain pattern was chosen, and the reasoning behind a non-obvious trade-off
gets lost. This makes future changes risky: contributors revert "weird" code
without realizing it was deliberate.

## Decision

Capture significant architecture and design decisions as ADRs (Architecture
Decision Records) stored in `docs/decisions/`. Each ADR is a short markdown
file that records one decision and the reasoning behind it.

### Format

Every ADR follows this structure (Michael Nygard's template):

```markdown
# ADR-NNNN: Short Imperative Title

Date: YYYY-MM-DD
Status: Proposed | Accepted | Deprecated | Superseded by ADR-XXXX

## Context
What is the problem? What forces are at play?

## Decision
What did we decide?

## Consequences
What are the trade-offs? Both positive and negative.
```

### Conventions

- **Filename**: `NNNN-short-kebab-case-title.md` (zero-padded 4-digit prefix).
- **Numbering**: monotonic, never reused. Skip numbers if needed.
- **Immutability**: once a decision is `Accepted`, never edit the body. If we
  change our mind later, write a new ADR that supersedes the old one, and add
  `Superseded by ADR-XXXX` to the old ADR's status line.
- **Granularity**: one decision per ADR. Don't batch unrelated decisions.

### When to write an ADR

Write an ADR when:
- The decision involves a meaningful trade-off worth explaining.
- A future contributor would reasonably ask "why was this done this way?"
- The decision is hard to reverse (schema choices, data model, auth flow).
- We deliberately defer a feature (YAGNI is a real decision).

Don't write an ADR for:
- Implementation details handled by code reviews.
- Style/formatting choices (those belong in linter configs).
- Library version bumps without behavioral changes.

## Consequences

**Positive:**
- Decisions and their rationale live next to the code, not in chat history.
- New contributors can read `docs/decisions/` to understand the architecture.
- Forces explicit thinking about trade-offs before committing.

**Negative:**
- Small overhead per decision (~10 min to write an ADR).
- Requires discipline to actually write them when decisions are made.

# ADR-0002: Defer Per-User Customization of System Categories

Date: 2026-05-13
Status: Accepted

## Context

System categories (Rent, Groceries, Restaurants, etc.) are seeded once and
shared across all users — each user references the same `Category` row by ID.
This raises the question: can users customize attributes of a system category
(specifically the `isRelevant` flag, which marks essential vs. discretionary
spend) for their own perspective?

Example: Christian might consider gym memberships essential (`isRelevant = true`)
while another user considers them discretionary (`isRelevant = false`).

Two implementation approaches were considered:

1. **Per-user override table** (`UserCategoryPreferences`): every category
   read joins this table to resolve effective values for the current user.
2. **Fork on customize**: when a user customizes a system category, the row
   is duplicated into a user-owned copy that overrides the system one.

Both add meaningful complexity:
- Approach 1 turns every category query into a join, and every aggregation
  must respect per-user overrides.
- Approach 2 fragments the category namespace ("Rent" exists once globally
  and again per-user-who-customized), complicating reporting and creating
  the question of what happens when the system "Rent" is later updated.

## Decision

**Defer this feature entirely for v1.** System categories are fully immutable
to end users:
- Cannot be renamed
- Cannot be deleted
- Cannot have `isRelevant` toggled
- Cannot have any other field modified

Users who want different categorization create their own custom categories
(`isSystemCategory = false`), which they fully control.

This decision will be revisited if:
- Real users request per-perspective `isRelevant` overrides.
- The product roadmap introduces features (e.g., AI-driven categorization)
  that benefit from per-user category metadata.

## Consequences

**Positive:**
- Simpler schema: no `UserCategoryPreferences` table, no fork-on-customize
  duplication logic.
- Simpler queries: category reads return shared system rows directly without
  joins or merges.
- Simpler service layer: the rule "system categories are immutable" is a
  single, easy-to-enforce check.
- Reduced surface area for bugs in the most-queried table in the app.

**Negative:**
- Users cannot express personal opinions about whether a system category is
  essential — they're stuck with the seeded default for `isRelevant`.
- If demand emerges later, retrofitting per-user overrides is non-trivial:
  every existing category-aware query must be updated.

**Mitigation:**
- The custom category escape hatch (users can create their own categories)
  partially covers the gap — a user who disagrees with `isRelevant = false`
  on "Restaurants" can create a custom "Dining Out (Essential)" category and
  use that instead.

## Related

- ADR-0001: Use sentinel "Unassigned" category for orphaned expenses.

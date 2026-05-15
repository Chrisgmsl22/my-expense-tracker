# ADR-0001: Use Sentinel "Unassigned" Category for Orphaned Expenses

Date: 2026-05-13
Status: Accepted

## Context

When a user deletes a category they previously assigned to expenses, the
referencing expenses need somewhere to go. Three approaches were considered:

1. **Block deletion** until the user manually reassigns every expense.
2. **Nullable foreign key**: make `Expense.categoryId` nullable; orphaned
   expenses have `categoryId = NULL`, rendered as "Unassigned" in the UI.
3. **Sentinel category**: seed a permanent system category named "Unassigned"
   and reassign orphaned expenses to it on deletion.

Option 1 was rejected on UX grounds — forcing manual reassignment is a slow,
frustrating experience, especially for a user with months of history.

The choice between Option 2 (nullable FK) and Option 3 (sentinel) is the
substantive decision.

## Decision

Use a **sentinel "Unassigned" system category**. When a user deletes a
category, the service reassigns all related expenses' `categoryId` to the
Unassigned category's ID inside a transaction.

The Unassigned category:
- Is seeded during the initial DB migration alongside other system categories.
- Has `isSystemCategory = true` (cannot be deleted by users).
- Is the only category that expenses transition *to* automatically.
- Is hidden or visually distinguished in the category picker UI (decided at the
  frontend layer, not enforced here).

When subcategories exist under a deleted category, they are cascade-deleted
along with their parent. The orphaned expenses lose only their `categoryId`
reference (reassigned to Unassigned); their `subcategoryId` is set to `NULL`
since subcategories are tightly bound to a specific parent category.

`Expense.categoryId` remains `NOT NULL` in the schema.

## Consequences

**Positive:**
- Aggregate queries (`GROUP BY categoryId`) work uniformly — no special
  handling for orphaned expenses.
- The data model expresses the invariant "every expense has a category"
  directly via the non-null FK.
- The UI doesn't need special-case rendering for `null`; "Unassigned" is just
  another category name.
- Users see their orphaned expenses surfaced in reports, making it easy to
  recategorize them later.

**Negative:**
- Requires explicit seeding logic and a guarded deletion path (the service
  must reject any attempt to delete the Unassigned category itself).
- The Unassigned category's UUID must be discoverable at runtime; this is
  handled by querying for it by a stable identifier (e.g., a `slug` field or
  an enum-like constant), not by hardcoding the UUID.
- Reassignment must run inside a transaction with the category deletion to
  avoid leaving expenses referencing a deleted row.

## Related

- ADR-0002: Defer system category customization.

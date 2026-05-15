# Phase 2: Core Expense Tracking

**Status**: 🟡 In Progress
**Goal**: Full expense CRUD, categories, cards, shared expenses, dashboard
**Duration**: 4-5 weeks

## What you'll learn

- Complex database relationships
- CRUD operations with Prisma
- Filtering and sorting
- Date handling
- Decimal precision for money
- Calculated fields
- Service layer patterns

## PR strategy

This phase introduced the vertical-slice PR strategy now used throughout the
roadmap. See [conventions/pr-strategy.md](../conventions/pr-strategy.md) for
the full rules.

---

## Sub-Phase 2.1: Expense CRUD Operations ✅

### 2.1.1: Expense Service ✅ (PR #11 — merged)

- [x] Create services/expense.service.ts
- [x] Implement createExpense (validate, calculate actualExpenditure, create in DB)
- [x] Implement getExpenses (with filters: dateFrom, dateTo, categoryId, cardId)
- [x] Implement getExpenseById (verify ownership)
- [x] Implement updateExpense (recalculate actualExpenditure if needed)
- [x] Implement deleteExpense (verify ownership)
- [x] Add TypeScript interfaces
- [x] Unit tests (29 tests)

### 2.1.2: Expense Controller ✅

- [x] Create controllers/expense.controller.ts
- [x] Implement 5 handlers (create, getAll, getById, update, delete)

### 2.1.3: Expense Routes ✅

- [x] Create routes/expense.routes.ts
- [x] POST /api/expenses, GET /api/expenses, GET /api/expenses/:id, PATCH /api/expenses/:id, DELETE /api/expenses/:id
- [x] Apply auth middleware
- [x] Mount routes

### 2.1.4: Validation Schemas ✅

- [x] Create schemas/expense.schema.ts
- [x] Define createExpenseSchema, updateExpenseSchema, getExpensesQuerySchema, expenseIdParamSchema
- [x] Extend validateRequest middleware to handle Body / Params / Query

### 2.1.5: Manual Testing (Postman) ✅

- [x] Create, get all, get single, update, delete expense flows
- [x] Verify actualExpenditure calculated
- [x] Test invalid category UUID and cross-user ownership

### 2.1.6: Controller Unit Tests ✅

- [x] expense.controller.test.ts covering all 5 handlers
- [x] Success responses and error propagation (parameterized with `it.each`)
- [x] Verify error message propagation

**Checkpoint**: Expense CRUD operational, actualExpenditure calculated, filtering works, ownership enforced ✅

---

## Sub-Phase 2.2: Category Management

### 2.2.1: Category Service [PR]

#### Plan

**Scope (in)**

- `backend/src/services/category.service.ts` — class with CRUD methods
- `backend/src/types/category.ts` — TypeScript interfaces
- `backend/src/services/category/category.service.test.ts` — unit tests (mocked Prisma)
- Seed Unassigned system category (migration or seed update)

**Scope (out)**

- Controller, routes, validation schemas → 2.2.3 (next slice)
- Subcategory CRUD → 2.2.2 (separate slice)
- System category customization (e.g., toggling `isRelevant`) — deferred per [ADR-0002](../decisions/0002-defer-system-category-customization.md)

**Design decisions**

- Cascade delete reassigns orphaned expenses to the "Unassigned" sentinel category — see [ADR-0001](../decisions/0001-unassigned-sentinel-category.md). Implement inside a Prisma transaction.
- System categories (`isSystemCategory = true`) are immutable to users. Service throws `ValidationError` on any update/delete attempt.
- The "Unassigned" category itself is also undeletable — guard explicitly.
- `getCategories(userId)` returns system categories ∪ user's custom categories.

**Acceptance criteria**

- All 5 service methods implemented with TypeScript types
- Unit tests cover: happy path for each method, the cascade-to-Unassigned flow, system category protection, Unassigned-category protection
- `make test` green, `make lint` green
- No controller/routes touched (proves the slice is service-only)

**Open questions**

- Does the current schema have `Expense.categoryId` as `NOT NULL`? — verify before coding (the cascade approach assumes it does).
- Does the seed already include an "Unassigned" category? — if not, decide whether to update the seed in this PR or in a sibling migration PR.

#### Tasks

- [ ] Verify schema (`Expense.categoryId` nullability, existing seed)
- [ ] Add Unassigned to seed if missing
- [ ] Create services/category.service.ts
- [ ] Implement getCategories (system + user's custom)
- [ ] Implement createCategory (custom)
- [ ] Implement updateCategory (block system categories)
- [ ] Implement deleteCategory (cascade to Unassigned per ADR-0001, transaction)
- [ ] Add TypeScript interfaces
- [ ] Unit tests covering all service methods + guards

### 2.2.2: Subcategory Service [PR]

- [ ] Implement subcategory CRUD methods
- [ ] Add ownership and parent-category checks
- [ ] Unit tests for subcategory methods

### 2.2.3: Category Controller + Routes + Validation [PR]

- [ ] Create controllers/category.controller.ts
- [ ] Create schemas/category.schema.ts (Zod schemas)
- [ ] Create routes/category.routes.ts (GET/POST/PATCH/DELETE)
- [ ] Apply auth middleware
- [ ] Mount routes
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 2.2.4: Subcategory Controller + Routes + Validation [PR]

- [ ] Add subcategory handlers + schemas + routes
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 2.2.5: Manual E2E Testing

- [ ] Get all categories
- [ ] Create custom category
- [ ] Add subcategory
- [ ] Update category
- [ ] Try delete category with expenses
- [ ] Delete empty category
- [ ] Verify system categories protected

**Design references**: [ADR-0001 Unassigned sentinel](../decisions/0001-unassigned-sentinel-category.md), [ADR-0002 Defer customization](../decisions/0002-defer-system-category-customization.md)

**Checkpoint**: Categories managed, subcategories work, system categories protected

---

## Sub-Phase 2.3: Card Management

### 2.3.1: Card Service (basic CRUD) [PR]

- [ ] Create services/card.service.ts
- [ ] Implement createCard, getCards, updateCard, deleteCard (check if in use)
- [ ] Add TypeScript interfaces
- [ ] Unit tests

### 2.3.2: Utilization Calculation [PR]

- [ ] Calculate current month spending per card (Prisma aggregate)
- [ ] Calculate utilization percentage for credit cards
- [ ] Add color-coded status (green/yellow/red)
- [ ] Return with card data
- [ ] Unit tests for calculations

### 2.3.3: Card Controller + Routes + Validation [PR]

- [ ] Create controllers/card.controller.ts
- [ ] Create schemas/card.schema.ts
- [ ] Create routes/card.routes.ts (GET/POST/PATCH/DELETE)
- [ ] Apply auth middleware
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 2.3.4: Manual E2E Testing

- [ ] Create card with all properties
- [ ] Add expenses to card
- [ ] Get cards, verify utilization
- [ ] Update card
- [ ] Delete unused card
- [ ] Try delete card with expenses

**Checkpoint**: Cards created, utilization calculated, CRUD works

---

## Sub-Phase 2.4: Dashboard Aggregations

### 2.4.1: Dashboard Service [PR]

- [ ] Create services/dashboard.service.ts
- [ ] Implement getDashboardData (month, year) returning:
  - Total spent
  - Spending by category
  - Recent expenses
  - Total income
  - Committed money
  - Available money
- [ ] Optimize with parallel Prisma queries
- [ ] Add TypeScript interfaces
- [ ] Unit tests for aggregations

### 2.4.2: Dashboard Controller + Route + Validation [PR]

- [ ] Create controllers/dashboard.controller.ts
- [ ] Create schemas/dashboard.schema.ts (month/year query params)
- [ ] Create routes/dashboard.routes.ts
- [ ] Define GET /api/dashboard
- [ ] Apply auth middleware
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 2.4.3: Manual E2E Testing

- [ ] Add sample data (expenses, income, cards)
- [ ] Call GET /api/dashboard
- [ ] Verify totals accurate
- [ ] Verify category breakdown
- [ ] Test different month/year params

**Checkpoint**: Dashboard returns comprehensive data, calculations accurate, performance acceptable

---

## Sub-Phase 2.5: Shared Expenses & Settlement

### 2.5.1: Settlement Tracking (service layer) [PR]

- [ ] In expenseService, set settlementStatus for shared expenses
- [ ] Implement markExpenseAsPaid method
- [ ] Implement getSettlementSummary (group by person, calculate totals owed)
- [ ] Unit tests for settlement methods

### 2.5.2: Settlement Endpoints [PR]

- [ ] Add markAsPaid handler to expense controller
- [ ] Add settlement schemas
- [ ] Create GET /api/expenses/settlements
- [ ] Add PATCH /api/expenses/:id/settle
- [ ] Apply auth middleware
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 2.5.3: Manual E2E Testing

- [ ] Create shared expense
- [ ] View settlements summary
- [ ] Mark expense as paid
- [ ] Verify settlementStatus transitions

**Checkpoint**: Shared expenses tracked, settlement status works, can mark as paid

---

## Phase 2 Completion Checklist

### Functionality

- [x] Expense CRUD operational
- [ ] Categories manageable
- [ ] Cards tracked
- [ ] Shared expenses working
- [ ] Settlement tracking functional
- [ ] Dashboard accurate

### Code Quality

- [ ] Services follow single responsibility
- [ ] Controllers thin
- [ ] No duplicate code
- [ ] TypeScript types complete
- [ ] Validation on all inputs

### Performance

- [ ] Dashboard loads <500ms
- [ ] Queries use indexes
- [ ] No N+1 queries
- [ ] Parallel queries where possible

### Security

- [ ] Users access only their data
- [ ] No SQL injection
- [ ] Proper decimal types for money
- [ ] Input validation prevents bad data

# Phase 3: Financial Intelligence

**Status**: 🔒 Locked
**Goal**: Budgets, income, recurring expenses, debt, goals
**Duration**: 3-4 weeks

## What you'll learn

- Month rollover logic
- Automated task creation
- Budget calculations
- Recurring patterns
- Debt tracking
- Progress tracking

---

## Sub-Phase 3.1: Budget System

### 3.1.1: Budget Service [PR]

- [ ] Create services/budget.service.ts
- [ ] Implement setBudget (category, month, year, amount)
- [ ] Implement getBudgets (calculate spent, remaining, percentage, status)
- [ ] Implement getBudgetStatus (specific category)
- [ ] Implement deleteBudget
- [ ] Add TypeScript interfaces
- [ ] Unit tests

### 3.1.2: Budget Alert Logic + Dashboard Integration [PR]

- [ ] Create calculateBudgetStatus utility
- [ ] Add budget alerts to dashboard (over budget, approaching budget)
- [ ] Unit tests for alert logic

### 3.1.3: Budget Controller + Routes + Validation [PR]

- [ ] Create controllers/budget.controller.ts
- [ ] Create schemas/budget.schema.ts (Zod)
- [ ] Create routes/budget.routes.ts (GET, POST, PATCH, DELETE /api/budgets)
- [ ] Define GET /api/budgets/alerts
- [ ] Apply auth middleware
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 3.1.4: Test Budget System

- [ ] Set budget for category
- [ ] Add expenses
- [ ] Verify percentage calculated
- [ ] Exceed budget
- [ ] Check alerts
- [ ] Update/delete budget

**Checkpoint**: Budgets working, calculations accurate, alerts functional

---

## Sub-Phase 3.2: Income Management

### 3.2.1: Income Service [PR]

- [ ] Create services/income.service.ts
- [ ] Implement createIncome (fixed/variable)
- [ ] Implement getIncome (with totals calculation)
- [ ] Implement updateIncome
- [ ] Implement deleteIncome
- [ ] Implement getIncomeSummary
- [ ] Add TypeScript interfaces
- [ ] Unit tests

### 3.2.2: Add Income to Dashboard [PR]

- [ ] Update dashboardService
- [ ] Include income summary (fixed, variable, total)
- [ ] Calculate available after committed money
- [ ] Unit tests for dashboard integration

### 3.2.3: Income Controller + Routes + Validation [PR]

- [ ] Create controllers/income.controller.ts
- [ ] Create schemas/income.schema.ts (Zod)
- [ ] Create routes/income.routes.ts (GET, POST, PATCH, DELETE /api/income)
- [ ] Apply auth middleware
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 3.2.4: Test Income Management

- [ ] Add fixed income
- [ ] Add variable income
- [ ] Verify totals
- [ ] Check dashboard
- [ ] Update/delete income

**Checkpoint**: Income tracking works, totals calculated, dashboard updated

---

## Sub-Phase 3.3: Recurring Expenses Automation

### 3.3.1: Recurring Expense Service [PR]

- [ ] Create services/recurring.service.ts
- [ ] Implement getRecurringExpenses
- [ ] Implement generateMonthlyRecurringExpenses (check duplicates, create instances)
- [ ] Implement deleteRecurringTemplate
- [ ] Add TypeScript interfaces
- [ ] Unit tests

### 3.3.2: Month Rollover Endpoint [PR]

- [ ] Add POST /api/expenses/rollover (controller + route + validation)
- [ ] Call generateMonthlyRecurringExpenses
- [ ] Return summary
- [ ] Manual Postman testing (idempotency check)
- [ ] Controller unit tests

### 3.3.3: Cron Job for Auto-Rollover [PR]

- [ ] Install node-cron
- [ ] Create jobs/monthlyRollover.job.ts
- [ ] Schedule job for 1st of month (`0 0 1 * *`)
- [ ] For each user, call generateMonthlyRecurringExpenses
- [ ] Log results
- [ ] Register job in server startup
- [ ] Unit tests for job logic

### 3.3.4: Test Recurring System

- [ ] Create recurring expenses (rent, subscriptions)
- [ ] Manual rollover
- [ ] Verify expenses created
- [ ] Test auto-rollover job (change date or test locally)

**Checkpoint**: Recurring expenses auto-generate, no duplicates, cron job works

---

## Sub-Phase 3.4: Debt Tracking

### 3.4.1: Debt Service [PR]

- [ ] Create services/debt.service.ts
- [ ] Implement createDebt
- [ ] Implement getDebts (with payment history, remaining balance)
- [ ] Implement updateDebt
- [ ] Implement recordPayment (update remaining amount)
- [ ] Implement deleteDebt
- [ ] Add TypeScript interfaces
- [ ] Unit tests

### 3.4.2: Add Debt to Dashboard [PR]

- [ ] Update dashboardService
- [ ] Include debt summary (total debt, monthly payments)
- [ ] Calculate committed money including debt payments
- [ ] Unit tests

### 3.4.3: Debt Controller + Routes + Validation [PR]

- [ ] Create controllers/debt.controller.ts
- [ ] Create schemas/debt.schema.ts (Zod)
- [ ] Create routes/debt.routes.ts (GET, POST, PATCH, DELETE /api/debts)
- [ ] Define POST /api/debts/:id/payment
- [ ] Apply auth middleware
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 3.4.4: Test Debt Management

- [ ] Create debt (car loan)
- [ ] Record payment
- [ ] Verify remaining balance updated
- [ ] Check dashboard shows debt
- [ ] Update debt
- [ ] Delete debt

**Checkpoint**: Debt tracking works, payments recorded, dashboard updated

---

## Sub-Phase 3.5: Savings Goals

### 3.5.1: Goal Service [PR]

- [ ] Create services/goal.service.ts
- [ ] Implement createGoal (name, target, deadline)
- [ ] Implement getGoals (with progress percentage)
- [ ] Implement updateGoal
- [ ] Implement addToGoal (increase current amount)
- [ ] Implement deleteGoal
- [ ] Add TypeScript interfaces
- [ ] Unit tests

### 3.5.2: Add Goals to Dashboard [PR]

- [ ] Update dashboardService
- [ ] Include goals summary (progress bars)
- [ ] Unit tests

### 3.5.3: Goal Controller + Routes + Validation [PR]

- [ ] Create controllers/goal.controller.ts
- [ ] Create schemas/goal.schema.ts (Zod)
- [ ] Create routes/goal.routes.ts (GET, POST, PATCH, DELETE /api/goals)
- [ ] Define POST /api/goals/:id/contribute
- [ ] Apply auth middleware
- [ ] Manual Postman testing
- [ ] Controller unit tests

### 3.5.4: Test Goals System

- [ ] Create goal (emergency fund)
- [ ] Add contribution
- [ ] Verify progress calculated
- [ ] Check dashboard
- [ ] Update/delete goal

**Checkpoint**: Goals tracked, progress calculated, dashboard shows goals

---

## Phase 3 Completion Checklist

### Functionality

- [ ] Budgets set and tracked
- [ ] Income tracked (fixed + variable)
- [ ] Recurring expenses auto-generate
- [ ] Debts tracked with payments
- [ ] Goals tracked with progress
- [ ] Dashboard comprehensive

### Code Quality

- [ ] Services well-organized
- [ ] Cron jobs registered properly
- [ ] No duplicate expenses from rollover
- [ ] TypeScript types complete

### Performance

- [ ] Cron jobs efficient
- [ ] Dashboard still fast
- [ ] Aggregations optimized

### Security

- [ ] Only user's financial data accessible
- [ ] Rollover doesn't affect other users

# MoneyFlow Roadmap

This is the single "where are we?" index for the project. Each phase has its
own file with checklists and PR slices.

## Currently active

**Phase 2 — Core Expense Tracking** ([phase-2-core-expense.md](./phase-2-core-expense.md))

- ✅ Sub-Phase 2.1 — Expense CRUD (controller, routes, validation, unit tests)
- 🟡 **Sub-Phase 2.2 — Category Management**
  - ✅ 2.2.0 Schema + Seed Refactor
  - ← *next slice up: 2.2.1 Category Service*
- ⚪ Sub-Phase 2.3 — Card Management
- ⚪ Sub-Phase 2.4 — Dashboard Aggregations
- ⚪ Sub-Phase 2.5 — Shared Expenses & Settlement

## All phases

| Phase | Focus | Status | File |
|---|---|---|---|
| 1 | Foundation & Setup | 🟢 Complete | [phase-1-foundation.md](./phase-1-foundation.md) |
| 2 | Core Expense Tracking | 🟡 In Progress | [phase-2-core-expense.md](./phase-2-core-expense.md) |
| 3 | Financial Intelligence | 🔒 Locked | [phase-3-financial-intelligence.md](./phase-3-financial-intelligence.md) |
| 4 | AI & Insights | 🔒 Locked | [phase-4-ai-insights.md](./phase-4-ai-insights.md) |
| 5 | Automation & Reports | 🔒 Locked | [phase-5-automation-reports.md](./phase-5-automation-reports.md) |
| 6 | Frontend Development | 🔒 Locked | [phase-6-frontend.md](./phase-6-frontend.md) |
| 7 | Testing & Quality | 🟡 Partial (tests landing alongside features) | [phase-7-testing-quality.md](./phase-7-testing-quality.md) |
| 8 | Production Deployment | 🔒 Locked | [phase-8-deployment.md](./phase-8-deployment.md) |
| 9 | Advanced Features | 🔒 Locked | [phase-9-advanced.md](./phase-9-advanced.md) |
| V2 | Future Enhancements | 📋 Backlog | [future-enhancements.md](./future-enhancements.md) |

**Status legend**: 🟢 Complete · 🟡 In Progress · 🔒 Locked (not started) · 📋 Backlog

## Timeline

Based on 5-7 hours/week:

| Phase | Weeks | Cumulative |
|---|---|---|
| 1 | 3-4 | Week 4 |
| 2 | 4-5 | Week 9 |
| 3 | 3-4 | Week 13 |
| 4 | 2-3 | Week 16 |
| 5 | 2-3 | Week 19 |
| 6 | 5-6 | Week 25 |
| 7 | 2-3 | Week 28 |
| 8 | 2-3 | Week 31 |
| 9 | 2-3 | Week 34 |

Total: ~8-9 months end-to-end.

## How to use this roadmap

- Open the phase file for the current sub-phase before starting work.
- Check off tasks as you complete them.
- When a sub-phase is shipped, mark its status and update the "Currently active"
  block above so the AI assistant knows the right context.
- See [../conventions/pr-strategy.md](../conventions/pr-strategy.md) for how
  work is sliced into PRs.
- For design decisions that shape these phases, see [../decisions/](../decisions/).

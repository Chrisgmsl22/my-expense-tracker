# MyExpense Tracker 💰

A comprehensive full-stack expense tracking application to manage personal finances, track expenses across multiple payment methods, monitor budgets, manage debt, set savings goals, and receive AI-powered financial insights.

## Tech Stack

### Backend

-   Node.js + Express.js + TypeScript
-   PostgreSQL 16 + Prisma ORM
-   JWT Authentication

### Frontend

-   React 18 + TypeScript (coming soon)

## Database

### Schema Diagram

View the complete database schema on dbdiagram.io:

🔗 **[Database Diagram](https://dbdiagram.io/d/Expense-tracker-69600dbad6e030a02481ce75)**

### Entities

| Entity      | Description                                           |
| ----------- | ----------------------------------------------------- |
| User        | User accounts with profile and preferences            |
| Category    | System and custom expense categories                  |
| Subcategory | Nested categories under main categories               |
| Card        | Payment methods (credit/debit cards)                  |
| Expense     | Core transaction tracking with shared expense support |
| Income      | Fixed and variable income tracking                    |
| Budget      | Monthly budgets per category                          |
| Debt        | Loan and debt tracking with payoff progress           |
| Goal        | Savings goals with progress tracking                  |

## Getting Started

```bash
# Install dependencies
make install

# Start database (Docker)
make services-up

# Run development server
make dev
```

## Documentation

-   [Roadmap](./docs/roadmap/README.md) — Phase-by-phase development plan and current status
-   [Architecture Decision Records](./docs/decisions/) — Why key design choices were made
-   [PR strategy](./docs/conventions/pr-strategy.md) — How work is sliced into shippable PRs
-   [Slice planning](./docs/conventions/slice-planning.md) — How to plan a slice before coding it
-   [Coding conventions](./docs/conventions/coding-conventions.md) — Backend code style, architecture, testing patterns
-   [Planned API surface](./docs/reference/api-endpoints.md) — Endpoint plan across phases
-   [Requirements](./REQUIREMENTS.md) — Detailed feature specifications
-   [Claude assistant guide](./claude.md) — Working style, learning philosophy, AI rules

# MoneyFlow - Full Stack Expense Tracker

## Complete Development Action Plan

---

## 📋 Project Overview

**MoneyFlow** is a comprehensive full-stack expense tracking application designed to help users manage their personal finances, track expenses across multiple payment methods, monitor budgets, manage debt, set savings goals, and receive AI-powered financial insights.

### **Problem Statement**

Traditional expense tracking methods (Excel spreadsheets) are time-consuming, lack automation, and don't provide intelligent insights.

### **Solution**

A modern web application combining manual expense tracking with AI-powered automation and intelligent financial analysis.

### **Key Features**

-   💰 Expense tracking with categories and subcategories
-   💳 Multi-card payment method tracking with credit utilization
-   🤝 Shared expense management with custom splits
-   📊 Real-time budget tracking with visual indicators
-   💵 Income management (fixed + variable)
-   🔄 Recurring expense automation
-   💸 Debt tracking and payoff progress
-   🎯 Savings goals with progress tracking
-   🤖 AI-powered expense analysis
-   📧 Weekly automated email summaries
-   📱 Mobile-responsive design
-   🌍 Bilingual support (English/Spanish)
-   📤 Export capabilities (CSV/PDF)

---

## 🎓 Learning Methodology

This project follows a **creation-first learning approach**. The goal is to build real engineering skills through struggle, not copy-paste from AI.

### Rules of Engagement with AI

**AI WILL:**
- ✅ Explain concepts and ideas briefly
- ✅ Give suggestions and hints (not solutions)
- ✅ Review code YOU wrote first
- ✅ Help understand error messages
- ✅ Discuss architectural trade-offs
- ✅ Run terminal commands (with approval)

**AI WILL NOT:**
- ❌ Show complete code implementations
- ❌ Solve problems before you attempt
- ❌ Write code for you (unless explicitly requested)

### The Process

1. **Attempt first** - Spend 15+ minutes trying yourself
2. **Let it break** - Read errors, debug yourself
3. **Ask for hints** - Not solutions
4. **Review after** - AI reviews YOUR working code

### The Test

Before asking AI for help, ask yourself:
- Have I tried implementing this myself?
- Can I explain WHY this code works?
- Am I building muscle memory or just copying?

---

## 🛠️ Tech Stack

### **Backend**

-   Node.js + Express.js + TypeScript
-   PostgreSQL 16 + Prisma ORM
-   Redis (caching)
-   JWT + bcrypt (authentication)
-   OpenAI API (AI features)
-   SendGrid/Resend (emails)
-   node-cron (scheduling)
-   Jest + Supertest (testing)

### **Frontend**

-   React 18 + TypeScript
-   Tailwind CSS + shadcn/ui
-   TanStack Query (React Query)
-   React Hook Form + Zod
-   Recharts (visualizations)
-   Axios
-   react-i18next (internationalization)

### **DevOps**

-   Docker + Docker Compose
-   GitHub Actions (CI/CD)
-   ESLint + Prettier
-   AWS (EC2, RDS, ElastiCache, S3)

---

## 🎓 Learning Philosophy & AI Guidelines

### **Core Principles**

1. **You write the code** - AI guides, you implement
2. **Understand before implementing**
3. **Test as you build**
4. **Iterate and improve**
5. **Learn from mistakes**

### **AI Assistant Rules** ⚠️ CRITICAL

#### **What AI Should DO:**

-   ✅ Explain concepts and guidance
-   ✅ Show code examples in sidebar (NOT in files)
-   ✅ Help debug with questions
-   ✅ Review code on commit
-   ✅ Flag security vulnerabilities immediately
-   ✅ Suggest improvements with reasoning

#### **What AI Should NOT DO:**

-   ❌ Write code in your files (unless explicitly allowed)
-   ❌ Make decisions for you
-   ❌ Solve problems without your involvement
-   ❌ Implement features end-to-end

#### **Exceptions - AI CAN Code When:**

1. Generating unit tests (after approval)
2. Debugging critical bugs (after you've tried)
3. Writing boilerplate (after you understand)
4. You explicitly request it

#### **Code Review Standards:**

Check for:

-   Industry best practices
-   Security vulnerabilities
-   Performance issues
-   Code duplication
-   TypeScript safety
-   Error handling
-   Test coverage

---

## 📅 Timeline Overview

**Based on 5-7 hours/week**

| Phase   | Focus                  | Weeks | Cumulative |
| ------- | ---------------------- | ----- | ---------- |
| Phase 1 | Foundation & Setup     | 3-4   | Week 4     |
| Phase 2 | Core Expense Tracking  | 4-5   | Week 9     |
| Phase 3 | Financial Intelligence | 3-4   | Week 13    |
| Phase 4 | AI & Insights          | 2-3   | Week 16    |
| Phase 5 | Automation & Reports   | 2-3   | Week 19    |
| Phase 6 | Frontend Development   | 5-6   | Week 25    |
| Phase 7 | Testing & Quality      | 2-3   | Week 28    |
| Phase 8 | Production Deployment  | 2-3   | Week 31    |
| Phase 9 | Advanced Features      | 2-3   | Week 34    |

**Total: ~8-9 months**

### **Key Milestones**

-   ✅ Week 4: Backend foundation (auth working)
-   ✅ Week 9: Core features complete (testable with Postman)
-   ✅ Week 16: AI features working
-   ✅ Week 25: Full app usable (replace Excel)
-   ✅ Week 31: Production deployed
-   ✅ Week 34: Polished with OAuth & i18n

---

# Phase Breakdown

---

## Phase 1: Foundation & Setup

**Goal**: Project infrastructure, database, authentication  
**Duration**: 3-4 weeks  
**Status**: 🟡 In Progress

### **What You'll Learn**

-   Express.js application structure
-   TypeScript configuration
-   PostgreSQL database design
-   Prisma ORM and migrations
-   JWT authentication
-   Password hashing
-   Middleware patterns
-   Docker basics

---

### Sub-Phase 1.1: Project Initialization

#### 1.1.1: Initialize Node.js Project ✅

-   [x] Create project directory
-   [x] Initialize npm
-   [x] Install TypeScript
-   [x] Create tsconfig.json
-   [x] Set up folder structure (src/controllers, models, routes, middleware, services, utils, config)

#### 1.1.2: Configure Development Tools ✅

-   [x] Install and configure ESLint
-   [x] Install and configure Prettier
-   [x] Set up Husky pre-commit hooks
-   [x] Create .gitignore
-   [x] Initialize git repository

#### 1.1.3: Set Up Express Server ✅

-   [x] Install Express and types
-   [x] Create basic server file
-   [x] Install and configure middleware (cors, helmet, morgan)
-   [x] Create health check endpoint
-   [x] Install tsx for development
-   [x] Add dev script to package.json
-   [x] Test server startup

#### 1.1.4: Environment Configuration ✅

-   [x] Install dotenv
-   [x] Create .env file
-   [x] Add environment variables (PORT, NODE_ENV, DATABASE_URL, JWT_SECRET)
-   [x] Create .env.example
-   [x] Load environment variables in server
-   [x] Create config/env.ts for validation
-   [x] Test environment loading

**Checkpoint**: Server starts, health endpoint works, ESLint/Prettier functional, environment variables load

---

### Sub-Phase 1.2: Database Design & Prisma Setup

#### 1.2.1: Install PostgreSQL & Prisma ✅

-   [x] Install Prisma CLI and Client
-   [x] Initialize Prisma (creates schema.prisma)
-   [x] Set up PostgreSQL (local or Docker)
-   [x] Update DATABASE_URL in .env
-   [x] Test database connection

#### 1.2.2: Design Core Database Schema ✅

-   [x] Plan entity relationships (Users, Expenses, Categories, Cards, Income, Budgets, Debts, Goals)
-   [x] Identify required fields for each entity
-   [x] Determine field types
-   [x] Plan indexes for performance

#### 1.2.3: Create Prisma Models ✅

-   [x] Define User model
-   [x] Define Category model (with system vs custom)
-   [x] Define Subcategory model
-   [x] Define Card model
-   [x] Define Expense model (with shared expense fields)
-   [x] Define Income model
-   [x] Define Budget model
-   [x] Define Debt model
-   [x] Define Goal model

#### 1.2.4: Run Database Migrations ✅

-   [x] Generate Prisma Client
-   [x] Create initial migration
-   [x] Verify tables created (Prisma Studio)
-   [x] Create database config singleton
-   [x] Export Prisma instance

#### 1.2.5: Seed System Categories ✅

-   [x] Create prisma/seed.ts
-   [x] Define system categories array (Housing, Groceries, Transport, etc.)
-   [x] Write seed script
-   [x] Add seed script to package.json
-   [x] Run seed
-   [x] Verify in Prisma Studio

**Checkpoint**: Database connected, all tables created, Prisma Client generates, system categories seeded ✅

---

### Sub-Phase 1.3: Authentication System ✅

#### 1.3.1: Install Authentication Dependencies ✅

-   [x] Install jsonwebtoken and types
-   [x] Install bcrypt and types
-   [ ] Install Zod for validation (moved to 1.4)
-   [x] Verify JWT_SECRET in .env

#### 1.3.2: Create User Service ✅

-   [x] Create services/auth.service.ts (combined with auth service)
-   [x] Implement createUser method (validate, hash password, create in DB)
-   [x] Implement findUserByEmail method
-   [x] Implement findUserById method
-   [x] Implement validatePassword method
-   [x] Create TypeScript interfaces

#### 1.3.3: Create Auth Service ✅

-   [x] Create services/auth.service.ts
-   [x] Implement generateToken method
-   [x] Implement verifyToken method
-   [x] Implement login method
-   [x] Implement password hashing and validation
-   [x] Add unit tests (20 tests)

#### 1.3.4: Create Auth Controller ✅

-   [x] Create controllers/user.controller.ts
-   [x] Implement register handler (extract data, validate, call service, return response)
-   [x] Implement login handler
-   [x] Handle errors appropriately
-   [x] Add unit tests (9 tests)

#### 1.3.5: Create Auth Routes ✅

-   [x] Create routes/user.routes.ts
-   [x] Define POST /api/auth/register
-   [x] Define POST /api/auth/login
-   [x] Mount routes in main server file

#### 1.3.6: Create Auth Middleware ✅

-   [x] Create middleware/authenticate.ts
-   [x] Implement authenticate middleware (extract token, verify, find user, attach to req.user)
-   [x] Export middleware
-   [x] Add unit tests (7 tests)

#### 1.3.7: Create Protected Route Example (Skipped)

-   [x] Skipped - auth middleware is tested and ready; will be applied to expense routes in Phase 2

#### 1.3.8: Test Authentication Flow ✅

-   [x] Test registration endpoint (Postman + unit tests)
-   [x] Test duplicate registration (should fail)
-   [x] Test login with correct credentials
-   [x] Test login with wrong password
-   [x] Test protected route with valid token
-   [x] Test protected route without token
-   [x] Test protected route with invalid token
-   [x] Error handler middleware with tests

**Checkpoint**: Users can register, passwords hashed, login returns JWT, protected routes work, invalid tokens rejected ✅

---

### Sub-Phase 1.4: Error Handling & Logging

#### 1.4.1: Create Error Handler Middleware ✅

-   [x] Create middleware/errorHandler.ts
-   [x] Define custom error classes (AppError, ValidationError, AuthenticationError, NotFoundError, ConflictError, AccountDeactivationError)
-   [x] Implement error handler middleware (log error, return appropriate status and JSON)
-   [x] Add as last middleware in server
-   [x] Add unit tests

#### 1.4.2: Set Up Logging ✅

-   [x] Install winston
-   [x] Create utils/logger.ts
-   [x] Configure winston (console + file transports, log levels)
-   [x] Configure dev format (colorized, readable) vs prod format (JSON)
-   [x] Replace console.log/error with logger
-   [x] Create middleware/requestLogger.ts for HTTP request logging
-   [x] Mount requestLogger before routes in index.ts

#### 1.4.3: Add Request Validation ✅

-   [x] Install Zod
-   [x] Create middleware/validateRequest.ts (higher-order function pattern)
-   [x] Implement generic validation middleware using Zod
-   [x] Create validation schemas for auth routes (registerUserSchema, loginUserSchema)
-   [x] Apply validation to routes
-   [x] Test with invalid data (manual + unit tests)
-   [x] Add IFieldError type and update ValidationError class
-   [x] Update errorHandler to handle ValidationError with field errors
-   [x] Update IApiResponse to include errors field
-   [x] Unit tests for validateRequest middleware (4 tests)
-   [x] Unit test for errorHandler ValidationError with field errors branch

**Checkpoint**: Errors handled consistently, logging working, validation prevents bad data ✅

---

### Sub-Phase 1.5: Docker Development Setup

#### 1.5.1: Create Docker Compose File

-   [ ] Create docker-compose.yml (PostgreSQL + Redis services)
-   [ ] Create .env.docker
-   [ ] Update DATABASE_URL for Docker

#### 1.5.2: Create Makefile for Docker Commands

-   [ ] Create Makefile (up, down, restart, logs, db-push, db-migrate, db-studio commands)
-   [ ] Test commands
-   [ ] Document in README.md

#### 1.5.3: Test Full Setup

-   [ ] Start containers
-   [ ] Run Prisma migrations
-   [ ] Seed database
-   [ ] Start dev server
-   [ ] Test all auth endpoints
-   [ ] Stop containers
-   [ ] Verify data persistence

**Checkpoint**: Docker containers work, database accessible, app runs with Docker DB, data persists

---

## Phase 1 Completion Checklist

### Functionality ✅

-   [ ] Server starts without errors
-   [ ] Health check works
-   [ ] User registration works
-   [ ] Login returns JWT
-   [ ] Protected routes require auth
-   [ ] Database queries work
-   [ ] System categories seeded
-   [ ] Docker operational

### Code Quality ✅

-   [ ] ESLint passes
-   [ ] Prettier formats code
-   [ ] No hardcoded secrets
-   [ ] Environment variables configured
-   [ ] TypeScript compiles
-   [ ] All imports resolve

### Security ✅

-   [ ] Passwords hashed
-   [ ] JWT secrets not committed
-   [ ] Error messages safe
-   [ ] CORS configured
-   [ ] Helmet active
-   [ ] Input validation on endpoints

### Documentation ✅

-   [ ] README.md with setup
-   [ ] .env.example created
-   [ ] Code comments for complex logic
-   [ ] API endpoints documented

**Phase 1 Status**: 🟡 In Progress (1.4.3 Zod validation ✅, next: 1.5 Docker)

---

## Phase 2: Core Expense Tracking

**Goal**: Full expense CRUD, categories, cards, shared expenses  
**Duration**: 4-5 weeks  
**Status**: 🔒 Locked

### **What You'll Learn**

-   Complex database relationships
-   CRUD operations with Prisma
-   Filtering and sorting
-   Date handling
-   Decimal precision for money
-   Calculated fields
-   Service layer patterns

---

### Sub-Phase 2.1: Expense CRUD Operations

#### 2.1.1: Create Expense Service

-   [ ] Create services/expense.service.ts
-   [ ] Implement createExpense (validate, calculate actualExpenditure, create in DB)
-   [ ] Implement getExpenses (with filters: dateFrom, dateTo, categoryId, cardId)
-   [ ] Implement getExpenseById (verify ownership)
-   [ ] Implement updateExpense (recalculate actualExpenditure if needed)
-   [ ] Implement deleteExpense (verify ownership)
-   [ ] Add TypeScript interfaces

#### 2.1.2: Create Expense Controller

-   [ ] Create controllers/expense.controller.ts
-   [ ] Implement createExpense handler
-   [ ] Implement getAllExpenses handler
-   [ ] Implement getExpenseById handler
-   [ ] Implement updateExpense handler
-   [ ] Implement deleteExpense handler

#### 2.1.3: Create Expense Routes

-   [ ] Create routes/expense.routes.ts
-   [ ] Define POST /api/expenses
-   [ ] Define GET /api/expenses
-   [ ] Define GET /api/expenses/:id
-   [ ] Define PUT /api/expenses/:id
-   [ ] Define DELETE /api/expenses/:id
-   [ ] Apply auth middleware
-   [ ] Mount routes

#### 2.1.4: Create Validation Schemas

-   [ ] Create schemas/expense.schema.ts
-   [ ] Define createExpenseSchema (Zod)
-   [ ] Define updateExpenseSchema
-   [ ] Define queryFiltersSchema

#### 2.1.5: Test Expense CRUD

-   [ ] Create expense via POST
-   [ ] Verify actualExpenditure calculated
-   [ ] Get all expenses
-   [ ] Get single expense
-   [ ] Update expense
-   [ ] Delete expense
-   [ ] Test with invalid category
-   [ ] Test with another user's expense
-   [ ] Test shared expense with percentage

**Checkpoint**: Can CRUD expenses, actualExpenditure calculated, filtering works, only user's expenses accessible

---

### Sub-Phase 2.2: Category Management

#### 2.2.1: Create Category Service

-   [ ] Create services/category.service.ts
-   [ ] Implement getCategories (system + user's custom)
-   [ ] Implement createCategory (custom)
-   [ ] Implement updateCategory
-   [ ] Implement deleteCategory (check if in use)
-   [ ] Implement subcategory CRUD methods

#### 2.2.2: Create Category Controller & Routes

-   [ ] Create controllers/category.controller.ts
-   [ ] Implement all handlers
-   [ ] Create routes/category.routes.ts
-   [ ] Define GET /api/categories
-   [ ] Define POST /api/categories
-   [ ] Define PUT /api/categories/:id
-   [ ] Define DELETE /api/categories/:id
-   [ ] Define subcategory routes
-   [ ] Mount routes

#### 2.2.3: Test Category Management

-   [ ] Get all categories
-   [ ] Create custom category
-   [ ] Add subcategory
-   [ ] Update category
-   [ ] Try delete category with expenses
-   [ ] Delete empty category
-   [ ] Verify system categories protected

**Checkpoint**: Can manage categories, subcategories work, system categories protected

---

### Sub-Phase 2.3: Card Management

#### 2.3.1: Create Card Service

-   [ ] Create services/card.service.ts
-   [ ] Implement createCard
-   [ ] Implement getCards (with current spending calculation)
-   [ ] Implement updateCard
-   [ ] Implement deleteCard (check if in use)

#### 2.3.2: Add Utilization Calculation

-   [ ] Calculate current month spending per card (Prisma aggregate)
-   [ ] Calculate utilization percentage for credit cards
-   [ ] Add color-coded status (green/yellow/red)
-   [ ] Return with card data

#### 2.3.3: Create Card Controller & Routes

-   [ ] Create controllers/card.controller.ts
-   [ ] Implement CRUD handlers
-   [ ] Create routes/card.routes.ts
-   [ ] Define routes (GET, POST, PUT, DELETE /api/cards)
-   [ ] Mount routes

#### 2.3.4: Test Card Management

-   [ ] Create card with all properties
-   [ ] Add expenses to card
-   [ ] Get cards, verify utilization
-   [ ] Update card
-   [ ] Delete unused card
-   [ ] Try delete card with expenses

**Checkpoint**: Cards created, utilization calculated, CRUD works

---

### Sub-Phase 2.4: Dashboard Aggregations

#### 2.4.1: Create Dashboard Service

-   [ ] Create services/dashboard.service.ts
-   [ ] Implement getDashboardData (month, year):
    -   Total spent
    -   Spending by category
    -   Recent expenses
    -   Total income
    -   Committed money
    -   Available money
-   [ ] Optimize with parallel Prisma queries

#### 2.4.2: Create Dashboard Controller & Route

-   [ ] Create controllers/dashboard.controller.ts
-   [ ] Implement getDashboard handler
-   [ ] Create routes/dashboard.routes.ts
-   [ ] Define GET /api/dashboard
-   [ ] Mount routes

#### 2.4.3: Test Dashboard Endpoint

-   [ ] Add sample data (expenses, income, cards)
-   [ ] Call GET /api/dashboard
-   [ ] Verify totals accurate
-   [ ] Verify category breakdown
-   [ ] Test different month/year params

**Checkpoint**: Dashboard returns comprehensive data, calculations accurate, performance acceptable

---

### Sub-Phase 2.5: Shared Expenses & Settlement

#### 2.5.1: Add Settlement Tracking

-   [ ] In expenseService, set settlementStatus for shared expenses
-   [ ] Implement markExpenseAsPaid method
-   [ ] Implement getSettlementSummary (group by person, calculate totals owed)

#### 2.5.2: Add Settlement Endpoints

-   [ ] Add markAsPaid handler to expense controller
-   [ ] Create GET /api/expenses/settlements
-   [ ] Add PATCH /api/expenses/:id/settle
-   [ ] Test flow (create shared, view settlements, mark paid)

**Checkpoint**: Shared expenses tracked, settlement status works, can mark as paid

---

## Phase 2 Completion Checklist

### Functionality ✅

-   [ ] Expense CRUD operational
-   [ ] Categories manageable
-   [ ] Cards tracked
-   [ ] Shared expenses working
-   [ ] Settlement tracking functional
-   [ ] Dashboard accurate

### Code Quality ✅

-   [ ] Services follow single responsibility
-   [ ] Controllers thin
-   [ ] No duplicate code
-   [ ] TypeScript types complete
-   [ ] Validation on all inputs

### Performance ✅

-   [ ] Dashboard loads <500ms
-   [ ] Queries use indexes
-   [ ] No N+1 queries
-   [ ] Parallel queries where possible

### Security ✅

-   [ ] Users access only their data
-   [ ] No SQL injection
-   [ ] Proper decimal types for money
-   [ ] Input validation prevents bad data

**Phase 2 Status**: 🔒 Locked → 🟡 In Progress → 🟢 Completed

---

## Phase 3: Financial Intelligence

**Goal**: Budgets, income, recurring expenses, debt, goals  
**Duration**: 3-4 weeks  
**Status**: 🔒 Locked

### **What You'll Learn**

-   Month rollover logic
-   Automated task creation
-   Budget calculations
-   Recurring patterns
-   Debt tracking
-   Progress tracking

---

### Sub-Phase 3.1: Budget System

#### 3.1.1: Create Budget Service

-   [ ] Create services/budget.service.ts
-   [ ] Implement setBudget (category, month, year, amount)
-   [ ] Implement getBudgets (calculate spent, remaining, percentage, status)
-   [ ] Implement getBudgetStatus (specific category)
-   [ ] Implement deleteBudget

#### 3.1.2: Add Budget Alert Logic

-   [ ] Create calculateBudgetStatus utility
-   [ ] Add budget alerts to dashboard (over budget, approaching budget)

#### 3.1.3: Create Budget Controller & Routes

-   [ ] Create controllers/budget.controller.ts
-   [ ] Implement handlers
-   [ ] Create routes/budget.routes.ts
-   [ ] Define routes (GET, POST, PUT, DELETE /api/budgets)
-   [ ] Define GET /api/budgets/alerts
-   [ ] Mount routes

#### 3.1.4: Test Budget System

-   [ ] Set budget for category
-   [ ] Add expenses
-   [ ] Verify percentage calculated
-   [ ] Exceed budget
-   [ ] Check alerts
-   [ ] Update/delete budget

**Checkpoint**: Budgets working, calculations accurate, alerts functional

---

### Sub-Phase 3.2: Income Management

#### 3.2.1: Create Income Service

-   [ ] Create services/income.service.ts
-   [ ] Implement createIncome (fixed/variable)
-   [ ] Implement getIncome (with totals calculation)
-   [ ] Implement updateIncome
-   [ ] Implement deleteIncome
-   [ ] Implement getIncomeSummary

#### 3.2.2: Add Income to Dashboard

-   [ ] Update dashboardService
-   [ ] Include income summary (fixed, variable, total)
-   [ ] Calculate available after committed money

#### 3.2.3: Create Income Controller & Routes

-   [ ] Create controllers/income.controller.ts
-   [ ] Implement handlers
-   [ ] Create routes/income.routes.ts
-   [ ] Define routes (GET, POST, PUT, DELETE /api/income)
-   [ ] Mount routes

#### 3.2.4: Test Income Management

-   [ ] Add fixed income
-   [ ] Add variable income
-   [ ] Verify totals
-   [ ] Check dashboard
-   [ ] Update/delete income

**Checkpoint**: Income tracking works, totals calculated, dashboard updated

---

### Sub-Phase 3.3: Recurring Expenses Automation

#### 3.3.1: Create Recurring Expense Logic

-   [ ] Create services/recurring.service.ts
-   [ ] Implement getRecurringExpenses
-   [ ] Implement generateMonthlyRecurringExpenses (check duplicates, create instances)
-   [ ] Implement deleteRecurringTemplate

#### 3.3.2: Add Month Rollover Endpoint

-   [ ] Create POST /api/expenses/rollover
-   [ ] Call generateMonthlyRecurringExpenses
-   [ ] Return summary
-   [ ] Test (mark expenses as recurring, call rollover, verify created, call again for idempotency)

#### 3.3.3: Create Cron Job for Auto-Rollover

-   [ ] Install node-cron
-   [ ] Create jobs/monthlyRollover.job.ts
-   [ ] Schedule job for 1st of month (0 0 1 \* \*)
-   [ ] For each user, call generateMonthlyRecurringExpenses
-   [ ] Log results
-   [ ] Register job in server startup

#### 3.3.4: Test Recurring System

-   [ ] Create recurring expenses (rent, subscriptions)
-   [ ] Manual rollover
-   [ ] Verify expenses created
-   [ ] Test auto-rollover job (change date or test locally)

**Checkpoint**: Recurring expenses auto-generate, no duplicates, cron job works

---

### Sub-Phase 3.4: Debt Tracking

#### 3.4.1: Create Debt Service

-   [ ] Create services/debt.service.ts
-   [ ] Implement createDebt
-   [ ] Implement getDebts (with payment history, remaining balance)
-   [ ] Implement updateDebt
-   [ ] Implement recordPayment (update remaining amount)
-   [ ] Implement deleteDebt

#### 3.4.2: Add Debt to Dashboard

-   [ ] Update dashboardService
-   [ ] Include debt summary (total debt, monthly payments)
-   [ ] Calculate committed money including debt payments

#### 3.4.3: Create Debt Controller & Routes

-   [ ] Create controllers/debt.controller.ts
-   [ ] Implement handlers
-   [ ] Create routes/debt.routes.ts
-   [ ] Define routes (GET, POST, PUT, DELETE /api/debts)
-   [ ] Define POST /api/debts/:id/payment
-   [ ] Mount routes

#### 3.4.4: Test Debt Management

-   [ ] Create debt (car loan)
-   [ ] Record payment
-   [ ] Verify remaining balance updated
-   [ ] Check dashboard shows debt
-   [ ] Update debt
-   [ ] Delete debt

**Checkpoint**: Debt tracking works, payments recorded, dashboard updated

---

### Sub-Phase 3.5: Savings Goals

#### 3.5.1: Create Goal Service

-   [ ] Create services/goal.service.ts
-   [ ] Implement createGoal (name, target, deadline)
-   [ ] Implement getGoals (with progress percentage)
-   [ ] Implement updateGoal
-   [ ] Implement addToGoal (increase current amount)
-   [ ] Implement deleteGoal

#### 3.5.2: Add Goals to Dashboard

-   [ ] Update dashboardService
-   [ ] Include goals summary (progress bars)

#### 3.5.3: Create Goal Controller & Routes

-   [ ] Create controllers/goal.controller.ts
-   [ ] Implement handlers
-   [ ] Create routes/goal.routes.ts
-   [ ] Define routes (GET, POST, PUT, DELETE /api/goals)
-   [ ] Define POST /api/goals/:id/contribute
-   [ ] Mount routes

#### 3.5.4: Test Goals System

-   [ ] Create goal (emergency fund)
-   [ ] Add contribution
-   [ ] Verify progress calculated
-   [ ] Check dashboard
-   [ ] Update/delete goal

**Checkpoint**: Goals tracked, progress calculated, dashboard shows goals

---

## Phase 3 Completion Checklist

### Functionality ✅

-   [ ] Budgets set and tracked
-   [ ] Income tracked (fixed + variable)
-   [ ] Recurring expenses auto-generate
-   [ ] Debts tracked with payments
-   [ ] Goals tracked with progress
-   [ ] Dashboard comprehensive

### Code Quality ✅

-   [ ] Services well-organized
-   [ ] Cron jobs registered properly
-   [ ] No duplicate expenses from rollover
-   [ ] TypeScript types complete

### Performance ✅

-   [ ] Cron jobs efficient
-   [ ] Dashboard still fast
-   [ ] Aggregations optimized

### Security ✅

-   [ ] Only user's financial data accessible
-   [ ] Rollover doesn't affect other users

**Phase 3 Status**: 🔒 Locked → 🟡 In Progress → 🟢 Completed

---

## Phase 4: AI & Insights

**Goal**: OpenAI integration, expense analysis, recommendations  
**Duration**: 2-3 weeks  
**Status**: 🔒 Locked

### **What You'll Learn**

-   OpenAI API integration
-   Prompt engineering
-   Structured AI responses
-   Language detection
-   AI rate limiting
-   Cost management

---

### Sub-Phase 4.1: OpenAI Setup & Service

#### 4.1.1: Install OpenAI SDK

-   [ ] Install openai package
-   [ ] Add OPENAI_API_KEY to .env
-   [ ] Create .env.example entry

#### 4.1.2: Create AI Service

-   [ ] Create services/ai.service.ts
-   [ ] Implement OpenAI client initialization
-   [ ] Create helper method callOpenAI(prompt, systemPrompt)
-   [ ] Add error handling for API failures
-   [ ] Add retry logic (optional)

#### 4.1.3: Implement Expense Analysis

-   [ ] Implement analyzeExpenses(userId, month, year, language):
    -   Get all expenses for month
    -   Get income, budgets, debts
    -   Build comprehensive prompt with financial data
    -   Request structured JSON response
    -   Return analysis object

#### 4.1.4: Test AI Service

-   [ ] Add sample month of data
-   [ ] Call analyzeExpenses
-   [ ] Verify response format
-   [ ] Test with English
-   [ ] Test with Spanish
-   [ ] Handle API errors gracefully

**Checkpoint**: OpenAI integrated, analysis works, language-aware

---

### Sub-Phase 4.2: AI-Powered Features

#### 4.2.1: Implement Smart Categorization

-   [ ] In ai.service, implement suggestCategory(description, amount):
    -   Build prompt with expense details
    -   Request category suggestion with confidence
    -   Return { categoryId, confidence }
-   [ ] Add endpoint POST /api/ai/categorize
-   [ ] Test with various expense descriptions

#### 4.2.2: Implement Anomaly Detection

-   [ ] Implement detectAnomalies(userId, month, year):
    -   Get user's spending history
    -   Build prompt with patterns
    -   Request anomaly analysis
    -   Return array of anomalies
-   [ ] Add to dashboard or create endpoint GET /api/ai/anomalies

#### 4.2.3: Implement Personalized Tips

-   [ ] Implement generateTips(userId, month, year, language):
    -   Get financial overview
    -   Build prompt for actionable advice
    -   Request 3-5 tips
    -   Return tips array
-   [ ] Add to dashboard

#### 4.2.4: Test AI Features

-   [ ] Test category suggestions
-   [ ] Test anomaly detection
-   [ ] Test tip generation
-   [ ] Verify tips are actionable

**Checkpoint**: AI features working, suggestions relevant, tips actionable

---

### Sub-Phase 4.3: AI Access Control

#### 4.3.1: Add AI Enable Flag

-   [ ] User model already has aiEnabled field
-   [ ] Create middleware checkAIEnabled
-   [ ] Apply to all AI endpoints

#### 4.3.2: Create AI Settings Endpoint

-   [ ] Add PUT /api/users/settings/ai
-   [ ] Allow toggling aiEnabled
-   [ ] Test toggling on/off

#### 4.3.3: Track AI Usage

-   [ ] Create AIUsage model (userId, endpoint, timestamp, cost)
-   [ ] Log each AI call
-   [ ] Create GET /api/users/ai-usage endpoint
-   [ ] Display usage stats

#### 4.3.4: Implement Rate Limiting for AI

-   [ ] Install express-rate-limit
-   [ ] Create AI-specific rate limiter (e.g., 20 requests/hour)
-   [ ] Apply to AI endpoints
-   [ ] Test rate limit

**Checkpoint**: AI access controlled, usage tracked, rate limited

---

## Phase 4 Completion Checklist

### Functionality ✅

-   [ ] Expense analysis working
-   [ ] Category suggestions accurate
-   [ ] Anomaly detection functional
-   [ ] Tips personalized and relevant
-   [ ] AI toggle works
-   [ ] Usage tracked

### Code Quality ✅

-   [ ] Prompts well-structured
-   [ ] Error handling robust
-   [ ] Responses validated
-   [ ] Language handling clean

### Performance ✅

-   [ ] AI calls don't block UI
-   [ ] Responses cached where appropriate
-   [ ] Rate limiting prevents abuse

### Security ✅

-   [ ] API key not exposed
-   [ ] AI only for enabled users
-   [ ] Usage limits enforced

**Phase 4 Status**: 🔒 Locked → 🟡 In Progress → 🟢 Completed

---

## Phase 5: Automation & Reports

**Goal**: Weekly emails, PDF/CSV exports, scheduled jobs  
**Duration**: 2-3 weeks  
**Status**: 🔒 Locked

### **What You'll Learn**

-   Email service integration
-   HTML email templates
-   PDF generation
-   CSV export
-   Cron job scheduling
-   Chart-to-image conversion
-   Template engines

---

### Sub-Phase 5.1: Email Service Setup

#### 5.1.1: Install Email Service

-   [ ] Choose email provider (SendGrid or Resend)
-   [ ] Install SDK (e.g., @sendgrid/mail)
-   [ ] Add API key to .env
-   [ ] Create services/email.service.ts

#### 5.1.2: Create Email Service

-   [ ] Implement sendEmail(to, subject, html) method
-   [ ] Add error handling
-   [ ] Add email validation
-   [ ] Test with simple email

#### 5.1.3: Create Email Templates

-   [ ] Create templates/email/ directory
-   [ ] Create weeklyReport.html template
-   [ ] Add CSS for email styling (inline styles)
-   [ ] Create template utility to populate data

#### 5.1.4: Test Email Sending

-   [ ] Send test email
-   [ ] Verify formatting
-   [ ] Test with Gmail/Outlook
-   [ ] Check spam score

**Checkpoint**: Emails send successfully, templates render correctly

---

### Sub-Phase 5.2: Weekly Summary Report

#### 5.2.1: Create Report Service

-   [ ] Create services/report.service.ts
-   [ ] Implement generateWeeklySummary(userId, language):
    -   Get week's expenses
    -   Calculate totals
    -   Get budget status
    -   Get AI insights
    -   Format data for template

#### 5.2.2: Generate Chart Images

-   [ ] Install chart-to-image library (or use external service)
-   [ ] Implement generatePieChartImage(data)
-   [ ] Save to temp directory or upload to S3
-   [ ] Include image URL in email

#### 5.2.3: Build Email Content

-   [ ] Populate weekly report template with data
-   [ ] Include:
    -   Total spent
    -   Top categories
    -   Budget alerts
    -   AI insights
    -   Embedded pie chart
    -   Link to full dashboard
-   [ ] Support English and Spanish

#### 5.2.4: Create Weekly Email Cron Job

-   [ ] Create jobs/weeklyEmail.job.ts
-   [ ] Schedule for Sunday 5pm (0 17 \* \* 0)
-   [ ] For each user with aiEnabled:
    -   Generate report
    -   Send email
    -   Log success/failure
-   [ ] Register job in server startup

#### 5.2.5: Add Manual Trigger Endpoint

-   [ ] Create POST /api/reports/send-weekly
-   [ ] Allow user to request email immediately
-   [ ] Test manual trigger
-   [ ] Test scheduled job

**Checkpoint**: Weekly emails send automatically, charts embedded, bilingual support

---

### Sub-Phase 5.3: Export Functionality

#### 5.3.1: Implement CSV Export

-   [ ] Install csv-writer or similar
-   [ ] Create utils/csvExport.ts
-   [ ] Implement exportExpensesToCSV(expenses):
    -   Format expense data
    -   Generate CSV
    -   Return buffer or file path
-   [ ] Create GET /api/expenses/export/csv endpoint
-   [ ] Add query filters (month, year, category)
-   [ ] Test download

#### 5.3.2: Implement PDF Export

-   [ ] Install pdfkit or puppeteer
-   [ ] Create utils/pdfExport.ts
-   [ ] Design PDF layout:
    -   Header with user info
    -   Summary section
    -   Expense table
    -   Charts
    -   Footer with totals
-   [ ] Implement exportExpensesToPDF(userId, month, year)
-   [ ] Create GET /api/expenses/export/pdf endpoint
-   [ ] Test download

#### 5.3.3: Add Export to Email Option

-   [ ] Add checkbox in weekly email settings
-   [ ] If enabled, attach PDF to weekly email
-   [ ] Test attachment delivery

#### 5.3.4: Test Export Features

-   [ ] Export expenses to CSV
-   [ ] Export to PDF
-   [ ] Verify formatting
-   [ ] Test with large datasets
-   [ ] Test file download in browser

**Checkpoint**: CSV/PDF exports working, attachments in emails optional

---

## Phase 5 Completion Checklist

### Functionality ✅

-   [ ] Weekly emails send automatically
-   [ ] Emails contain accurate data
-   [ ] Charts embedded in emails
-   [ ] CSV export works
-   [ ] PDF export works
-   [ ] Manual email trigger works
-   [ ] Bilingual email support

### Code Quality ✅

-   [ ] Email templates clean
-   [ ] Cron jobs registered properly
-   [ ] Export utilities reusable
-   [ ] Error handling in place

### Performance ✅

-   [ ] Chart generation efficient
-   [ ] PDF generation doesn't timeout
-   [ ] Cron jobs don't block server

### Security ✅

-   [ ] Email API key secured
-   [ ] Only user can export their data
-   [ ] Rate limiting on exports

**Phase 5 Status**: 🔒 Locked → 🟡 In Progress → 🟢 Completed

---

## Phase 6: Frontend Development

**Goal**: Build React frontend with all features  
**Duration**: 5-6 weeks  
**Status**: 🔒 Locked

### **What You'll Learn**

-   React 18 features
-   TanStack Query (data fetching)
-   Form handling with React Hook Form
-   Tailwind CSS styling
-   Component architecture
-   State management
-   Chart libraries
-   Internationalization

---

### Sub-Phase 6.1: Frontend Setup

#### 6.1.1: Initialize React Project

-   [ ] Create React app with Vite + TypeScript
-   [ ] Set up folder structure (components, pages, services, hooks, utils, types)
-   [ ] Install dependencies (axios, react-query, react-hook-form, zod)
-   [ ] Configure TypeScript

#### 6.1.2: Install and Configure Tailwind

-   [ ] Install Tailwind CSS
-   [ ] Configure tailwind.config.js
-   [ ] Set up global styles
-   [ ] Install shadcn/ui CLI
-   [ ] Install base components (Button, Input, Card, etc.)

#### 6.1.3: Set Up Routing

-   [ ] Install react-router-dom
-   [ ] Create router configuration
-   [ ] Define routes (/, /login, /register, /dashboard, /expenses, /categories, /cards, /budgets, /debts, /goals, /settings)
-   [ ] Create ProtectedRoute component
-   [ ] Test navigation

#### 6.1.4: Configure API Client

-   [ ] Create services/api.ts
-   [ ] Set up axios instance with base URL
-   [ ] Add request interceptor (attach JWT token)
-   [ ] Add response interceptor (handle 401, refresh token)
-   [ ] Create API service methods

#### 6.1.5: Set Up TanStack Query

-   [ ] Create QueryClient
-   [ ] Wrap app with QueryClientProvider
-   [ ] Configure default options
-   [ ] Test with simple query

**Checkpoint**: React app running, routing works, API client configured

---

### Sub-Phase 6.2: Authentication UI

#### 6.2.1: Create Auth Pages

-   [ ] Create pages/Login.tsx
-   [ ] Create pages/Register.tsx
-   [ ] Design login form (email, password)
-   [ ] Design register form (name, email, password)
-   [ ] Add Tailwind styling

#### 6.2.2: Implement Auth Logic

-   [ ] Create hooks/useAuth.ts
-   [ ] Implement login mutation
-   [ ] Implement register mutation
-   [ ] Store JWT in localStorage
-   [ ] Create AuthContext for global auth state
-   [ ] Implement logout

#### 6.2.3: Add Form Validation

-   [ ] Create validation schemas with Zod
-   [ ] Integrate React Hook Form
-   [ ] Show validation errors
-   [ ] Disable submit while loading

#### 6.2.4: Test Authentication Flow

-   [ ] Register new user
-   [ ] Login with credentials
-   [ ] Verify token stored
-   [ ] Navigate to protected route
-   [ ] Logout
-   [ ] Verify redirect to login

**Checkpoint**: Can register, login, logout, protected routes work

---

### Sub-Phase 6.3: Dashboard & Visualizations

#### 6.3.1: Create Dashboard Layout

-   [ ] Create pages/Dashboard.tsx
-   [ ] Create layout with sidebar/header
-   [ ] Add summary cards (income, spent, budget, savings)
-   [ ] Design responsive grid

#### 6.3.2: Fetch Dashboard Data

-   [ ] Create hooks/useDashboard.ts
-   [ ] Use TanStack Query to fetch dashboard data
-   [ ] Handle loading states
-   [ ] Handle errors
-   [ ] Display data in cards

#### 6.3.3: Add Pie Chart

-   [ ] Install Recharts
-   [ ] Create components/PieChart.tsx
-   [ ] Fetch category breakdown
-   [ ] Render pie chart with colors
-   [ ] Add legend
-   [ ] Make responsive

#### 6.3.4: Add Recent Expenses List

-   [ ] Create components/RecentExpenses.tsx
-   [ ] Fetch recent expenses
-   [ ] Display in table/list
-   [ ] Add card color indicators
-   [ ] Add click to view details

#### 6.3.5: Add Budget Status Section

-   [ ] Create components/BudgetStatus.tsx
-   [ ] Fetch budget data
-   [ ] Display progress bars
-   [ ] Color-code based on status (green/yellow/red)
-   [ ] Show alerts for over-budget categories

#### 6.3.6: Add Debt Overview

-   [ ] Create components/DebtOverview.tsx
-   [ ] Fetch debt data
-   [ ] Display total debt
-   [ ] Show individual debts with progress
-   [ ] Display monthly payment totals

#### 6.3.7: Add Goals Section

-   [ ] Create components/GoalsSection.tsx
-   [ ] Fetch goals
-   [ ] Display progress bars
-   [ ] Show percentage complete
-   [ ] Add quick contribute button

#### 6.3.8: Add Month Selector

-   [ ] Create components/MonthSelector.tsx
-   [ ] Allow switching between months
-   [ ] Update all dashboard data on change

**Checkpoint**: Dashboard displays all data, charts render, responsive design

---

### Sub-Phase 6.4: Expense Management UI

#### 6.4.1: Create Expenses Page

-   [ ] Create pages/Expenses.tsx
-   [ ] Fetch all expenses
-   [ ] Display in table with sorting
-   [ ] Add pagination
-   [ ] Add filters (date range, category, card)

#### 6.4.2: Create Add Expense Modal

-   [ ] Create components/AddExpenseModal.tsx
-   [ ] Build form with all fields:
    -   Date picker
    -   Description
    -   Amount
    -   Category/Subcategory selects
    -   Card select
    -   Shared expense toggle
    -   Percentage input
    -   Recurring toggle
    -   Frequency/day inputs
-   [ ] Add form validation
-   [ ] Submit expense
-   [ ] Refetch expenses on success
-   [ ] Show success/error messages

#### 6.4.3: Create Edit Expense Modal

-   [ ] Create components/EditExpenseModal.tsx
-   [ ] Pre-populate form with expense data
-   [ ] Allow updates
-   [ ] Handle actualExpenditure recalculation
-   [ ] Show updated expense

#### 6.4.4: Add Delete Functionality

-   [ ] Add delete button to each expense
-   [ ] Confirm deletion dialog
-   [ ] Delete expense
-   [ ] Refetch list

#### 6.4.5: Add Bulk Actions

-   [ ] Add checkboxes to expense rows
-   [ ] Select all functionality
-   [ ] Bulk delete
-   [ ] Bulk categorize (optional)

#### 6.4.6: Add Settlement Features

-   [ ] Show settlement status badge for shared expenses
-   [ ] Add "Mark as Paid" button
-   [ ] Create settlements summary page
-   [ ] Group by person
-   [ ] Show total owed

**Checkpoint**: Can CRUD expenses, filters work, settlement tracking functional

---

### Sub-Phase 6.5: Categories, Cards, and Settings

#### 6.5.1: Create Categories Page

-   [ ] Create pages/Categories.tsx
-   [ ] Display system + custom categories
-   [ ] Add create category form
-   [ ] Add subcategory management
-   [ ] Edit/delete functionality
-   [ ] Mark as relevant/non-relevant

#### 6.5.2: Create Cards Page

-   [ ] Create pages/Cards.tsx
-   [ ] Display all cards with colors
-   [ ] Show utilization bars
-   [ ] Add create card form
-   [ ] Edit/delete functionality
-   [ ] Display current month spending per card

#### 6.5.3: Create Budgets Page

-   [ ] Create pages/Budgets.tsx
-   [ ] List all budgets with status
-   [ ] Add set budget form (category + amount)
-   [ ] Edit budget amounts
-   [ ] Delete budgets
-   [ ] Show visual progress bars

#### 6.5.4: Create Income Page

-   [ ] Create pages/Income.tsx
-   [ ] Display fixed income
-   [ ] List variable income entries
-   [ ] Add income form
-   [ ] Show monthly totals
-   [ ] Edit/delete functionality

#### 6.5.5: Create Debts Page

-   [ ] Create pages/Debts.tsx
-   [ ] List all debts
-   [ ] Show remaining balance and progress
-   [ ] Add create debt form
-   [ ] Record payment functionality
-   [ ] Edit/delete debts

#### 6.5.6: Create Goals Page

-   [ ] Create pages/Goals.tsx
-   [ ] Display all goals with progress
-   [ ] Add create goal form
-   [ ] Add contribution functionality
-   [ ] Edit/delete goals
-   [ ] Visual progress indicators

#### 6.5.7: Create Settings Page

-   [ ] Create pages/Settings.tsx
-   [ ] Profile settings (name, email)
-   [ ] Change password form
-   [ ] Upload profile picture
-   [ ] Language toggle (EN/ES)
-   [ ] Currency setting
-   [ ] AI toggle
-   [ ] Email preferences

**Checkpoint**: All management pages functional, CRUD operations work

---

### Sub-Phase 6.6: Internationalization

#### 6.6.1: Set Up i18n

-   [ ] Install react-i18next
-   [ ] Create locales/en.json
-   [ ] Create locales/es.json
-   [ ] Configure i18n
-   [ ] Wrap app with I18nextProvider

#### 6.6.2: Add Translations

-   [ ] Translate all UI strings
-   [ ] Translate form labels
-   [ ] Translate error messages
-   [ ] Translate dashboard sections

#### 6.6.3: Add Language Switcher

-   [ ] Create LanguageSwitcher component
-   [ ] Add to settings or footer
-   [ ] Detect browser language on first visit
-   [ ] Store preference in localStorage

#### 6.6.4: Test Translations

-   [ ] Switch to Spanish
-   [ ] Verify all text translated
-   [ ] Test form validation messages
-   [ ] Test with both languages

**Checkpoint**: Full bilingual support, language switching works

---

### Sub-Phase 6.7: Polish & UX

#### 6.7.1: Add Loading States

-   [ ] Create LoadingSpinner component
-   [ ] Add skeletons for data loading
-   [ ] Show loading on all async operations

#### 6.7.2: Add Error Handling

-   [ ] Create ErrorMessage component
-   [ ] Display API errors to user
-   [ ] Add retry functionality
-   [ ] Handle network errors

#### 6.7.3: Add Toast Notifications

-   [ ] Install toast library (sonner or react-hot-toast)
-   [ ] Show success toasts on create/update/delete
-   [ ] Show error toasts on failures

#### 6.7.4: Add Animations

-   [ ] Add page transitions
-   [ ] Animate modal appearances
-   [ ] Add hover effects
-   [ ] Smooth scroll

#### 6.7.5: Mobile Responsiveness

-   [ ] Test all pages on mobile
-   [ ] Adjust layouts for small screens
-   [ ] Make tables scrollable
-   [ ] Add mobile menu

#### 6.7.6: Accessibility

-   [ ] Add ARIA labels
-   [ ] Ensure keyboard navigation
-   [ ] Test with screen reader
-   [ ] Add focus indicators

**Checkpoint**: App polished, responsive, accessible, great UX

---

## Phase 6 Completion Checklist

### Functionality ✅

-   [ ] All backend features accessible
-   [ ] Authentication flow complete
-   [ ] Dashboard displays all data
-   [ ] All CRUD operations work
-   [ ] Charts render correctly
-   [ ] Filters and search work
-   [ ] Bilingual support active

### Code Quality ✅

-   [ ] Components reusable
-   [ ] No prop drilling
-   [ ] Forms validated
-   [ ] TypeScript types complete
-   [ ] No console errors

### Performance ✅

-   [ ] Initial load fast
-   [ ] API calls optimized
-   [ ] React Query caching effective
-   [ ] No unnecessary re-renders

### UX/UI ✅

-   [ ] Intuitive navigation
-   [ ] Responsive design
-   [ ] Loading states clear
-   [ ] Error messages helpful
-   [ ] Accessible

**Phase 6 Status**: 🔒 Locked → 🟡 In Progress → 🟢 Completed

---

## Phase 7: Testing & Quality

**Goal**: Comprehensive test coverage  
**Duration**: 2-3 weeks  
**Status**: 🔒 Locked

### **What You'll Learn**

-   Jest configuration
-   Unit testing services
-   Integration testing APIs
-   Mocking dependencies
-   Test coverage analysis
-   Testing best practices

---

### Sub-Phase 7.1: Backend Unit Tests

#### 7.1.1: Set Up Jest

-   [ ] Install Jest and types
-   [ ] Install ts-jest
-   [ ] Create jest.config.js
-   [ ] Add test scripts to package.json
-   [ ] Create test setup file

#### 7.1.2: Test User Service

-   [ ] Create tests/unit/services/user.service.test.ts
-   [ ] Test createUser (success, duplicate email)
-   [ ] Test findUserByEmail
-   [ ] Test validatePassword
-   [ ] Mock Prisma client

#### 7.1.3: Test Auth Service

-   [ ] Create tests/unit/services/auth.service.test.ts
-   [ ] Test generateToken
-   [ ] Test verifyToken
-   [ ] Test register flow
-   [ ] Test login flow

#### 7.1.4: Test Expense Service

-   [ ] Create tests/unit/services/expense.service.test.ts
-   [ ] Test createExpense
-   [ ] Test actualExpenditure calculation
-   [ ] Test getExpenses with filters
-   [ ] Test updateExpense
-   [ ] Test deleteExpense

#### 7.1.5: Test Other Services

-   [ ] Test category service
-   [ ] Test card service
-   [ ] Test budget service
-   [ ] Test income service
-   [ ] Test debt service
-   [ ] Test goal service
-   [ ] Test dashboard service
-   [ ] Test AI service (mock OpenAI)

#### 7.1.6: Test Utilities

-   [ ] Test logger
-   [ ] Test validation schemas
-   [ ] Test CSV export
-   [ ] Test PDF export

**Checkpoint**: All services have unit tests, coverage >80%

---

### Sub-Phase 7.2: Backend Integration Tests

#### 7.2.1: Set Up Integration Testing

-   [ ] Install Supertest
-   [ ] Create test database
-   [ ] Create test setup/teardown
-   [ ] Clear database between tests

#### 7.2.2: Test Auth Endpoints

-   [ ] Create tests/integration/auth.test.ts
-   [ ] Test POST /api/auth/register
-   [ ] Test POST /api/auth/login
-   [ ] Test invalid credentials
-   [ ] Test duplicate registration

#### 7.2.3: Test Expense Endpoints

-   [ ] Create tests/integration/expenses.test.ts
-   [ ] Test POST /api/expenses (create)
-   [ ] Test GET /api/expenses (list)
-   [ ] Test GET /api/expenses/:id
-   [ ] Test PUT /api/expenses/:id
-   [ ] Test DELETE /api/expenses/:id
-   [ ] Test with invalid auth token

#### 7.2.4: Test Protected Endpoints

-   [ ] Test all CRUD endpoints require auth
-   [ ] Test users can't access other users' data
-   [ ] Test invalid tokens rejected

#### 7.2.5: Test Complex Flows

-   [ ] Test full expense creation flow
-   [ ] Test shared expense with settlement
-   [ ] Test recurring expense generation
-   [ ] Test budget exceeding
-   [ ] Test debt payment recording

**Checkpoint**: All endpoints tested, integration tests pass, user isolation verified

---

### Sub-Phase 7.3: Test Coverage & CI

#### 7.3.1: Analyze Test Coverage

-   [ ] Run coverage report
-   [ ] Identify untested code
-   [ ] Add missing tests
-   [ ] Aim for 85%+ coverage

#### 7.3.2: Set Up GitHub Actions

-   [ ] Create .github/workflows/test.yml
-   [ ] Run tests on every push
-   [ ] Run tests on PRs
-   [ ] Fail build if tests fail
-   [ ] Add coverage reporting

#### 7.3.3: Add Code Quality Checks

-   [ ] Add ESLint check to CI
-   [ ] Add TypeScript compile check
-   [ ] Add Prettier format check

#### 7.3.4: Configure Branch Protection

-   [ ] Require tests to pass before merge
-   [ ] Require code review (if team)
-   [ ] Prevent direct pushes to main

**Checkpoint**: CI/CD running, tests pass, coverage good, branch protected

---

## Phase 7 Completion Checklist

### Functionality ✅

-   [ ] All services unit tested
-   [ ] All endpoints integration tested
-   [ ] Complex flows tested
-   [ ] Edge cases covered

### Code Quality ✅

-   [ ] Tests are readable
-   [ ] No flaky tests
-   [ ] Good assertions
-   [ ] Tests are fast

### Coverage ✅

-   [ ] Services >85%
-   [ ] Controllers >80%
-   [ ] Overall >80%
-   [ ] Critical paths 100%

### CI/CD ✅

-   [ ] GitHub Actions running
-   [ ] Tests run automatically
-   [ ] Coverage reported
-   [ ] Branch protection active

**Phase 7 Status**: 🔒 Locked → 🟡 In Progress → 🟢 Completed

---

## Phase 8: Production Deployment

**Goal**: Deploy to AWS with proper infrastructure  
**Duration**: 2-3 weeks  
**Status**: 🔒 Locked

### **What You'll Learn**

-   AWS services (EC2, RDS, ElastiCache, S3)
-   Docker production builds
-   Environment management
-   Database backups
-   Monitoring and logging
-   Domain and SSL setup

---

### Sub-Phase 8.1: AWS Infrastructure Setup

#### 8.1.1: Set Up AWS Account

-   [ ] Create AWS account
-   [ ] Set up billing alerts
-   [ ] Create IAM user with appropriate permissions
-   [ ] Configure AWS CLI locally

#### 8.1.2: Set Up RDS PostgreSQL

-   [ ] Create RDS PostgreSQL instance
-   [ ] Configure security group
-   [ ] Set up database credentials
-   [ ] Test connection from local
-   [ ] Run Prisma migrations on production DB

#### 8.1.3: Set Up ElastiCache Redis

-   [ ] Create ElastiCache Redis cluster
-   [ ] Configure security group
-   [ ] Note connection endpoint
-   [ ] Test connection

#### 8.1.4: Set Up S3 Bucket

-   [ ] Create S3 bucket for file storage
-   [ ] Configure bucket policies
-   [ ] Set up IAM role for EC2 access
-   [ ] Test upload/download

**Checkpoint**: AWS services provisioned, connections verified

---

### Sub-Phase 8.2: Application Deployment

#### 8.2.1: Create Production Dockerfile

-   [ ] Create Dockerfile (multi-stage build)
-   [ ] Optimize for production
-   [ ] Test build locally
-   [ ] Push to Docker Hub or AWS ECR

#### 8.2.2: Set Up EC2 Instance

-   [ ] Launch EC2 instance (t3.small or similar)
-   [ ] Configure security group (allow 80, 443, 22)
-   [ ] SSH into instance
-   [ ] Install Docker and Docker Compose

#### 8.2.3: Deploy Backend

-   [ ] Clone repository on EC2
-   [ ] Create production .env
-   [ ] Run docker-compose up
-   [ ] Verify app running
-   [ ] Test health endpoint

#### 8.2.4: Set Up Nginx Reverse Proxy

-   [ ] Install Nginx on EC2
-   [ ] Configure reverse proxy to app
-   [ ] Set up SSL with Let's Encrypt
-   [ ] Test HTTPS access

#### 8.2.5: Deploy Frontend

-   [ ] Build frontend for production
-   [ ] Upload to S3 or serve from EC2
-   [ ] Configure with production API URL
-   [ ] Test access

**Checkpoint**: App deployed, accessible via HTTPS, frontend connects to backend

---

### Sub-Phase 8.3: Monitoring & Maintenance

#### 8.3.1: Set Up CloudWatch

-   [ ] Configure CloudWatch logs
-   [ ] Set up log groups
-   [ ] Stream application logs
-   [ ] Create alarms (CPU, memory, errors)

#### 8.3.2: Set Up Database Backups

-   [ ] Configure RDS automated backups
-   [ ] Test restore process
-   [ ] Document backup procedure

#### 8.3.3: Set Up CI/CD for Deployment

-   [ ] Add deploy job to GitHub Actions
-   [ ] Trigger on merge to main
-   [ ] SSH into EC2 and pull latest
-   [ ] Restart Docker containers
-   [ ] Run migrations if needed

#### 8.3.4: Create Monitoring Dashboard

-   [ ] Set up CloudWatch dashboard
-   [ ] Add key metrics (requests, errors, latency)
-   [ ] Add database metrics
-   [ ] Set up email alerts

#### 8.3.5: Document Deployment Process

-   [ ] Write deployment README
-   [ ] Document environment variables
-   [ ] Document rollback procedure
-   [ ] Document scaling procedure

**Checkpoint**: App monitored, backups configured, auto-deploy working

---

## Phase 8 Completion Checklist

### Infrastructure ✅

-   [ ] AWS services provisioned
-   [ ] Database accessible
-   [ ] Redis connected
-   [ ] S3 configured

### Deployment ✅

-   [ ] App deployed and running
-   [ ] SSL certificate active
-   [ ] Frontend accessible
-   [ ] API endpoints work

### Monitoring ✅

-   [ ] Logs streaming to CloudWatch
-   [ ] Alarms configured
-   [ ] Dashboard created
-   [ ] Backups automated

### Documentation ✅

-   [ ] Deployment process documented
-   [ ] Environment variables documented
-   [ ] Troubleshooting guide created

**Phase 8 Status**: 🔒 Locked → 🟡 In Progress → 🟢 Completed

---

## Phase 9: Advanced Features

**Goal**: OAuth, 2FA, advanced filtering  
**Duration**: 2-3 weeks  
**Status**: 🔒 Locked

### **What You'll Learn**

-   OAuth 2.0 flow
-   Google/Apple Sign-In
-   2FA with TOTP
-   QR code generation
-   Advanced search patterns
-   Performance optimization

---

### Sub-Phase 9.1: OAuth Integration

#### 9.1.1: Set Up Google OAuth

-   [ ] Create Google Cloud project
-   [ ] Enable Google Sign-In API
-   [ ] Get client ID and secret
-   [ ] Add to .env

#### 9.1.2: Implement Google OAuth Backend

-   [ ] Install passport and passport-google-oauth20
-   [ ] Configure passport strategy
-   [ ] Create /api/auth/google route
-   [ ] Handle OAuth callback
-   [ ] Create or login user
-   [ ] Return JWT

#### 9.1.3: Add Google Sign-In to Frontend

-   [ ] Add Google Sign-In button
-   [ ] Redirect to OAuth URL
-   [ ] Handle callback
-   [ ] Store JWT
-   [ ] Navigate to dashboard

#### 9.1.4: Set Up Apple Sign-In

-   [ ] Configure Apple Developer account
-   [ ] Create service ID
-   [ ] Get credentials
-   [ ] Implement similar to Google

#### 9.1.5: Test OAuth Flows

-   [ ] Sign in with Google
-   [ ] Verify account created
-   [ ] Sign in with Apple
-   [ ] Test account linking

**Checkpoint**: Can sign in with Google and Apple, accounts created/linked

---

### Sub-Phase 9.2: Two-Factor Authentication

#### 9.2.1: Install 2FA Dependencies

-   [ ] Install speakeasy (TOTP)
-   [ ] Install qrcode (QR generation)

#### 9.2.2: Implement 2FA Backend

-   [ ] Add twoFactorSecret field to User model
-   [ ] Add twoFactorEnabled boolean
-   [ ] Create POST /api/auth/2fa/setup (generate secret, return QR)
-   [ ] Create POST /api/auth/2fa/verify (verify code, enable 2FA)
-   [ ] Create POST /api/auth/2fa/disable

#### 9.2.3: Update Login Flow

-   [ ] After password validation, check if 2FA enabled
-   [ ] If yes, require 2FA code
-   [ ] Verify code before issuing JWT

#### 9.2.4: Add 2FA to Frontend

-   [ ] Create 2FA setup page in settings
-   [ ] Display QR code
-   [ ] Input field for verification code
-   [ ] Test setup flow
-   [ ] Add 2FA code input on login

#### 9.2.5: Generate Backup Codes

-   [ ] Generate 10 backup codes on 2FA setup
-   [ ] Store hashed in database
-   [ ] Display to user (one-time)
-   [ ] Allow use of backup code for login

**Checkpoint**: 2FA working, backup codes functional

---

### Sub-Phase 9.3: Advanced Features & Optimization

#### 9.3.1: Implement Advanced Filtering

-   [ ] Add full-text search on expense descriptions
-   [ ] Add multi-category filter
-   [ ] Add amount range filter
-   [ ] Add merchant search
-   [ ] Add saved filter presets

#### 9.3.2: Add Redis Caching

-   [ ] Install ioredis
-   [ ] Create caching middleware
-   [ ] Cache dashboard data (5 min TTL)
-   [ ] Cache category list
-   [ ] Invalidate on create/update/delete

#### 9.3.3: Optimize Database Queries

-   [ ] Add indexes on frequently queried fields
-   [ ] Optimize dashboard aggregations
-   [ ] Use SELECT only needed fields
-   [ ] Batch queries where possible

#### 9.3.4: Add Rate Limiting

-   [ ] Install express-rate-limit
-   [ ] Add rate limiting to auth endpoints
-   [ ] Add rate limiting to AI endpoints
-   [ ] Add rate limiting to export endpoints

#### 9.3.5: Performance Testing

-   [ ] Load test with many expenses
-   [ ] Measure dashboard load time
-   [ ] Identify bottlenecks
-   [ ] Optimize slow queries

**Checkpoint**: Advanced features working, performance optimized, caching effective

---

## Phase 9 Completion Checklist

### Functionality ✅

-   [ ] Google OAuth works
-   [ ] Apple OAuth works
-   [ ] 2FA setup and login work
-   [ ] Backup codes functional
-   [ ] Advanced filtering works
-   [ ] Search functional

### Performance ✅

-   [ ] Caching reduces DB load
-   [ ] Dashboard loads <500ms
-   [ ] Queries optimized
-   [ ] Rate limiting active

### Security ✅

-   [ ] OAuth secure
-   [ ] 2FA enforced properly
-   [ ] Backup codes hashed
-   [ ] Rate limits prevent abuse

**Phase 9 Status**: 🔒 Locked → 🟡 In Progress → 🟢 Completed

---

## 🚀 Future Enhancements (Version 2)

### Mobile App (React Native)

-   [ ] Set up React Native project
-   [ ] Reuse backend API
-   [ ] Implement native navigation
-   [ ] Add biometric authentication
-   [ ] Implement camera for receipts
-   [ ] Add push notifications
-   [ ] Implement offline sync
-   [ ] Deploy to iOS App Store
-   [ ] Deploy to Google Play Store

### Bank API Integration (Plaid)

-   [ ] Set up Plaid account
-   [ ] Integrate Plaid Link
-   [ ] Sync bank transactions
-   [ ] Auto-categorize transactions
-   [ ] Handle duplicate detection
-   [ ] Support multiple bank accounts

### Receipt OCR

-   [ ] Integrate OCR service (Tesseract or cloud)
-   [ ] Extract merchant, date, amount, items
-   [ ] Auto-populate expense form
-   [ ] Store receipt images in S3
-   [ ] Display receipts in expense details

### Investment Tracking

-   [ ] Add investment accounts
-   [ ] Track stocks, bonds, crypto
-   [ ] Fetch real-time prices
-   [ ] Calculate portfolio value
-   [ ] Show investment performance
-   [ ] Add to net worth calculation

### Multi-User & Household Features

-   [ ] Add household concept
-   [ ] Invite family members
-   [ ] Shared budgets
-   [ ] Shared goals
-   [ ] Permission system
-   [ ] Activity feed
-   [ ] Split expenses automatically

### Voice Input

-   [ ] Integrate speech-to-text API
-   [ ] Parse voice commands
-   [ ] "I spent 50 dollars on groceries"
-   [ ] Confirm and create expense

### Advanced AI Features

-   [ ] Predict future expenses
-   [ ] Recommend budget adjustments
-   [ ] Detect subscription waste
-   [ ] Suggest investment opportunities
-   [ ] Generate financial plans
-   [ ] Tax optimization tips

### Additional Integrations

-   [ ] Slack notifications
-   [ ] WhatsApp summaries
-   [ ] Calendar integration (bill due dates)
-   [ ] Zapier/IFTTT webhooks

---

## 📚 Appendix

### Complete API Endpoint Reference

#### Authentication

-   POST `/api/auth/register` - Register new user
-   POST `/api/auth/login` - Login user
-   POST `/api/auth/google` - Google OAuth
-   POST `/api/auth/apple` - Apple OAuth
-   POST `/api/auth/2fa/setup` - Setup 2FA
-   POST `/api/auth/2fa/verify` - Verify 2FA
-   POST `/api/auth/2fa/disable` - Disable 2FA

#### Users

-   GET `/api/users/me` - Get current user
-   PUT `/api/users/me` - Update profile
-   POST `/api/users/profile-picture` - Upload picture
-   PUT `/api/users/password` - Change password
-   PUT `/api/users/settings/ai` - Toggle AI

#### Expenses

-   POST `/api/expenses` - Create expense
-   GET `/api/expenses` - List expenses (with filters)
-   GET `/api/expenses/:id` - Get single expense
-   PUT `/api/expenses/:id` - Update expense
-   DELETE `/api/expenses/:id` - Delete expense
-   POST `/api/expenses/rollover` - Generate recurring expenses
-   GET `/api/expenses/settlements` - Settlement summary
-   PATCH `/api/expenses/:id/settle` - Mark as paid
-   GET `/api/expenses/export/csv` - Export to CSV
-   GET `/api/expenses/export/pdf` - Export to PDF

#### Categories

-   GET `/api/categories` - List all categories
-   POST `/api/categories` - Create custom category
-   PUT `/api/categories/:id` - Update category
-   DELETE `/api/categories/:id` - Delete category
-   POST `/api/categories/:id/subcategories` - Add subcategory
-   PUT `/api/subcategories/:id` - Update subcategory
-   DELETE `/api/subcategories/:id` - Delete subcategory

#### Cards

-   GET `/api/cards` - List all cards
-   POST `/api/cards` - Create card
-   PUT `/api/cards/:id` - Update card
-   DELETE `/api/cards/:id` - Delete card

#### Budgets

-   GET `/api/budgets` - List budgets (with query params)
-   POST `/api/budgets` - Set budget
-   PUT `/api/budgets/:id` - Update budget
-   DELETE `/api/budgets/:id` - Delete budget
-   GET `/api/budgets/alerts` - Budget alerts

#### Income

-   GET `/api/income` - List income (with query params)
-   POST `/api/income` - Add income
-   PUT `/api/income/:id` - Update income
-   DELETE `/api/income/:id` - Delete income

#### Debts

-   GET `/api/debts` - List debts
-   POST `/api/debts` - Create debt
-   PUT `/api/debts/:id` - Update debt
-   DELETE `/api/debts/:id` - Delete debt
-   POST `/api/debts/:id/payment` - Record payment

#### Goals

-   GET `/api/goals` - List goals
-   POST `/api/goals` - Create goal
-   PUT `/api/goals/:id` - Update goal
-   DELETE `/api/goals/:id` - Delete goal
-   POST `/api/goals/:id/contribute` - Add contribution

#### Dashboard

-   GET `/api/dashboard` - Get dashboard data (with month/year)

#### AI

-   POST `/api/ai/analyze` - Analyze expenses
-   POST `/api/ai/categorize` - Suggest category
-   GET `/api/ai/anomalies` - Detect anomalies
-   GET `/api/ai/tips` - Get personalized tips

#### Reports

-   POST `/api/reports/send-weekly` - Trigger weekly email

---

### Database Schema (Prisma)

```prisma
model User {
  id                  String    @id @default(uuid())
  email               String    @unique
  password            String?
  name                String
  profilePictureUrl   String?
  defaultCurrency     String    @default("MXN")
  language            String    @default("en")
  aiEnabled           Boolean   @default(false)
  twoFactorSecret     String?
  twoFactorEnabled    Boolean   @default(false)
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt

  expenses            Expense[]
  categories          Category[]
  cards               Card[]
  income              Income[]
  budgets             Budget[]
  debts               Debt[]
  goals               Goal[]
}

model Category {
  id                  String        @id @default(uuid())
  name                String
  isRelevant          Boolean       @default(true)
  isSystemCategory    Boolean       @default(false)
  userId              String?
  user                User?         @relation(fields: [userId], references: [id])
  createdAt           DateTime      @default(now())
  updatedAt           DateTime      @updatedAt

  subcategories       Subcategory[]
  expenses            Expense[]
  budgets             Budget[]

  @@unique([userId, name])
}

model Subcategory {
  id                  String      @id @default(uuid())
  name                String
  categoryId          String
  category            Category    @relation(fields: [categoryId], references: [id])
  createdAt           DateTime    @default(now())
  updatedAt           DateTime    @updatedAt

  expenses            Expense[]
}

model Card {
  id                  String      @id @default(uuid())
  userId              String
  user                User        @relation(fields: [userId], references: [id])
  name                String
  color               String
  type                String
  creditLimit         Float?
  dueDate             Int?
  createdAt           DateTime    @default(now())
  updatedAt           DateTime    @updatedAt

  expenses            Expense[]
}

model Expense {
  id                  String      @id @default(uuid())
  userId              String
  user                User        @relation(fields: [userId], references: [id])
  date                DateTime
  description         String
  amount              Float
  currency            String      @default("MXN")

  categoryId          String
  category            Category    @relation(fields: [categoryId], references: [id])
  subcategoryId       String?
  subcategory         Subcategory? @relation(fields: [subcategoryId], references: [id])

  cardId              String?
  card                Card?       @relation(fields: [cardId], references: [id])

  isShared            Boolean     @default(false)
  sharedWith          String?
  yourPercentage      Float       @default(1.0)
  actualExpenditure   Float
  settlementStatus    String      @default("n/a")
  paidAt              DateTime?

  isRecurring         Boolean     @default(false)
  recurringFrequency  String?
  recurringDay        Int?

  merchantName        String?
  notes               String?

  createdAt           DateTime    @default(now())
  updatedAt           DateTime    @updatedAt

  @@index([userId, date])
}

model Income {
  id                  String      @id @default(uuid())
  userId              String
  user                User        @relation(fields: [userId], references: [id])
  date                DateTime
  amount              Float
  source              String
  type                String
  description         String?
  createdAt           DateTime    @default(now())
  updatedAt           DateTime    @updatedAt
}

model Budget {
  id                  String      @id @default(uuid())
  userId              String
  user                User        @relation(fields: [userId], references: [id])
  categoryId          String
  category            Category    @relation(fields: [categoryId], references: [id])
  monthYear           String
  budgetAmount        Float
  createdAt           DateTime    @default(now())
  updatedAt           DateTime    @updatedAt

  @@unique([userId, categoryId, monthYear])
}

model Debt {
  id                  String      @id @default(uuid())
  userId              String
  user                User        @relation(fields: [userId], references: [id])
  name                String
  totalAmount         Float
  remainingAmount     Float
  interestRate        Float
  minimumPayment      Float
  dueDate             Int
  type                String
  createdAt           DateTime    @default(now())
  updatedAt           DateTime    @updatedAt
}

model Goal {
  id                  String      @id @default(uuid())
  userId              String
  user                User        @relation(fields: [userId], references: [id])
  name                String
  targetAmount        Float
  currentAmount       Float       @default(0)
  deadline            DateTime?
  createdAt           DateTime    @default(now())
  updatedAt           DateTime    @updatedAt
}
```

---

### Environment Variables Reference

```bash
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/moneyflow

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# OpenAI
OPENAI_API_KEY=sk-...

# Email
SENDGRID_API_KEY=SG....
# or
RESEND_API_KEY=re_...

# AWS (Production)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
S3_BUCKET_NAME=moneyflow-uploads

# OAuth
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
APPLE_CLIENT_ID=...
APPLE_CLIENT_SECRET=...

# Frontend URL
FRONTEND_URL=http://localhost:5173
# Production: https://moneyflow.com
```

---

### Testing Checklist

#### Unit Tests

-   [ ] User service
-   [ ] Auth service
-   [ ] Expense service
-   [ ] Category service
-   [ ] Card service
-   [ ] Budget service
-   [ ] Income service
-   [ ] Debt service
-   [ ] Goal service
-   [ ] Dashboard service
-   [ ] AI service
-   [ ] Email service
-   [ ] Report service
-   [ ] Recurring service

#### Integration Tests

-   [ ] Auth endpoints
-   [ ] Expense endpoints
-   [ ] Category endpoints
-   [ ] Card endpoints
-   [ ] Budget endpoints
-   [ ] Income endpoints
-   [ ] Debt endpoints
-   [ ] Goal endpoints
-   [ ] Dashboard endpoint
-   [ ] AI endpoints
-   [ ] User isolation
-   [ ] Protected routes

#### E2E Tests (Optional - Cypress)

-   [ ] Registration flow
-   [ ] Login flow
-   [ ] Create expense flow
-   [ ] Budget setting flow
-   [ ] Dashboard interaction
-   [ ] Export flow

---

## 🎓 Learning Resources

### Backend

-   [Express.js Docs](https://expressjs.com/)
-   [Prisma Docs](https://www.prisma.io/docs)
-   [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
-   [JWT Introduction](https://jwt.io/introduction)
-   [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

### Frontend

-   [React Docs](https://react.dev/)
-   [TanStack Query](https://tanstack.com/query/latest)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [shadcn/ui](https://ui.shadcn.com/)
-   [React Hook Form](https://react-hook-form.com/)

### DevOps

-   [Docker Documentation](https://docs.docker.com/)
-   [AWS Getting Started](https://aws.amazon.com/getting-started/)
-   [GitHub Actions](https://docs.github.com/en/actions)

### AI

-   [OpenAI API Docs](https://platform.openai.com/docs/api-reference)
-   [Prompt Engineering Guide](https://www.promptingguide.ai/)

---

## 📝 Project Completion Summary

Once you finish all 9 phases, you will have:

✅ A fully functional expense tracking application  
✅ Secure authentication with JWT, OAuth, and 2FA  
✅ Comprehensive financial features (budgets, debts, goals)  
✅ AI-powered insights and recommendations  
✅ Automated weekly reports via email  
✅ Beautiful, responsive React frontend  
✅ Complete test coverage (unit + integration)  
✅ Production deployment on AWS  
✅ CI/CD pipeline with GitHub Actions  
✅ Bilingual support (English/Spanish)

### Skills Mastered

-   Full-stack TypeScript development
-   PostgreSQL database design
-   RESTful API architecture
-   React with modern patterns
-   AI/LLM integration
-   Docker containerization
-   AWS cloud deployment
-   Automated testing
-   CI/CD pipelines
-   Security best practices

---

## 📞 Support & Feedback

As you work through this plan:

-   Ask questions when concepts are unclear
-   Request explanations for complex topics
-   Suggest improvements to the plan
-   Document your learnings
-   Share your progress

Remember: **This is YOUR learning journey. Take your time, understand deeply, and enjoy the process!**

---

**Plan Version**: 1.0  
**Last Updated**: December 2024  
**Estimated Total Time**: 8-9 months (5-7 hours/week)  
**Maintainer**: You + AI Assistant

---

_"The best way to learn is by doing. Build something real, make mistakes, learn from them, and iterate. You've got this!"_ 🚀

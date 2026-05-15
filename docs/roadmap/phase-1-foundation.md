# Phase 1: Foundation & Setup

**Status**: 🟢 Completed
**Goal**: Project infrastructure, database, authentication
**Duration**: 3-4 weeks

## What you'll learn

- Express.js application structure
- TypeScript configuration
- PostgreSQL database design
- Prisma ORM and migrations
- JWT authentication
- Password hashing
- Middleware patterns
- Docker basics

---

## Sub-Phase 1.1: Project Initialization

### 1.1.1: Initialize Node.js Project ✅

- [x] Create project directory
- [x] Initialize npm
- [x] Install TypeScript
- [x] Create tsconfig.json
- [x] Set up folder structure (src/controllers, models, routes, middleware, services, utils, config)

### 1.1.2: Configure Development Tools ✅

- [x] Install and configure ESLint
- [x] Install and configure Prettier
- [x] Set up Husky pre-commit hooks
- [x] Create .gitignore
- [x] Initialize git repository

### 1.1.3: Set Up Express Server ✅

- [x] Install Express and types
- [x] Create basic server file
- [x] Install and configure middleware (cors, helmet, morgan)
- [x] Create health check endpoint
- [x] Install tsx for development
- [x] Add dev script to package.json
- [x] Test server startup

### 1.1.4: Environment Configuration ✅

- [x] Install dotenv
- [x] Create .env file
- [x] Add environment variables (PORT, NODE_ENV, DATABASE_URL, JWT_SECRET)
- [x] Create .env.example
- [x] Load environment variables in server
- [x] Create config/env.ts for validation
- [x] Test environment loading

**Checkpoint**: Server starts, health endpoint works, ESLint/Prettier functional, environment variables load ✅

---

## Sub-Phase 1.2: Database Design & Prisma Setup

### 1.2.1: Install PostgreSQL & Prisma ✅

- [x] Install Prisma CLI and Client
- [x] Initialize Prisma (creates schema.prisma)
- [x] Set up PostgreSQL (local or Docker)
- [x] Update DATABASE_URL in .env
- [x] Test database connection

### 1.2.2: Design Core Database Schema ✅

- [x] Plan entity relationships (Users, Expenses, Categories, Cards, Income, Budgets, Debts, Goals)
- [x] Identify required fields for each entity
- [x] Determine field types
- [x] Plan indexes for performance

### 1.2.3: Create Prisma Models ✅

- [x] Define User model
- [x] Define Category model (with system vs custom)
- [x] Define Subcategory model
- [x] Define Card model
- [x] Define Expense model (with shared expense fields)
- [x] Define Income model
- [x] Define Budget model
- [x] Define Debt model
- [x] Define Goal model

### 1.2.4: Run Database Migrations ✅

- [x] Generate Prisma Client
- [x] Create initial migration
- [x] Verify tables created (Prisma Studio)
- [x] Create database config singleton
- [x] Export Prisma instance

### 1.2.5: Seed System Categories ✅

- [x] Create prisma/seed.ts
- [x] Define system categories array (Housing, Groceries, Transport, etc.)
- [x] Write seed script
- [x] Add seed script to package.json
- [x] Run seed
- [x] Verify in Prisma Studio

**Checkpoint**: Database connected, all tables created, Prisma Client generates, system categories seeded ✅

---

## Sub-Phase 1.3: Authentication System ✅

### 1.3.1: Install Authentication Dependencies ✅

- [x] Install jsonwebtoken and types
- [x] Install bcrypt and types
- [x] Verify JWT_SECRET in .env

### 1.3.2: Create User Service ✅

- [x] Create services/auth.service.ts (combined with auth service)
- [x] Implement createUser method (validate, hash password, create in DB)
- [x] Implement findUserByEmail method
- [x] Implement findUserById method
- [x] Implement validatePassword method
- [x] Create TypeScript interfaces

### 1.3.3: Create Auth Service ✅

- [x] Create services/auth.service.ts
- [x] Implement generateToken method
- [x] Implement verifyToken method
- [x] Implement login method
- [x] Implement password hashing and validation
- [x] Add unit tests (20 tests)

### 1.3.4: Create Auth Controller ✅

- [x] Create controllers/user.controller.ts
- [x] Implement register handler
- [x] Implement login handler
- [x] Handle errors appropriately
- [x] Add unit tests (9 tests)

### 1.3.5: Create Auth Routes ✅

- [x] Create routes/user.routes.ts
- [x] Define POST /api/auth/register
- [x] Define POST /api/auth/login
- [x] Mount routes in main server file

### 1.3.6: Create Auth Middleware ✅

- [x] Create middleware/authenticate.ts
- [x] Implement authenticate middleware
- [x] Export middleware
- [x] Add unit tests (7 tests)

### 1.3.7: Create Protected Route Example (Skipped)

- [x] Skipped — auth middleware is tested and ready; applied to expense routes in Phase 2

### 1.3.8: Test Authentication Flow ✅

- [x] Test registration endpoint (Postman + unit tests)
- [x] Test duplicate registration (should fail)
- [x] Test login with correct credentials
- [x] Test login with wrong password
- [x] Test protected route with valid token
- [x] Test protected route without token
- [x] Test protected route with invalid token
- [x] Error handler middleware with tests

**Checkpoint**: Users can register, passwords hashed, login returns JWT, protected routes work, invalid tokens rejected ✅

---

## Sub-Phase 1.4: Error Handling & Logging

### 1.4.1: Create Error Handler Middleware ✅

- [x] Create middleware/errorHandler.ts
- [x] Define custom error classes (AppError, ValidationError, AuthenticationError, NotFoundError, ConflictError, AccountDeactivationError)
- [x] Implement error handler middleware
- [x] Add as last middleware in server
- [x] Add unit tests

### 1.4.2: Set Up Logging ✅

- [x] Install winston
- [x] Create utils/logger.ts
- [x] Configure winston (console + file transports, log levels)
- [x] Configure dev format (colorized, readable) vs prod format (JSON)
- [x] Replace console.log/error with logger
- [x] Create middleware/requestLogger.ts for HTTP request logging
- [x] Mount requestLogger before routes in index.ts

### 1.4.3: Add Request Validation ✅

- [x] Install Zod
- [x] Create middleware/validateRequest.ts (higher-order function pattern)
- [x] Implement generic validation middleware using Zod
- [x] Create validation schemas for auth routes (registerUserSchema, loginUserSchema)
- [x] Apply validation to routes
- [x] Test with invalid data (manual + unit tests)
- [x] Add IFieldError type and update ValidationError class
- [x] Update errorHandler to handle ValidationError with field errors
- [x] Update IApiResponse to include errors field
- [x] Unit tests for validateRequest middleware (4 tests)
- [x] Unit test for errorHandler ValidationError with field errors branch

**Checkpoint**: Errors handled consistently, logging working, validation prevents bad data ✅

---

## Sub-Phase 1.5: Docker Development Setup ✅

### 1.5.1: Create Docker Compose File ✅

- [x] Create docker-compose.yml (PostgreSQL + Redis services)
- [x] Use environment variable interpolation (`${...}`) from root `.env`
- [x] Configure volumes for data persistence
- [x] Redis healthcheck configured

### 1.5.2: Environment Variable Refactor ✅

- [x] Split env files: root `.env` (DB credentials), `backend/.env` (app-specific)
- [x] Refactored `env.ts` to load both `.env` files via dotenv
- [x] `DATABASE_URL` composed from individual variables in `envC`
- [x] Removed hardcoded connection strings
- [x] Updated `.env.example` files for both root and backend

### 1.5.3: Create Makefile for Docker Commands ✅

- [x] Create Makefile (dev, services-up, services-down, db-logs, lint, test, build, clean, etc.)
- [x] `make dev` starts Docker services then backend server
- [x] Prisma Studio command included

### 1.5.4: Test Full Setup ✅

- [x] Start containers via `make dev`
- [x] Server starts and connects to Docker PostgreSQL
- [x] All 40 tests passing
- [x] Linter clean

**Checkpoint**: Docker containers work, database accessible, app runs with Docker DB, data persists ✅

---

## Phase 1 Completion Checklist

### Functionality ✅

- [x] Server starts without errors
- [x] Health check works
- [x] User registration works
- [x] Login returns JWT
- [x] Protected routes require auth
- [x] Database queries work
- [x] System categories seeded
- [x] Docker operational

### Code Quality ✅

- [x] ESLint passes
- [x] Prettier formats code
- [x] No hardcoded secrets
- [x] Environment variables configured
- [x] TypeScript compiles
- [x] All imports resolve

### Security ✅

- [x] Passwords hashed
- [x] JWT secrets not committed
- [x] Error messages safe
- [x] CORS configured
- [x] Helmet active
- [x] Input validation on endpoints

### Documentation ✅

- [x] README.md with setup
- [x] .env.example created
- [x] Code comments for complex logic
- [x] API endpoints documented

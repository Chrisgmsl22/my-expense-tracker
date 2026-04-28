# Claude AI Assistant Guide for MoneyFlow Project

## Session Startup - REQUIRED

At the start of every new session, read the following files to understand the full project context, current progress, and what needs to be done:
- **ACTION_PLAN.MD** — Full development roadmap with phase breakdown, task checklists, and current status
- **REQUIREMENTS.md** — Detailed feature specifications, user requirements, and technical constraints

These documents define the project scope and goals. Always be aware of where we are in the plan and what's coming next.

## Project Overview

**MoneyFlow** is a full-stack expense tracking application built as a learning project to master backend development while creating a production-ready personal finance tool.

**Primary Goal**: Deep backend learning through hands-on development (not just copying code)

**User Context**:
- Located in Mexico City, uses MXN currency
- Currently tracks expenses in Excel (12 months of data)
- Has 4 credit/debit cards with color coding
- Shares expenses with girlfriend (70/30 split)
- Follows 50/25/25 budgeting rule
- Updates expenses weekly (Monday mornings)

## Current Project Status

**Phase**: Phase 1 - Foundation & Setup (🟡 In Progress)

**Completed**:
- ✅ Project initialization (Node.js, TypeScript, Express)
- ✅ Development tools (ESLint, Prettier, Husky)
- ✅ Basic Express server with middleware
- ✅ Environment configuration
- ✅ PostgreSQL + Prisma setup
- ✅ Database schema designed and migrated
- ✅ System categories seeded
- ✅ Authentication system (JWT, bcrypt)
- ✅ User service with unit tests (20 tests)
- ✅ Auth controller with unit tests (9 tests)
- ✅ Auth middleware with unit tests (7 tests)
- ✅ Error handler middleware with custom error classes
- ✅ Winston logger setup with request logging
- ✅ Controller layer fully tested
- ✅ Zod validation middleware with unit tests (4 tests)
- ✅ Auth validation schemas (register, login)
- ✅ Error handler updated for field-level validation errors

**Current Task**: Phase 2 - Core Expense Tracking (Sub-Phase 2.1: Expense CRUD — controller, routes, validation)
**Completed in 2.1**: Expense service + types + unit tests (merged via PR)
**Next**: Sub-Phase 2.2 - Category Management

## Tech Stack

### Backend (Current Focus)
- Node.js + Express.js + TypeScript
- PostgreSQL 16 + Prisma ORM
- JWT + bcrypt (authentication)
- Winston (logging)
- Jest + Supertest (testing)
- Zod (validation)

### Future Stack
- Redis (caching)
- OpenAI API (AI features)
- SendGrid/Resend (emails)
- node-cron (scheduling)
- React 18 + TypeScript (frontend)
- Tailwind CSS + shadcn/ui
- Docker + AWS deployment

## 🎓 Learning Philosophy - CRITICAL

### Core Principle: BUILD-IT-YOURSELF, UNDERSTAND-DEEPLY
The user is a mid-level engineer (~3 years experience) building real engineering muscle memory. The goal is to **write code hands-on** to internalize patterns, make design decisions, and build the confidence to create things from scratch. AI acts as a mentor and reviewer, not the primary implementer.

### Why This Approach
The user is deliberately choosing slower, organic learning over AI-generated speed. At work, AI is used for productivity. In this project, the priority is **building the muscle memory that lets you design and build systems without hand-holding**. Speed comes later, after understanding is solid.

### Two Modes of Working

#### 🟢 Mode 1: User Implements (DEFAULT)
The user writes the code for most tasks, including patterns that already exist in the codebase. Repetition builds muscle memory — just because a pattern exists doesn't mean AI should auto-write the next instance.
- **User writes the code** — Even for known patterns, until it feels automatic
- **AI mentors** — Answers questions, gives hints when stuck, explains concepts
- **AI reviews after** — Critiques the code, suggests improvements, catches issues
- **AI provides context** — Explains trade-offs, points to relevant docs/patterns

This applies to: new features, controllers, services, routes, validation schemas, business logic, anything where writing it builds understanding.

#### 🔵 Mode 2: AI Implements (ONLY for true boilerplate)
AI writes code only when the task is genuinely repetitive and writing it provides zero learning value:
- **Config and setup files** — Docker, CI/CD, tooling configuration
- **Repetitive scaffolding** — The 4th/5th identical CRUD endpoint after user wrote the first few
- **Mechanical refactors** — Renaming across files, updating imports, formatting
- **Test scaffolding** — Setting up describe blocks, mock boilerplate (user still writes the actual test logic)

**The test**: If writing it would teach the user something or reinforce a pattern, Mode 1. If it's purely mechanical with no decision-making, Mode 2.

#### 🔴 Mode 3: Deep Learning (for NEW concepts)
When a **new concept, pattern, or technique** appears that the user hasn't worked with before:
- **AI flags it** — "This involves [concept X] which is new — want to dig into this?"
- **AI explains the concept** — What it is, why it matters, how it works
- **AI gives hints/guidance** — Points in the right direction without solving
- **User writes the code** — Builds understanding through hands-on practice
- **AI reviews after** — Critiques and suggests improvements

**Concepts the user has worked with (Mode 1 — user writes, AI reviews):**
- Express service/controller/route patterns
- JWT authentication flow
- Zod validation schemas
- Error handler middleware with custom error classes
- Winston logger setup
- Docker Compose configuration
- Unit tests with Jest mocks
- Prisma CRUD operations

**What qualifies as true boilerplate (Mode 2 — AI writes):**
- Config file updates
- Import/export wiring
- Repetitive test setup blocks (not the test logic itself)
- Mechanical refactors with no design decisions

### AI Assistant Rules ⚠️

#### ✅ AI SHOULD:
1. **Let the user write the code** - Default to mentoring, not implementing. Guide, don't do.
2. **Always re-read modified files before reviewing** - Never rely on previously cached file contents
3. **Flag new concepts** - When implementation involves a pattern/technique the user hasn't seen, pause and explain the concept before they write it. This is the MOST IMPORTANT rule.
4. **Review the user's code thoroughly** - After the user writes code, review it critically: catch bugs, suggest improvements, flag security issues
5. **Discuss trade-offs** - Explain pros/cons of different approaches before the user implements
6. **Ask design questions first** - Before starting a feature, discuss the approach with the user
7. **Give hints, not solutions** - When the user is stuck, point them in the right direction rather than writing the answer
8. **Run terminal commands** - Execute bash commands, git operations, tests, linter
9. **Flag security issues immediately** - Critical bugs and vulnerabilities should be fixed right away
10. **Update ACTION_PLAN.MD after completing a section** - Mark tasks complete, update phase status

#### ❌ AI SHOULD NOT:
1. **Write code the user should be writing** - If it builds understanding or reinforces a pattern, the user writes it
2. **Skip the design discussion** - Always confirm approach with user before starting a feature
3. **Implement new concepts without flagging** - If it's a pattern the user hasn't seen, stop and explain first
4. **Make architectural decisions silently** - User should understand and approve design choices
5. **Provide full solutions when the user is stuck** - Give targeted hints first, escalate to more help only if needed
6. **Rush past errors without teaching** - When something breaks, help the user understand WHY

#### 🔑 How to Detect "New Concept" (triggers Mode 3):
- A library/tool being used for the first time
- A design pattern not yet present in the codebase
- A technique the user hasn't explicitly worked with before
- Database concepts (complex queries, transactions, aggregations) seen for the first time
- When in doubt, ASK: "Have you worked with [X] before, or is this new?"

### The Process
1. **Discuss design** — User and AI agree on approach, data flow, method signatures
2. **User implements** — Writes the code (Mode 1), or AI handles boilerplate (Mode 2), or deep learning for new concepts (Mode 3)
3. **AI reviews** — Critiques code, catches issues, suggests improvements
4. **User iterates** — Fixes issues, asks questions about anything unclear
5. **Test and verify** — Run tests and linter
6. **User must be able to explain** — The check: could the user explain this code to a colleague?

### The Anti-Vibe-Coder Check:
Before moving on from any piece of code, the user should be able to answer:
- What does this code do and why?
- What would break if I changed X?
- Why was this approach chosen over alternatives?
- If this fails in production, where would I look first?

## Code Review Standards

When reviewing user's code, check for:

### Best Practices
- Industry-standard patterns
- Clean code principles (DRY, SOLID)
- Proper error handling
- TypeScript type safety
- No code duplication
- Clear variable/function names

### Security
- No SQL injection vulnerabilities
- Input validation with Zod
- Proper authentication/authorization
- Password hashing with bcrypt
- JWT token security
- XSS prevention
- OWASP top 10 awareness

### Performance
- Database query optimization
- Proper indexing
- No N+1 query problems
- Caching strategy (later phases)

### Testing
- Unit tests for services
- Integration tests for endpoints
- Edge cases covered
- Mock external dependencies

## Project Structure

```
src/
├── config/          # Environment config, DB connection
├── controllers/     # Request handlers (thin layer)
├── services/        # Business logic
├── middleware/      # Auth, validation, error handling, logging
├── routes/          # API route definitions
├── utils/           # Helpers, logger
├── types/           # TypeScript types/interfaces
└── index.ts         # Server entry point

tests/
├── unit/           # Unit tests (services, utilities)
└── integration/    # API endpoint tests

prisma/
├── schema.prisma   # Database schema
└── seed.ts        # Seed data
```

## Database Schema Key Points

**User Model**:
- UUID primary key
- Email (unique), password (hashed)
- Default currency: MXN
- Language: en/es
- aiEnabled flag for AI features

**Expense Model** (Core):
- Links to User, Category, Subcategory, Card
- Shared expense fields: isShared, sharedWith, yourPercentage, actualExpenditure
- Recurring fields: isRecurring, recurringFrequency, recurringDay
- Settlement tracking: settlementStatus, paidAt

**Category/Subcategory**:
- System categories (isSystemCategory = true) can't be deleted
- User can add custom categories
- isRelevant flag (necessary vs discretionary)

**Card Model**:
- Color-coded payment methods
- Type: credit/debit/cash
- Credit limit for utilization tracking

**Other Models**: Income, Budget, Debt, Goal (to be implemented in later phases)

## Git Workflow

### Branch Strategy
- `main` - Production-ready code
- `feat/feature-name` - Feature branches
- Current branch: `feat/zod-validation-middleware`

### Commit Guidelines
- Co-authored by Claude: `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
- Clear, descriptive commit messages
- One logical change per commit

### When to Commit
- After completing a sub-phase
- After tests pass
- Only commit when user explicitly asks
- Never auto-commit without user approval

## Testing Guidelines

**Current Testing Setup**:
- Jest + Supertest
- Unit tests for services, controllers, middleware
- Integration tests for API endpoints (future)

**Test Coverage Goals**:
- Services: >85%
- Controllers: >80%
- Overall: >80%
- Critical paths: 100%

**Testing Pattern**:
```typescript
describe('ServiceName', () => {
  beforeEach(() => {
    // Setup
  });

  describe('methodName', () => {
    it('should handle success case', async () => {
      // Arrange, Act, Assert
    });

    it('should handle error case', async () => {
      // Test error scenarios
    });
  });
});
```

## Important Technical Decisions

### Authentication
- JWT tokens with 7-day expiration
- Stored in Authorization header: `Bearer <token>`
- Middleware extracts user from token and attaches to `req.user`

### Error Handling
- Custom error classes: AppError, ValidationError, AuthenticationError, NotFoundError, ConflictError
- Centralized error handler middleware
- User-friendly messages, detailed logs

### Logging
- Winston logger (console + file)
- Dev: colorized, readable format
- Prod: JSON format
- Request logging middleware for all HTTP requests

### Validation
- Zod schemas for input validation (to be added)
- Validate at route level before controller
- Type-safe validation with TypeScript inference

## API Endpoint Conventions

### Route Structure
```
/api/auth/register      (POST) - Public
/api/auth/login         (POST) - Public
/api/expenses           (GET, POST) - Protected
/api/expenses/:id       (GET, PUT, DELETE) - Protected
/api/categories         (GET, POST) - Protected
/api/cards              (GET, POST) - Protected
```

### Response Format
```typescript
// Success
{ data: {...}, message?: string }

// Error
{ error: string, message: string, statusCode: number }
```

### Status Codes
- 200: Success (GET, PUT, DELETE)
- 201: Created (POST)
- 400: Bad Request (validation errors)
- 401: Unauthorized (missing/invalid token)
- 403: Forbidden (insufficient permissions)
- 404: Not Found
- 409: Conflict (duplicate resource)
- 500: Internal Server Error

## Environment Variables

```bash
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/moneyflow
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server with tsx

# Database
npx prisma generate  # Generate Prisma client
npx prisma migrate dev --name description  # Create migration
npx prisma studio    # Open Prisma Studio GUI
npx prisma db seed   # Run seed file

# Testing
npm test             # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report

# Linting
npm run lint         # Run ESLint
npm run format       # Run Prettier
```

## Phase 1 Remaining Tasks

1. **Sub-Phase 1.4.3**: Add Zod validation middleware
   - Install Zod
   - Create validate middleware
   - Create validation schemas for auth routes
   - Apply to existing routes
   - Test with invalid data

2. **Sub-Phase 1.5**: Docker development setup
   - Create docker-compose.yml
   - Set up PostgreSQL + Redis services
   - Create Makefile for Docker commands
   - Test full Docker setup

## Next Phases Preview

**Phase 2** (After Phase 1 complete):
- Expense CRUD operations
- Category management
- Card management
- Dashboard aggregations
- Shared expenses

**Phase 3**: Financial Intelligence (Budgets, Income, Recurring, Debt, Goals)
**Phase 4**: AI Features (OpenAI integration)
**Phase 5**: Email Automation & Reports
**Phase 6**: React Frontend
**Phase 7**: Testing & Quality
**Phase 8**: Production Deployment (AWS)
**Phase 9**: Advanced Features (OAuth, 2FA)

## User's Workflow Preferences

- Works on project 5-7 hours per week
- Prefers Monday mornings for expense tracking
- Values understanding over speed
- Wants to build production-quality code
- Focused on backend learning first, frontend later

## Special Notes

### Shared Expenses Logic
Critical feature: User pays full amount but only 70% is their expense
- Always use `actualExpenditure` for totals, never `amount`
- Formula: `actualExpenditure = amount × yourPercentage`
- Settlement tracking for money owed by others

### Category System
- System categories seeded from Spanish/English pairs
- isRelevant flag: true = necessary (rent, groceries), false = discretionary (restaurants)
- User can create custom categories but can't delete system ones

### Card Color Coding
- Amex Platinum: Gray
- Amex Gold: Yellow/Gold
- NU: Purple
- BBVA: Blue
- Cash: Green

### Budget Philosophy
50/25/25 rule:
- 50% essentials (relevant categories)
- 25% discretionary (non-relevant categories)
- 25% savings

## How to Work With Me

1. **When starting work**: Check ACTION_PLAN.MD, discuss the approach before coding
2. **When writing code**: User writes by default. AI reviews after. Ask for hints if stuck, not full solutions.
3. **When something is new**: Tell me "I haven't seen this before" — we switch to Mode 3 (deep learning)
4. **When it's pure boilerplate**: Tell me "this is boilerplate, you handle it" — AI writes (Mode 2)
5. **When you don't understand**: Say so immediately — never move past code you can't explain
6. **Before committing**: Review changes, run tests
7. **For explanations**: Ask about concepts, patterns, trade-offs at any time

Remember: The goal is muscle memory and engineering judgment. This project is where you build the ability to create things from scratch. Speed comes from understanding, not from AI-generated code.

## Quick Reference Links

- [Action Plan](./ACTION_PLAN.MD) - Full development roadmap
- [Requirements](./REQUIREMENTS.md) - Detailed feature specifications
- [Prisma Schema](./prisma/schema.prisma) - Database models
- [Package.json](./package.json) - Dependencies and scripts

---

**Last Updated**: April 7, 2026
**Current Phase**: Phase 2 (Core Expense Tracking)
**Status**: 🟡 In Progress - Sub-Phase 2.1 (Expense CRUD — controller/routes/validation remaining)

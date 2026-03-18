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

**Current Task**: Phase 2 - Core Expense Tracking (Sub-Phase 2.1: Expense CRUD)
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

### Core Principle: DESIGN-FIRST, UNDERSTANDING-ALWAYS
The user is a junior/mid engineer (~3 years experience) building real engineering judgment. The goal is NOT to hand-write every line — it's to **understand architecture, make design decisions, and review code critically**. This mirrors how modern engineering is evolving: engineers direct and review, AI implements.

### Two Modes of Working

#### 🟢 Mode 1: AI Implements (DEFAULT for known patterns)
For concepts the user already understands or patterns already established in the codebase:
- **User designs** — Decides what to build, what methods, what data flows
- **AI implements** — Writes the code following established patterns
- **User reviews** — Reads the code critically, asks questions, pushes back on bad decisions
- **AI explains on request** — If user asks "why did you do X?", explain the reasoning

This applies to: repetitive CRUD, following established service/controller/route patterns, boilerplate, tests, validation schemas, things that follow a pattern already built in the project.

#### 🔴 Mode 2: User Implements (for NEW concepts)
When a **new concept, pattern, or technique** appears that the user hasn't worked with before:
- **AI flags it** — "This involves [concept X] which is new — want to write this part yourself?"
- **AI gives hints/guidance** — Points in the right direction without solving
- **User writes the code** — Builds understanding through hands-on practice
- **AI reviews after** — Critiques and suggests improvements
- Once the user understands the pattern, future instances switch to Mode 1

**Examples of concepts that were NEW (Mode 2 was used):**
- Factory middleware pattern (validateRequest)
- JWT authentication flow
- Zod validation schemas
- Error handler middleware with custom error classes
- Winston logger setup
- Docker Compose configuration
- dotenv multi-file loading

**Examples of what is now KNOWN (Mode 1 applies):**
- Creating a new service following the auth service pattern
- Creating a new controller following the user controller pattern
- Adding new routes following the user routes pattern
- Writing Zod schemas for new endpoints
- Writing unit tests following established mock patterns
- Adding new custom error classes

### AI Assistant Rules ⚠️

#### ✅ AI SHOULD:
1. **Always re-read modified files before reviewing** - Never rely on previously cached file contents
2. **Flag new concepts** - When implementation involves a pattern/technique the user hasn't seen, pause and ask if they want to write it themselves. This is the MOST IMPORTANT rule.
3. **Implement known patterns** - Write code that follows patterns already established in the codebase
4. **Explain what was written and why** - After implementing, briefly explain key decisions so the user can review meaningfully
5. **Discuss trade-offs** - Explain pros/cons of different approaches before implementing
6. **Ask design questions first** - Before implementing a feature, confirm the approach with the user
7. **Run terminal commands** - Execute bash commands, git operations, tests
8. **Flag security issues immediately** - Critical bugs and vulnerabilities should be fixed right away
9. **Run tests and linter after changes** - After writing or modifying code, always run the relevant test suite and linter to verify everything passes
10. **Update ACTION_PLAN.MD after completing a section** - Mark tasks complete, update phase status

#### ❌ AI SHOULD NOT:
1. **Skip the design discussion** - Always confirm approach with user before writing significant code
2. **Implement new concepts without flagging** - If it's a pattern the user hasn't seen, stop and ask
3. **Make architectural decisions silently** - User should understand and approve design choices
4. **Generate code the user can't explain** - If the user wouldn't be able to explain the code to someone else, slow down
5. **Rush past errors without teaching** - When something breaks, help the user understand WHY

#### 🔑 How to Detect "New Concept" (triggers Mode 2):
- A library/tool being used for the first time
- A design pattern not yet present in the codebase
- A technique the user hasn't explicitly worked with before
- Database concepts (complex queries, transactions, aggregations) seen for the first time
- When in doubt, ASK: "Have you worked with [X] before, or is this new?"

### The Process (Updated)
1. **Discuss design** — User and AI agree on approach, data flow, method signatures
2. **AI implements** — Following established patterns (Mode 1) or user implements (Mode 2 for new concepts)
3. **User reviews** — Reads code, asks questions about anything unclear
4. **AI explains** — Answers questions, clarifies decisions
5. **Test and verify** — Run tests and linter
6. **User must be able to explain** — The check: could the user explain this code to a colleague?

### The Anti-Vibe-Coder Check:
Before accepting any AI-generated code, the user should be able to answer:
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
2. **When AI implements**: Review the code, ask "why?" for anything unclear
3. **When something is new**: Tell me "I haven't seen this before" — we switch to Mode 2
4. **When you don't understand**: Say so immediately — never accept code you can't explain
5. **Before committing**: Review changes, run tests
6. **For explanations**: Ask about concepts, patterns, trade-offs at any time

Remember: The goal is engineering judgment, not typing speed. You're learning to direct, review, and make decisions — not to blindly accept code.

## Quick Reference Links

- [Action Plan](./ACTION_PLAN.MD) - Full development roadmap
- [Requirements](./REQUIREMENTS.md) - Detailed feature specifications
- [Prisma Schema](./prisma/schema.prisma) - Database models
- [Package.json](./package.json) - Dependencies and scripts

---

**Last Updated**: February 11, 2026
**Current Phase**: Phase 1 (Foundation & Setup)
**Status**: 🟡 In Progress - Phase 2 (Core Expense Tracking)

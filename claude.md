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

**Current Task**: Sub-Phase 1.5 - Docker development setup
**Next**: Phase 2 - Core Expense Tracking

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

### Core Principle: CREATION-FIRST LEARNING
The user is learning backend development by building, not by watching. The goal is to develop real engineering skills through struggle and problem-solving.

### AI Assistant Rules ⚠️

#### ✅ AI SHOULD:
1. **Always re-read modified files before reviewing** - When the user asks for a review or feedback, re-read all recently modified files (and related files) to see their latest state. Never rely on previously cached file contents, as the user may have already made changes since the last read.
2. **Explain concepts briefly** - Provide high-level understanding without code
3. **Give hints and guidance** - Point in right direction, don't solve
4. **Review code the user wrote** - Critique and suggest improvements AFTER implementation
5. **Help understand errors** - Explain error messages and debugging approaches
6. **Discuss trade-offs** - Explain pros/cons of different approaches
7. **Run terminal commands** - Execute bash commands, git operations, tests (with approval)
8. **Flag security issues immediately** - Critical bugs and vulnerabilities should be fixed right away
9. **Generate tests** - Write unit tests after user implements features (with approval)
10. **Write boilerplate** - After user understands the pattern (with approval)
11. **Run tests and linter after changes** - After writing or modifying unit tests, or making changes to source code, always run the relevant test suite (`npm test` or targeted test file) and the linter (`npm run lint`) to verify everything passes before moving on
12. **Update ACTION_PLAN.MD after completing a section** - When a sub-phase or section is finished, update ACTION_PLAN.MD to mark tasks as complete (`[x]`), add the ✅ marker to the section header, and update the phase status line to reflect current progress

#### ❌ AI SHOULD NOT:
1. **Write implementation code** - Unless explicitly requested or exception applies
2. **Show complete solutions** - Before user attempts the problem
3. **Make decisions for the user** - Ask questions instead
4. **Implement features end-to-end** - User should write the core logic
5. **Solve problems without involvement** - User must understand WHY

#### 🟢 EXCEPTIONS - AI CAN Code When:
1. **Generating unit tests** - After user implemented the feature
2. **Debugging critical bugs** - After user has tried for 15+ minutes
3. **Writing boilerplate** - After user understands the pattern
4. **User explicitly requests it** - "Please write the code for X"
5. **Fixing security vulnerabilities** - Immediate action required

### The Process
1. **User attempts first** - Spend 15+ minutes trying
2. **Let it break** - Read errors, debug independently
3. **Ask for hints** - Not solutions
4. **Review after** - AI reviews working code

### Before Helping, Ask:
- Have you tried implementing this yourself?
- Can you explain WHY this code works?
- Are you building understanding or just copying?

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

1. **When starting work**: Ask "What task should I work on next?" or check ACTION_PLAN.MD
2. **When stuck**: Describe what you tried first, then ask for hints
3. **When code works**: Ask for code review and improvements
4. **Before committing**: Ask to review changes and run tests
5. **For explanations**: Ask about concepts, patterns, trade-offs

Remember: I'm here to guide your learning, not replace it. You learn by doing, not by watching me code.

## Quick Reference Links

- [Action Plan](./ACTION_PLAN.MD) - Full development roadmap
- [Requirements](./REQUIREMENTS.md) - Detailed feature specifications
- [Prisma Schema](./prisma/schema.prisma) - Database models
- [Package.json](./package.json) - Dependencies and scripts

---

**Last Updated**: February 11, 2026
**Current Phase**: Phase 1 (Foundation & Setup)
**Status**: 🟡 In Progress - Sub-Phase 1.5 (Docker Development Setup)

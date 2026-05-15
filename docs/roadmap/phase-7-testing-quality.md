# Phase 7: Testing & Quality

**Status**: 🔒 Locked (partially in-progress — unit tests landing alongside each feature)
**Goal**: Comprehensive test coverage
**Duration**: 2-3 weeks

## What you'll learn

- Jest configuration
- Unit testing services
- Integration testing APIs
- Mocking dependencies
- Test coverage analysis
- Testing best practices

> If you've been writing tests as you build (per Phase 2-6 strategy), most of Sub-Phase 7.1 is already done. This sub-phase becomes a "fill the gaps" pass.

---

## Sub-Phase 7.1: Backend Unit Tests

### 7.1.1: Set Up Jest

- [x] Install Jest and types
- [x] Install ts-jest
- [x] Create jest.config.js
- [x] Add test scripts to package.json
- [x] Create test setup file

### 7.1.2: Test User Service

- [x] Create tests/unit/services/user.service.test.ts
- [x] Test createUser (success, duplicate email)
- [x] Test findUserByEmail
- [x] Test validatePassword
- [x] Mock Prisma client

### 7.1.3: Test Auth Service

- [x] Create tests/unit/services/auth.service.test.ts
- [x] Test generateToken
- [x] Test verifyToken
- [x] Test register flow
- [x] Test login flow

### 7.1.4: Test Expense Service

- [x] Create tests/unit/services/expense.service.test.ts
- [x] Test createExpense
- [x] Test actualExpenditure calculation
- [x] Test getExpenses with filters
- [x] Test updateExpense
- [x] Test deleteExpense

### 7.1.5: Test Other Services

- [ ] Test category service
- [ ] Test card service
- [ ] Test budget service
- [ ] Test income service
- [ ] Test debt service
- [ ] Test goal service
- [ ] Test dashboard service
- [ ] Test AI service (mock OpenAI)

### 7.1.6: Test Utilities [PR]

- [ ] Test logger
- [ ] Test validation schemas
- [ ] Test CSV export
- [ ] Test PDF export

**Checkpoint**: All services have unit tests, coverage >80%

---

## Sub-Phase 7.2: Backend Integration Tests

### 7.2.1: Integration Testing Setup (Supertest + test DB) [PR]

- [ ] Install Supertest
- [ ] Create test database
- [ ] Create test setup/teardown
- [ ] Clear database between tests

### 7.2.2: Auth Endpoints Integration Tests [PR]

- [ ] Create tests/integration/auth.test.ts
- [ ] Test POST /api/auth/register
- [ ] Test POST /api/auth/login
- [ ] Test invalid credentials
- [ ] Test duplicate registration

### 7.2.3: Expense Endpoints Integration Tests [PR]

- [ ] Create tests/integration/expenses.test.ts
- [ ] Test POST /api/expenses (create)
- [ ] Test GET /api/expenses (list)
- [ ] Test GET /api/expenses/:id
- [ ] Test PUT /api/expenses/:id
- [ ] Test DELETE /api/expenses/:id
- [ ] Test with invalid auth token

### 7.2.4: Auth/Authorization Integration Tests [PR]

- [ ] Test all CRUD endpoints require auth
- [ ] Test users can't access other users' data
- [ ] Test invalid tokens rejected

### 7.2.5: Complex Flow Integration Tests [PR]

- [ ] Test full expense creation flow
- [ ] Test shared expense with settlement
- [ ] Test recurring expense generation
- [ ] Test budget exceeding
- [ ] Test debt payment recording

**Checkpoint**: All endpoints tested, integration tests pass, user isolation verified

---

## Sub-Phase 7.3: Test Coverage & CI

### 7.3.1: Analyze Test Coverage

- [ ] Run coverage report
- [ ] Identify untested code
- [ ] Add missing tests
- [ ] Aim for 85%+ coverage

### 7.3.2: GitHub Actions CI [PR] ✅

- [x] Create .github/workflows/tests.yaml
- [x] Run tests on every push
- [x] Run tests on PRs
- [x] Fail build if tests fail
- [ ] Add coverage reporting

### 7.3.3: Code Quality Checks (lint/types/format) [PR]

- [x] Add ESLint check to CI
- [ ] Add TypeScript compile check
- [ ] Add Prettier format check

### 7.3.4: Configure Branch Protection ✅

- [x] Require tests to pass before merge
- [ ] Require code review (if team)
- [x] Prevent direct pushes to main

**Checkpoint**: CI/CD running, tests pass, coverage good, branch protected

---

## Phase 7 Completion Checklist

### Functionality

- [ ] All services unit tested
- [ ] All endpoints integration tested
- [ ] Complex flows tested
- [ ] Edge cases covered

### Code Quality

- [ ] Tests are readable
- [ ] No flaky tests
- [ ] Good assertions
- [ ] Tests are fast

### Coverage

- [ ] Services >85%
- [ ] Controllers >80%
- [ ] Overall >80%
- [ ] Critical paths 100%

### CI/CD

- [x] GitHub Actions running
- [x] Tests run automatically
- [ ] Coverage reported
- [x] Branch protection active

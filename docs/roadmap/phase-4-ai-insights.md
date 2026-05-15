# Phase 4: AI & Insights

**Status**: 🔒 Locked
**Goal**: OpenAI integration, expense analysis, recommendations
**Duration**: 2-3 weeks

## What you'll learn

- OpenAI API integration
- Prompt engineering
- Structured AI responses
- Language detection
- AI rate limiting
- Cost management

---

## Sub-Phase 4.1: OpenAI Setup & Service

### 4.1.1: OpenAI SDK Setup [PR]

- [ ] Install openai package
- [ ] Add OPENAI_API_KEY to .env
- [ ] Create .env.example entry
- [ ] Update env validation in config

### 4.1.2: AI Service Foundation [PR]

- [ ] Create services/ai.service.ts
- [ ] Implement OpenAI client initialization
- [ ] Create helper method callOpenAI(prompt, systemPrompt)
- [ ] Add error handling for API failures
- [ ] Add retry logic (optional)
- [ ] Unit tests (mock OpenAI client)

### 4.1.3: Expense Analysis [PR]

- [ ] Implement analyzeExpenses(userId, month, year, language):
  - Get all expenses for month
  - Get income, budgets, debts
  - Build comprehensive prompt with financial data
  - Request structured JSON response
  - Return analysis object
- [ ] Unit tests

### 4.1.4: Test AI Service

- [ ] Add sample month of data
- [ ] Call analyzeExpenses
- [ ] Verify response format
- [ ] Test with English
- [ ] Test with Spanish
- [ ] Handle API errors gracefully

**Checkpoint**: OpenAI integrated, analysis works, language-aware

---

## Sub-Phase 4.2: AI-Powered Features

### 4.2.1: Smart Categorization [PR]

- [ ] In ai.service, implement suggestCategory(description, amount):
  - Build prompt with expense details
  - Request category suggestion with confidence
  - Return { categoryId, confidence }
- [ ] Add controller + route + validation: POST /api/ai/categorize
- [ ] Manual testing with various expense descriptions
- [ ] Unit tests

### 4.2.2: Anomaly Detection [PR]

- [ ] Implement detectAnomalies(userId, month, year):
  - Get user's spending history
  - Build prompt with patterns
  - Request anomaly analysis
  - Return array of anomalies
- [ ] Add controller + route + validation: GET /api/ai/anomalies
- [ ] Unit tests

### 4.2.3: Personalized Tips [PR]

- [ ] Implement generateTips(userId, month, year, language):
  - Get financial overview
  - Build prompt for actionable advice
  - Request 3-5 tips
  - Return tips array
- [ ] Add to dashboard
- [ ] Unit tests

### 4.2.4: Test AI Features

- [ ] Test category suggestions
- [ ] Test anomaly detection
- [ ] Test tip generation
- [ ] Verify tips are actionable

**Checkpoint**: AI features working, suggestions relevant, tips actionable

---

## Sub-Phase 4.3: AI Access Control

### 4.3.1: AI Enable Flag Middleware [PR]

- [ ] Create middleware checkAIEnabled (User model already has aiEnabled field)
- [ ] Apply to all AI endpoints
- [ ] Middleware unit tests

### 4.3.2: AI Settings Endpoint [PR]

- [ ] Add PATCH /api/users/settings/ai (controller + route + validation)
- [ ] Allow toggling aiEnabled
- [ ] Manual testing
- [ ] Controller unit tests

### 4.3.3: AI Usage Tracking [PR]

- [ ] Create AIUsage model (userId, endpoint, timestamp, cost)
- [ ] Migration
- [ ] Log each AI call (in ai.service)
- [ ] Create GET /api/users/ai-usage endpoint
- [ ] Unit tests

### 4.3.4: AI Rate Limiting [PR]

- [ ] Install express-rate-limit
- [ ] Create AI-specific rate limiter (e.g., 20 requests/hour)
- [ ] Apply to AI endpoints
- [ ] Manual testing of rate limit
- [ ] Unit tests

**Checkpoint**: AI access controlled, usage tracked, rate limited

---

## Phase 4 Completion Checklist

### Functionality

- [ ] Expense analysis working
- [ ] Category suggestions accurate
- [ ] Anomaly detection functional
- [ ] Tips personalized and relevant
- [ ] AI toggle works
- [ ] Usage tracked

### Code Quality

- [ ] Prompts well-structured
- [ ] Error handling robust
- [ ] Responses validated
- [ ] Language handling clean

### Performance

- [ ] AI calls don't block UI
- [ ] Responses cached where appropriate
- [ ] Rate limiting prevents abuse

### Security

- [ ] API key not exposed
- [ ] AI only for enabled users
- [ ] Usage limits enforced

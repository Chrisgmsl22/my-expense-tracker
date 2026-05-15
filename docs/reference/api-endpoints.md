# API Endpoints (Planned Surface)

This is the **planned** API surface across all phases. The canonical source of
truth for what is actually implemented is `backend/src/routes/`. Use this doc
to plan ahead and check naming consistency.

Status legend: ✅ implemented · 🟡 partial · ⚪ planned

## Authentication

| Method | Path | Description | Status |
|---|---|---|---|
| POST | `/api/auth/register` | Register new user | ✅ |
| POST | `/api/auth/login` | Login user | ✅ |
| POST | `/api/auth/google` | Google OAuth | ⚪ (Phase 9) |
| POST | `/api/auth/apple` | Apple OAuth | ⚪ (Phase 9) |
| POST | `/api/auth/2fa/setup` | Setup 2FA | ⚪ (Phase 9) |
| POST | `/api/auth/2fa/verify` | Verify 2FA | ⚪ (Phase 9) |
| POST | `/api/auth/2fa/disable` | Disable 2FA | ⚪ (Phase 9) |

## Users

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/users/me` | Get current user | ⚪ |
| PATCH | `/api/users/me` | Update profile | ⚪ |
| POST | `/api/users/profile-picture` | Upload picture | ⚪ |
| PATCH | `/api/users/password` | Change password | ⚪ |
| PATCH | `/api/users/settings/ai` | Toggle AI | ⚪ (Phase 4) |

## Expenses

| Method | Path | Description | Status |
|---|---|---|---|
| POST | `/api/expenses` | Create expense | ✅ |
| GET | `/api/expenses` | List expenses (with filters) | ✅ |
| GET | `/api/expenses/:id` | Get single expense | ✅ |
| PATCH | `/api/expenses/:id` | Update expense | ✅ |
| DELETE | `/api/expenses/:id` | Delete expense | ✅ |
| POST | `/api/expenses/rollover` | Generate recurring expenses | ⚪ (Phase 3) |
| GET | `/api/expenses/settlements` | Settlement summary | ⚪ (Phase 2.5) |
| PATCH | `/api/expenses/:id/settle` | Mark as paid | ⚪ (Phase 2.5) |
| GET | `/api/expenses/export/csv` | Export to CSV | ⚪ (Phase 5) |
| GET | `/api/expenses/export/pdf` | Export to PDF | ⚪ (Phase 5) |

## Categories

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/categories` | List all categories | ⚪ (Phase 2.2) |
| POST | `/api/categories` | Create custom category | ⚪ (Phase 2.2) |
| PATCH | `/api/categories/:id` | Update category | ⚪ (Phase 2.2) |
| DELETE | `/api/categories/:id` | Delete category | ⚪ (Phase 2.2) |
| POST | `/api/categories/:id/subcategories` | Add subcategory | ⚪ (Phase 2.2) |
| PATCH | `/api/subcategories/:id` | Update subcategory | ⚪ (Phase 2.2) |
| DELETE | `/api/subcategories/:id` | Delete subcategory | ⚪ (Phase 2.2) |

## Cards

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/cards` | List all cards | ⚪ (Phase 2.3) |
| POST | `/api/cards` | Create card | ⚪ (Phase 2.3) |
| PATCH | `/api/cards/:id` | Update card | ⚪ (Phase 2.3) |
| DELETE | `/api/cards/:id` | Delete card | ⚪ (Phase 2.3) |

## Budgets

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/budgets` | List budgets | ⚪ (Phase 3.1) |
| POST | `/api/budgets` | Set budget | ⚪ (Phase 3.1) |
| PATCH | `/api/budgets/:id` | Update budget | ⚪ (Phase 3.1) |
| DELETE | `/api/budgets/:id` | Delete budget | ⚪ (Phase 3.1) |
| GET | `/api/budgets/alerts` | Budget alerts | ⚪ (Phase 3.1) |

## Income

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/income` | List income | ⚪ (Phase 3.2) |
| POST | `/api/income` | Add income | ⚪ (Phase 3.2) |
| PATCH | `/api/income/:id` | Update income | ⚪ (Phase 3.2) |
| DELETE | `/api/income/:id` | Delete income | ⚪ (Phase 3.2) |

## Debts

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/debts` | List debts | ⚪ (Phase 3.4) |
| POST | `/api/debts` | Create debt | ⚪ (Phase 3.4) |
| PATCH | `/api/debts/:id` | Update debt | ⚪ (Phase 3.4) |
| DELETE | `/api/debts/:id` | Delete debt | ⚪ (Phase 3.4) |
| POST | `/api/debts/:id/payment` | Record payment | ⚪ (Phase 3.4) |

## Goals

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/goals` | List goals | ⚪ (Phase 3.5) |
| POST | `/api/goals` | Create goal | ⚪ (Phase 3.5) |
| PATCH | `/api/goals/:id` | Update goal | ⚪ (Phase 3.5) |
| DELETE | `/api/goals/:id` | Delete goal | ⚪ (Phase 3.5) |
| POST | `/api/goals/:id/contribute` | Add contribution | ⚪ (Phase 3.5) |

## Dashboard

| Method | Path | Description | Status |
|---|---|---|---|
| GET | `/api/dashboard` | Dashboard data (month/year) | ⚪ (Phase 2.4) |

## AI

| Method | Path | Description | Status |
|---|---|---|---|
| POST | `/api/ai/analyze` | Analyze expenses | ⚪ (Phase 4) |
| POST | `/api/ai/categorize` | Suggest category | ⚪ (Phase 4) |
| GET | `/api/ai/anomalies` | Detect anomalies | ⚪ (Phase 4) |
| GET | `/api/ai/tips` | Personalized tips | ⚪ (Phase 4) |

## Reports

| Method | Path | Description | Status |
|---|---|---|---|
| POST | `/api/reports/send-weekly` | Trigger weekly email | ⚪ (Phase 5) |

---

## Response Conventions

### Success

```json
{ "success": true, "message": "...", "data": { ... } }
```

### Error

```json
{ "success": false, "error": "...", "message": "...", "errors": [...] }
```

### Status Codes

| Code | Use case |
|---|---|
| 200 | Success (GET, PATCH) |
| 201 | Created (POST) |
| 204 | No content (DELETE) |
| 400 | Bad Request / Validation error |
| 401 | Unauthorized (missing/invalid token) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Not Found |
| 409 | Conflict (duplicate resource) |
| 500 | Internal Server Error |

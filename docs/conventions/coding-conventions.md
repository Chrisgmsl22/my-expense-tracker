# Coding Conventions

Codebase-specific rules that an AI agent or new contributor needs to know to
match the existing style. This file captures conventions that are **not**
already enforced by configs — for tooling-enforced rules, the config IS the
source of truth.

## TypeScript

- **Strict mode is on** (`backend/tsconfig.json`). Don't disable. Don't add `"strict": false`-equivalent flags.
- **No `any` without justification**. If you must, add an inline comment: `// any: <reason>`.
- **Prefer type inference** for locals and intermediate values. Explicit return types are required on **public service/controller methods** (they are the API surface).
- **`interface` vs `type`**:
  - `interface` for object shapes that may be extended (`IUser`, `IExpense`).
  - `type` for unions, intersections, derived types (`type ExpenseResponse = ...`).
- **Derive types from Zod schemas**: `type CreateExpenseBody = z.infer<typeof createExpenseSchema>`. Don't restate fields.
- **Module augmentation** lives in `backend/src/types/express.d.ts` (e.g., `req.user`, `req.validatedQuery`).

## Architecture

The backend is **layered**:

```
route  →  middleware (auth, validation)  →  controller  →  service  →  Prisma
```

- **Routes** (`backend/src/routes/*.routes.ts`): define paths, attach middleware in order, point at controller methods. No business logic.
- **Controllers** (`backend/src/controllers/*.controller.ts`): thin. Extract input from `req`, call service, format response, return. Wrap async work in try/catch and call `next(error)`.
- **Services** (`backend/src/services/<resource>/<resource>.service.ts`): own all business logic. All Prisma calls live here. All calculations live here. All authorization checks live here.
- **Middleware** (`backend/src/middleware/*.ts`): cross-cutting concerns only — auth, validation, logging, error handling.

**Rule of thumb**: if a controller has more than ~15 lines per handler, business logic is probably leaking out of the service. Move it.

## Error handling

All custom error classes live in `backend/src/utils/errors.utils.ts`. Use the most specific class that fits:

| Class | Status | When to throw |
|---|---|---|
| `ValidationError` | 400 | Input fails business rules (Zod handles syntax) |
| `AuthenticationError` | 401 | Missing or invalid token |
| `AccountDeactivationError` | 403 | Account state issue |
| `NotFoundError` | 404 | Resource doesn't exist |
| `UserNotFoundError` | 404 | User specifically not found |
| `ConflictError` | 409 | Duplicate resource, race condition |
| `AppError` | * | Abstract base; don't throw directly |

**Rules**:

- **Never throw bare `Error`** from service code. Always pick a class.
- **Controllers never call `res.status(500)`** or `res.status(4xx)` directly for thrown errors. They `next(error)` and let the error handler middleware format the response.
- **`ValidationError` supports field-level errors**: `new ValidationError("Validation failed", [{ field: "email", message: "Invalid" }])`.
- **The error handler middleware** (`backend/src/middleware/errorHandler.ts`) maps `error.statusCode` and `error.errors` to the response shape.

## Validation

- **All routes with input use Zod schemas** via the `validateRequest` middleware.
- Schemas live in `backend/src/schemas/<resource>.schema.ts`.
- Use `ValidateReq.Body | Params | Query` to pick the branch.

**Reading parsed values**:

| Branch | Where to read |
|---|---|
| Body | `req.body` (Zod mutates via `parse()`) |
| Params | `req.validatedParams` (Express 5 forbids mutating `req.params`) |
| Query | `req.validatedQuery` (Express 5 forbids mutating `req.query`) |

Never read directly from `req.params` or `req.query` after validation — they hold the raw URL-encoded values.

**Schema patterns**:

- Use `z.coerce.date()` for dates (JSON has no `Date` type).
- Use `z.uuid("Invalid UUID format")` for ID fields.
- Use `.refine()` for cross-field validation (e.g., "X required when Y is true").
- Use `.default()` for sensible defaults (e.g., `yourPercentage: z.number().default(1)`).

## Testing

**File layout**: tests co-located with source.

```
backend/src/services/expense/
├── expense.service.ts
└── expense.service.test.ts

backend/src/controllers/
├── expense.controller.ts
└── expense.controller.test.ts
```

**Mock at the right boundary**:

| What you're testing | What you mock |
|---|---|
| Service | `prismaClient` (the lowest layer) |
| Controller | The service (not Prisma) |
| Middleware | Its collaborators (logger, schemas) |

**Patterns**:

- **`it.each` for parameterized scenarios** (e.g., one error case per error class). No hardcoded indices like `mock.calls[0][0]`.
- **Use `expect.objectContaining({ message })`** for partial assertions instead of digging into mock call arrays.
- **Visibly different fixtures**: when testing "input → parsed output," make the raw and parsed objects clearly distinguishable so the no-mutation contract is obvious (e.g., raw has an extra field that Zod strips).
- **Test naming**: `Should <expected behavior> when <condition>` or `Should <expected behavior>`. Avoid "It works" or "Test 1".

## Naming

| What | Convention | Example |
|---|---|---|
| Class | `PascalCase`, static methods | `ExpenseService`, `ExpenseController` |
| File | `kebab.lowercase.ts` with role suffix | `expense.service.ts`, `expense.controller.ts`, `expense.routes.ts`, `expense.schema.ts` |
| Test file | `<source>.test.ts` next to source | `expense.service.test.ts` |
| Zod schema | `<verb><Resource>Schema` | `createExpenseSchema`, `updateExpenseSchema`, `getExpensesQuerySchema`, `expenseIdParamSchema` |
| Interface | `I<Name>` for service contracts | `IUser`, `IExpense`, `IFieldError` |
| Derived type | `<Name>` (no `I` prefix) | `ExpenseResponse`, `GetExpensesQuery`, `CreateExpenseBody` |
| Domain types file | `<domain>.ts` | `types/expense.ts`, `types/auth.ts` |
| Module augmentation | `<lib>.d.ts` | `types/express.d.ts` |

## REST conventions

- **Plural resource paths**: `/api/expenses`, `/api/categories`, `/api/cards`.
- **HTTP verbs imply actions** — never `/api/expenses/create` or `/api/expenses/delete`:

| Method | Path | Meaning |
|---|---|---|
| POST | `/api/expenses` | Create |
| GET | `/api/expenses` | List (with filters via query string) |
| GET | `/api/expenses/:id` | Retrieve one |
| PATCH | `/api/expenses/:id` | Partial update |
| DELETE | `/api/expenses/:id` | Delete |

- **Response envelope** (JSON responses): `{ success: boolean, message: string, data: T }`.
- **Empty responses**: use `res.sendStatus(204)` for successful deletes; no JSON body.
- **Status codes**: see [the planned API reference](../reference/api-endpoints.md#status-codes).

## File organization (backend)

```
backend/src/
├── config/                          # env validation, prisma client singleton
├── controllers/                     # one file per resource (flat)
│   └── <resource>.controller.ts(.test.ts)
├── middleware/                      # cross-cutting concerns
│   ├── authenticate.ts
│   ├── validateRequest.ts
│   ├── errorHandler.ts
│   ├── requestLogger.ts
│   └── index.ts                     # barrel export
├── routes/                          # one file per resource (flat)
│   └── <resource>.routes.ts
├── schemas/                         # one file per resource (flat)
│   ├── <resource>.schema.ts
│   └── index.ts                     # barrel export
├── services/                        # one folder per resource
│   └── <resource>/
│       └── <resource>.service.ts(.test.ts)
├── types/                           # one file per domain + module augmentation
│   ├── <domain>.ts
│   ├── express.d.ts                 # Request augmentation
│   ├── errors.ts                    # error-related types (IFieldError)
│   └── index.ts                     # barrel export
├── utils/                           # logger, errors.utils.ts
└── index.ts                         # server entry point
```

## Formatting

Tooling-enforced — **don't fight it, don't override per-file**:

- **Prettier** (`.prettierrc` at repo root): 4-space indent, double quotes, semicolons, trailing comma `es5`, 80-char line width.
- **ESLint** (`backend/eslint.config.mts`).
- Both run via Husky pre-commit. CI checks them too.
- To disable a rule, add an inline comment with a reason: `// eslint-disable-next-line <rule> -- reason: <why>`. No bare disables.

To format/lint manually: `make format` and `make lint`.

## Forward-looking notes

These conventions are **backend-specific** for now. When Phase 6 (Frontend)
begins, the React side will have its own conventions doc. Some rules will
carry over (TypeScript strict, error class philosophy, test naming, REST
shape from the client side). The shared rules will be promoted to the top of
each conventions doc when that happens.

For mobile (V2 future enhancements), the same reasoning applies: a separate
conventions doc per platform, shared rules called out explicitly.

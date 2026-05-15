# Phase 6: Frontend Development

**Status**: 🔒 Locked
**Goal**: Build React frontend with all features
**Duration**: 5-6 weeks

## What you'll learn

- React 18 features
- TanStack Query (data fetching)
- Form handling with React Hook Form
- Tailwind CSS styling
- Component architecture
- State management
- Chart libraries
- Internationalization

> Frontend slices below are mostly self-contained pages/features. Each `[PR]` is independently shippable. Bundle together only if a feature is truly trivial.

---

## Sub-Phase 6.1: Frontend Setup

### 6.1.1: Initialize React Project [PR]

- [ ] Create React app with Vite + TypeScript
- [ ] Set up folder structure (components, pages, services, hooks, utils, types)
- [ ] Install dependencies (axios, react-query, react-hook-form, zod)
- [ ] Configure TypeScript

### 6.1.2: Tailwind + shadcn/ui Setup [PR]

- [ ] Install Tailwind CSS
- [ ] Configure tailwind.config.js
- [ ] Set up global styles
- [ ] Install shadcn/ui CLI
- [ ] Install base components (Button, Input, Card, etc.)

### 6.1.3: Routing + ProtectedRoute [PR]

- [ ] Install react-router-dom
- [ ] Create router configuration
- [ ] Define routes (/, /login, /register, /dashboard, /expenses, /categories, /cards, /budgets, /debts, /goals, /settings)
- [ ] Create ProtectedRoute component
- [ ] Test navigation

### 6.1.4: API Client + TanStack Query [PR]

- [ ] Create services/api.ts
- [ ] Set up axios instance with base URL
- [ ] Add request interceptor (attach JWT token)
- [ ] Add response interceptor (handle 401, refresh token)
- [ ] Create API service methods
- [ ] Create QueryClient
- [ ] Wrap app with QueryClientProvider
- [ ] Configure default options
- [ ] Test with simple query

**Checkpoint**: React app running, routing works, API client configured

---

## Sub-Phase 6.2: Authentication UI

### 6.2.1: Auth Pages (Login + Register) [PR]

- [ ] Create pages/Login.tsx
- [ ] Create pages/Register.tsx
- [ ] Design login form (email, password)
- [ ] Design register form (name, email, password)
- [ ] Add Tailwind styling

### 6.2.2: Auth Logic + AuthContext [PR]

- [ ] Create hooks/useAuth.ts
- [ ] Implement login mutation
- [ ] Implement register mutation
- [ ] Store JWT in localStorage
- [ ] Create AuthContext for global auth state
- [ ] Implement logout

### 6.2.3: Form Validation (React Hook Form + Zod) [PR]

- [ ] Create validation schemas with Zod
- [ ] Integrate React Hook Form
- [ ] Show validation errors
- [ ] Disable submit while loading

### 6.2.4: Test Authentication Flow

- [ ] Register new user
- [ ] Login with credentials
- [ ] Verify token stored
- [ ] Navigate to protected route
- [ ] Logout
- [ ] Verify redirect to login

**Checkpoint**: Can register, login, logout, protected routes work

---

## Sub-Phase 6.3: Dashboard & Visualizations

### 6.3.1: Dashboard Layout + Summary Cards [PR]

- [ ] Create pages/Dashboard.tsx
- [ ] Create layout with sidebar/header
- [ ] Add summary cards (income, spent, budget, savings)
- [ ] Design responsive grid

### 6.3.2: Dashboard Data Fetching [PR]

- [ ] Create hooks/useDashboard.ts
- [ ] Use TanStack Query to fetch dashboard data
- [ ] Handle loading states
- [ ] Handle errors
- [ ] Display data in cards

### 6.3.3: Pie Chart (Category Breakdown) [PR]

- [ ] Install Recharts
- [ ] Create components/PieChart.tsx
- [ ] Fetch category breakdown
- [ ] Render pie chart with colors
- [ ] Add legend
- [ ] Make responsive

### 6.3.4: Recent Expenses List [PR]

- [ ] Create components/RecentExpenses.tsx
- [ ] Fetch recent expenses
- [ ] Display in table/list
- [ ] Add card color indicators
- [ ] Add click to view details

### 6.3.5: Budget Status Section [PR]

- [ ] Create components/BudgetStatus.tsx
- [ ] Fetch budget data
- [ ] Display progress bars
- [ ] Color-code based on status (green/yellow/red)
- [ ] Show alerts for over-budget categories

### 6.3.6: Debt Overview [PR]

- [ ] Create components/DebtOverview.tsx
- [ ] Fetch debt data
- [ ] Display total debt
- [ ] Show individual debts with progress
- [ ] Display monthly payment totals

### 6.3.7: Goals Section [PR]

- [ ] Create components/GoalsSection.tsx
- [ ] Fetch goals
- [ ] Display progress bars
- [ ] Show percentage complete
- [ ] Add quick contribute button

### 6.3.8: Month Selector [PR]

- [ ] Create components/MonthSelector.tsx
- [ ] Allow switching between months
- [ ] Update all dashboard data on change

**Checkpoint**: Dashboard displays all data, charts render, responsive design

---

## Sub-Phase 6.4: Expense Management UI

### 6.4.1: Expenses List Page [PR]

- [ ] Create pages/Expenses.tsx
- [ ] Fetch all expenses
- [ ] Display in table with sorting
- [ ] Add pagination
- [ ] Add filters (date range, category, card)

### 6.4.2: Add Expense Modal [PR]

- [ ] Create components/AddExpenseModal.tsx
- [ ] Build form with all fields:
  - Date picker
  - Description
  - Amount
  - Category/Subcategory selects
  - Card select
  - Shared expense toggle
  - Percentage input
  - Recurring toggle
  - Frequency/day inputs
- [ ] Add form validation
- [ ] Submit expense
- [ ] Refetch expenses on success
- [ ] Show success/error messages

### 6.4.3: Edit Expense Modal [PR]

- [ ] Create components/EditExpenseModal.tsx
- [ ] Pre-populate form with expense data
- [ ] Allow updates
- [ ] Handle actualExpenditure recalculation
- [ ] Show updated expense

### 6.4.4: Delete Functionality + Confirmation [PR]

- [ ] Add delete button to each expense
- [ ] Confirm deletion dialog
- [ ] Delete expense
- [ ] Refetch list

### 6.4.5: Bulk Actions [PR]

- [ ] Add checkboxes to expense rows
- [ ] Select all functionality
- [ ] Bulk delete
- [ ] Bulk categorize (optional)

### 6.4.6: Settlement Features [PR]

- [ ] Show settlement status badge for shared expenses
- [ ] Add "Mark as Paid" button
- [ ] Create settlements summary page
- [ ] Group by person
- [ ] Show total owed

**Checkpoint**: Can CRUD expenses, filters work, settlement tracking functional

---

## Sub-Phase 6.5: Categories, Cards, and Settings

### 6.5.1: Categories Page [PR]

- [ ] Create pages/Categories.tsx
- [ ] Display system + custom categories
- [ ] Add create category form
- [ ] Add subcategory management
- [ ] Edit/delete functionality
- [ ] Mark as relevant/non-relevant

### 6.5.2: Cards Page [PR]

- [ ] Create pages/Cards.tsx
- [ ] Display all cards with colors
- [ ] Show utilization bars
- [ ] Add create card form
- [ ] Edit/delete functionality
- [ ] Display current month spending per card

### 6.5.3: Budgets Page [PR]

- [ ] Create pages/Budgets.tsx
- [ ] List all budgets with status
- [ ] Add set budget form (category + amount)
- [ ] Edit budget amounts
- [ ] Delete budgets
- [ ] Show visual progress bars

### 6.5.4: Income Page [PR]

- [ ] Create pages/Income.tsx
- [ ] Display fixed income
- [ ] List variable income entries
- [ ] Add income form
- [ ] Show monthly totals
- [ ] Edit/delete functionality

### 6.5.5: Debts Page [PR]

- [ ] Create pages/Debts.tsx
- [ ] List all debts
- [ ] Show remaining balance and progress
- [ ] Add create debt form
- [ ] Record payment functionality
- [ ] Edit/delete debts

### 6.5.6: Goals Page [PR]

- [ ] Create pages/Goals.tsx
- [ ] Display all goals with progress
- [ ] Add create goal form
- [ ] Add contribution functionality
- [ ] Edit/delete goals
- [ ] Visual progress indicators

### 6.5.7: Settings Page [PR]

- [ ] Create pages/Settings.tsx
- [ ] Profile settings (name, email)
- [ ] Change password form
- [ ] Upload profile picture
- [ ] Language toggle (EN/ES)
- [ ] Currency setting
- [ ] AI toggle
- [ ] Email preferences

**Checkpoint**: All management pages functional, CRUD operations work

---

## Sub-Phase 6.6: Internationalization

### 6.6.1: i18n Setup [PR]

- [ ] Install react-i18next
- [ ] Create locales/en.json
- [ ] Create locales/es.json
- [ ] Configure i18n
- [ ] Wrap app with I18nextProvider

### 6.6.2: Translations (EN/ES) [PR]

- [ ] Translate all UI strings
- [ ] Translate form labels
- [ ] Translate error messages
- [ ] Translate dashboard sections

### 6.6.3: Language Switcher [PR]

- [ ] Create LanguageSwitcher component
- [ ] Add to settings or footer
- [ ] Detect browser language on first visit
- [ ] Store preference in localStorage

### 6.6.4: Test Translations

- [ ] Switch to Spanish
- [ ] Verify all text translated
- [ ] Test form validation messages
- [ ] Test with both languages

**Checkpoint**: Full bilingual support, language switching works

---

## Sub-Phase 6.7: Polish & UX

### 6.7.1: Loading States + Skeletons [PR]

- [ ] Create LoadingSpinner component
- [ ] Add skeletons for data loading
- [ ] Show loading on all async operations

### 6.7.2: Error Handling Components [PR]

- [ ] Create ErrorMessage component
- [ ] Display API errors to user
- [ ] Add retry functionality
- [ ] Handle network errors

### 6.7.3: Toast Notifications [PR]

- [ ] Install toast library (sonner or react-hot-toast)
- [ ] Show success toasts on create/update/delete
- [ ] Show error toasts on failures

### 6.7.4: Animations + Transitions [PR]

- [ ] Add page transitions
- [ ] Animate modal appearances
- [ ] Add hover effects
- [ ] Smooth scroll

### 6.7.5: Mobile Responsiveness [PR]

- [ ] Test all pages on mobile
- [ ] Adjust layouts for small screens
- [ ] Make tables scrollable
- [ ] Add mobile menu

### 6.7.6: Accessibility (ARIA + keyboard nav) [PR]

- [ ] Add ARIA labels
- [ ] Ensure keyboard navigation
- [ ] Test with screen reader
- [ ] Add focus indicators

**Checkpoint**: App polished, responsive, accessible, great UX

---

## Phase 6 Completion Checklist

### Functionality

- [ ] All backend features accessible
- [ ] Authentication flow complete
- [ ] Dashboard displays all data
- [ ] All CRUD operations work
- [ ] Charts render correctly
- [ ] Filters and search work
- [ ] Bilingual support active

### Code Quality

- [ ] Components reusable
- [ ] No prop drilling
- [ ] Forms validated
- [ ] TypeScript types complete
- [ ] No console errors

### Performance

- [ ] Initial load fast
- [ ] API calls optimized
- [ ] React Query caching effective
- [ ] No unnecessary re-renders

### UX/UI

- [ ] Intuitive navigation
- [ ] Responsive design
- [ ] Loading states clear
- [ ] Error messages helpful
- [ ] Accessible

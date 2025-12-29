# MoneyFlow - Complete Requirements Document
## User Requirements & Feature Specifications

**Last Updated**: December 2024  
**Project Owner**: [Your Name]  
**Purpose**: Personal expense tracking application to replace Excel workflow

---

## 📋 Table of Contents
1. [Background & Context](#background--context)
2. [Core User Needs](#core-user-needs)
3. [Current Workflow (Excel)](#current-workflow-excel)
4. [Expense Tracking Requirements](#expense-tracking-requirements)
5. [Category System Requirements](#category-system-requirements)
6. [Card/Payment Method Requirements](#cardpayment-method-requirements)
7. [Shared Expenses Requirements](#shared-expenses-requirements)
8. [Budget System Requirements](#budget-system-requirements)
9. [Income Tracking Requirements](#income-tracking-requirements)
10. [Debt Management Requirements](#debt-management-requirements)
11. [Savings Goals Requirements](#savings-goals-requirements)
12. [Recurring Expenses Requirements](#recurring-expenses-requirements)
13. [Dashboard Requirements](#dashboard-requirements)
14. [AI Features Requirements](#ai-features-requirements)
15. [Email Automation Requirements](#email-automation-requirements)
16. [Export Functionality Requirements](#export-functionality-requirements)
17. [User Management Requirements](#user-management-requirements)
18. [Internationalization Requirements](#internationalization-requirements)
19. [Security & Privacy Requirements](#security--privacy-requirements)
20. [Mobile Requirements](#mobile-requirements)
21. [Performance Requirements](#performance-requirements)
22. [Future Features (Version 2)](#future-features-version-2)

---

## Background & Context

### Current Situation
- User has been manually tracking expenses in Excel spreadsheet for 12 months
- Uses multiple credit cards (4 accounts) with different colors for visual tracking
- Lives in Mexico City, uses MXN as primary currency
- Shares expenses with girlfriend using 70/30 split ratio
- Follows 50/25/25 budgeting rule (50% necessities, 25% disposable, 25% savings)
- Current process: Updates spreadsheet weekly every Monday morning

### Pain Points with Excel
- Time-consuming manual data entry
- Difficult to add new categories/features
- No automation for recurring expenses
- No intelligent insights or recommendations
- Hard to visualize spending patterns over time
- Color-coding by card requires manual work
- No mobile access for on-the-go logging
- Shared expense calculations done manually

### Project Goals
1. Learn backend development deeply (primary goal)
2. Build production-ready application for personal use
3. Replace Excel completely with modern web app
4. Add AI-powered insights not possible in Excel
5. Reduce friction in expense tracking
6. Make financial data more actionable

---

## Core User Needs

### Must Have (MVP)
- ✅ Log expenses quickly with all relevant fields
- ✅ Categorize expenses automatically or manually
- ✅ Track spending across multiple payment methods
- ✅ Handle shared expenses with custom split ratios
- ✅ Set and monitor budgets per category
- ✅ See visual breakdown of spending (pie charts)
- ✅ Track income (fixed salary + variable)
- ✅ Get AI-powered spending analysis
- ✅ Receive weekly email summaries

### Should Have (Phase 2)
- ✅ Recurring expense automation
- ✅ Debt tracking and payoff progress
- ✅ Savings goals with progress tracking
- ✅ Export data to CSV/PDF
- ✅ Multi-language support (English/Spanish)
- ✅ Month-to-month comparison
- ✅ Budget alerts when overspending

### Nice to Have (Future)
- ✅ Mobile app (React Native)
- ✅ Receipt OCR scanning
- ✅ Bank API integration (Plaid)
- ✅ Investment tracking
- ✅ Voice input for expenses
- ✅ Multi-user/household features

---

## Current Workflow (Excel)

### Excel Structure
User currently maintains an Excel file with:

**Main Expense Table Columns:**
- Date of expense
- Description (e.g., "YT Subscription", "Groceries at Costco")
- Quantity (amount in MXN)
- Category (primary category)
- Subcategory (nested category)
- Card used (color-coded: Amex Platinum gray, Amex Gold yellow, NU purple, BBVA blue)
- "Actual Expenditure" (calculated field for shared expenses)
- Settlement status (green highlight when partner has paid)

**Additional Sheets:**
- Monthly summary dashboard
- Budget vs actual by category
- Income tracking (fixed + variable)
- Card spending breakdown
- Year-to-date totals

**Visual Elements:**
- Pie chart showing expense distribution by category
- Color-coded cells for budget status (red = over budget, green = under budget)
- Card color coding for quick identification
- Green highlighting for settled shared expenses

### Data Entry Process
1. Every Monday morning, open banking apps
2. Review transactions from past week
3. Log each expense in Excel with all details
4. For shared expenses, mark with $$ symbols
5. Formula calculates actual expenditure (amount × percentage)
6. Update budget status manually
7. Check if overspending occurred (highlight in red)

### Calculations Done Manually
- Shared expense splits (70% user, 30% girlfriend)
- Actual expenditure for shared items
- Budget remaining per category
- Total spent by card
- Card utilization percentage

---

## Expense Tracking Requirements

### Core Expense Fields
Every expense must capture:
- **Date**: When expense occurred (not when logged)
- **Description**: Text description (e.g., "Netflix subscription", "Dinner at restaurant")
- **Amount**: Decimal value in specified currency
- **Currency**: Default MXN, but support multi-currency
- **Category**: Primary category (required)
- **Subcategory**: Optional nested category
- **Card/Payment Method**: Which card was used (optional for cash)
- **Merchant Name**: Optional, for better categorization
- **Notes**: Optional free-text field

### Shared Expense Fields
For expenses split with others:
- **Is Shared**: Boolean flag
- **Shared With**: Text field (e.g., "Girlfriend", "Family", "Friend")
- **Your Percentage**: Decimal 0-1 (0.70 = 70%, 0.50 = 50%)
- **Actual Expenditure**: Calculated field (amount × your percentage)
- **Settlement Status**: "n/a" | "pending" | "paid"
- **Paid At**: Timestamp when marked as paid

### Recurring Expense Fields
For subscriptions and regular bills:
- **Is Recurring**: Boolean flag
- **Frequency**: "weekly" | "monthly" | "yearly"
- **Recurring Day**: Day of week (1-7) or day of month (1-31)
- **Auto-generate**: Automatically create instance each period

### Expense Management Operations
- **Create**: Add new expense with all fields
- **Read**: View single expense or list with filters
- **Update**: Edit any field, recalculate actual expenditure if needed
- **Delete**: Remove expense (with confirmation)
- **Bulk Actions**: Select multiple, delete in batch
- **Mark as Paid**: For shared expenses, update settlement status

### Filtering & Search
Must support filtering by:
- Date range (from/to)
- Category and/or subcategory
- Card/payment method
- Shared vs non-shared
- Recurring vs one-time
- Settlement status
- Merchant name (search)
- Amount range (min/max)
- Relevant vs non-relevant categories

### Sorting
Support sorting by:
- Date (newest first, oldest first)
- Amount (highest first, lowest first)
- Description (A-Z, Z-A)
- Category

### Display Requirements
- Show expense list in table format
- Display card color indicator for each expense
- Show badge for shared expenses
- Show icon for recurring expenses
- Show settlement status (pending = yellow badge, paid = green checkmark)
- Show actual expenditure alongside full amount for shared expenses
- Pagination (20-50 items per page)
- Total at bottom of list

---

## Category System Requirements

### Predefined System Categories
Must come pre-loaded with these categories (in Spanish & English):

**1. Vivienda (Housing)**
- Rent
- Mortgage
- House expenses
- Repairs/maintenance
- Tax/fees

**2. Alimentación (Groceries)**
- Groceries
- Restaurants/other

**3. Caridad (Charity)**
- Taxes
- Donations

**4. Transporte (Transport/Commute)**
- Gasoline
- Repairs/tires
- License/fees
- Parking/tolls
- Public transportation
- Ubers
- Car maintenance

**5. Seguros (Insurance)**
- Life
- Medical expenses
- House
- Car
- Handicap
- Theft
- Long-term care

**6. Ahorros (Savings)**
- Emergency fund
- Open savings
- Future purchases

**7. Servicios (Services)**
- Electricity
- Gas
- Water
- Trash
- Phone plan
- Internet

**8. Salud (Health)**
- Medicine
- Doctors
- Dentist
- Additional medication
- Therapy
- Other expenses

**9. Gastos Combinados (Combined Expenses)**
- Purchases made by girlfriend
- Purchases made between the two
- Cats
- Cat sand

**10. Personal**
- Courses
- Education
- Books
- Subscriptions
- Cash withdrawals
- Technology
- Accountant
- Other

**11. Deudas (Debt)**
- Car loan
- Credit card balance
- Personal loans
- Monthly installments

**12. Recreación (Recreation/Disposable Income)**
- Entertainment
- Hobbies
- Dining out
- Social events

### Category Properties
Each category must have:
- **Name**: Display name
- **Is Relevant**: Boolean (relevant = necessary expense, non-relevant = discretionary)
- **Is System Category**: Boolean (system categories can't be deleted)
- **User ID**: Null for system categories, user ID for custom categories
- **Color**: Optional color code for visualizations

### Custom Categories
Users must be able to:
- Create new top-level categories
- Add subcategories to existing categories
- Edit category names
- Mark as relevant/non-relevant
- Delete custom categories (with warning if expenses exist)
- Cannot delete system categories

### Category Management Rules
- **Deletion Protection**: Can't delete category if expenses exist
  - Option 1: Prevent deletion, show count of expenses
  - Option 2: Reassign expenses to "Uncategorized" category
- **System Categories**: Cannot be deleted, only hidden (optional)
- **Uniqueness**: Category names must be unique per user
- **Hierarchy**: Only 2 levels (Category → Subcategory)

### Category Display
- Show system categories + user's custom categories merged
- Group subcategories under parent
- Show expense count per category
- Show total spent per category (current month)

---

## Card/Payment Method Requirements

### User's Current Cards
User tracks these 4 payment methods:
1. **Amex Platinum** - Gray color, credit card
2. **Amex Gold** - Yellow/gold color, charge card
3. **NU** - Purple color, credit card
4. **BBVA** - Blue color, debit/transactions
5. **Cash** - Green color (optional)

### Card Properties
Each card must have:
- **Name**: Display name (e.g., "Amex Platinum")
- **Color**: Hex color code for visual identification
- **Type**: "credit" | "debit" | "cash"
- **Credit Limit**: For credit cards (optional)
- **Due Date**: Day of month when payment is due (1-31)
- **User ID**: Owner of the card

### Card Calculations
For each card, calculate:
- **Current Month Spending**: Sum of all expenses charged to this card this month
- **Credit Utilization**: (Current spending / Credit limit) × 100
- **Status Color**:
  - Green: 0-30% utilization (healthy)
  - Yellow: 30-70% utilization (caution)
  - Red: 70%+ utilization (high, bad for credit score)

### Card Management Operations
- **Create**: Add new card with all properties
- **Read**: View all cards with current month stats
- **Update**: Edit card properties (limit, due date, etc.)
- **Delete**: Remove card (with warning if expenses exist)

### Card Display Requirements
- Show all cards in grid or list
- Display card color prominently
- Show current month spending
- Show credit utilization bar (for credit cards)
- Show utilization percentage with color coding
- Show due date
- Show total expenses count for this card

### Card Usage in Expenses
- When creating expense, select card from dropdown
- Card color should appear as indicator on expense row
- Expense table should show card color dot/badge
- Can filter expenses by card

### Special Note: Amex Cards
User notes that Amex limit window is every 22nd of each month, but user logs all monthly expenses (pays full balance end of month). System should:
- Track due date per card
- Not enforce payment reminders (user handles externally)
- Just track spending and utilization

---

## Shared Expenses Requirements

### Use Cases
User shares expenses in two scenarios:

**Scenario 1: With Girlfriend (70/30 split)**
- User pays 70%, girlfriend pays 30%
- Example: Groceries $1000 MXN → User's actual: $700, Girlfriend owes: $300
- Most common scenario

**Scenario 2: With Family (50/50 split)**
- User pays 50%, family pays 50%
- Example: Restaurant dinner $800 MXN → User's actual: $400, Family owes: $400
- Occasional scenario

### Shared Expense Data Model
When creating shared expense:
- **Full Amount**: Total expense amount (e.g., $1000)
- **Is Shared**: Set to true
- **Shared With**: Text field (e.g., "Girlfriend", "Family", "Mom")
- **Your Percentage**: Enter decimal (0.70 for 70%, 0.50 for 50%)
- **Actual Expenditure**: Auto-calculated (amount × your percentage)
- **Settlement Status**: Default to "pending"

### Settlement Tracking
- **Pending**: Money not yet received
  - Display with yellow badge or icon
  - Show in settlements summary
- **Paid**: Money received
  - Display with green checkmark
  - Mark timestamp when paid
  - Exclude from settlements summary

### Settlements Summary
A dedicated view showing:
- Group by "Shared With" person
- Calculate total owed per person
- List all pending shared expenses
- One-click "Mark All Paid" per person
- Running total of what each person owes

Example display:
```
Girlfriend: $2,450 MXN owed
  - Groceries ($300) - Dec 18
  - Restaurant ($150) - Dec 20
  - Gas ($100) - Dec 22
  [Mark All as Paid]

Family: $400 MXN owed
  - Dinner ($400) - Dec 15
  [Mark as Paid]
```

### UI Requirements
- **In Expense List**: Show both amounts
  - Amount: $1,000 (full)
  - Your Part: $700 (actual expenditure)
- **Badge/Icon**: Indicate shared expense clearly
- **Quick Action**: "Mark as Paid" button on each expense
- **Filter**: Show only pending settlements

### Dashboard Impact
- **Total Spent**: Use "Actual Expenditure" not full amount
- **Category Breakdown**: Use "Actual Expenditure"
- **Budget Calculations**: Use "Actual Expenditure"

This ensures user sees what THEY actually spent, not what they temporarily paid.

---

## Budget System Requirements

### Budget Structure
User wants to set monthly budgets per category:

**Budget Properties:**
- **Category**: Which category budget applies to
- **Month/Year**: "2024-12" format
- **Budget Amount**: Target spending limit
- **Spent Amount**: Calculated from expenses (auto)
- **Remaining**: Budget - Spent (auto)
- **Percentage Used**: (Spent / Budget) × 100 (auto)
- **Status**: Color-coded based on usage

### Budget Status Colors
- 🟢 **Green**: 0-75% of budget used (good, within budget)
- 🟡 **Yellow**: 75-100% of budget used (approaching limit)
- 🔴 **Red**: 100%+ of budget used (over budget)

### Budget Period
- Default: Monthly budgets
- User mentioned possible weekly budgets (optional for future)
- For MVP: Focus on monthly

### Budget vs Actual Display
User's Excel has two columns:
- **"Gastado" (Spent)**: Actual amount spent this month
- **"Estilo de vida" (Budget/Lifestyle)**: Budgeted amount

Replicate this in UI:
```
Category          Budget      Spent      Remaining    Status
────────────────────────────────────────────────────────────
Vivienda         $11,778     $11,778      $0         🔴 100%
Alimentación     $4,000      $3,450       $550       🟢 86%
Transporte       $2,000      $1,850       $150       🟢 92%
Personal         $707        $187         $520       🟢 26%
```

### Budget Operations
- **Set Budget**: Create or update budget for category/month
- **View Budgets**: See all budgets for current month
- **Edit Budget**: Adjust budget amount mid-month
- **Delete Budget**: Remove budget entirely
- **Copy from Last Month**: Quick setup for recurring budgets

### Budget Alerts
System should flag:
- **Over Budget**: Categories where spent > budget
- **Approaching Budget**: Categories at 75-100% usage
- Display alerts prominently on dashboard

Example alert:
```
⚠️ Budget Alerts:
🔴 Restaurantes: 120% of budget ($600 / $500)
🟡 Personal: 85% of budget ($600 / $707)
```

### Budget Rules User Follows
User mentioned following **50/25/25 rule**:
- 50% for essential expenses (Housing, Groceries, Transport, Services)
- 25% for disposable income (Recreation, Personal)
- 25% for savings (Emergency Fund, Goals)

System should support:
- Grouping categories by "Relevant" (essential) vs "Non-relevant" (discretionary)
- Calculate total essential vs discretionary spending
- Show adherence to 50/25/25 rule (optional dashboard widget)

---

## Income Tracking Requirements

### Income Types
User tracks two types:

**1. Fixed Income (Ingreso mensual constante)**
- Regular monthly salary
- Predictable amount
- Entered once, recurring monthly

**2. Variable Income (Ingreso mensual irregular)**
- Occasional earnings (sold shoes, freelance work, bonuses)
- Unpredictable amount and frequency
- Entered as received

### Income Properties
Each income entry has:
- **Date**: When income received
- **Amount**: Value in currency
- **Source**: Description (e.g., "Salary", "Sold shoes", "Bonus")
- **Type**: "fixed" | "variable"
- **Description**: Optional notes

### Income Calculations
For dashboard, calculate:
- **Fixed Income Total**: Sum of all fixed income for month
- **Variable Income Total**: Sum of all variable income for month
- **Total Income**: Fixed + Variable

Example display:
```
This Month's Income:
  Fixed:    $20,000 MXN
  Variable: $4,000 MXN (Sold shoes + Freelance)
  ─────────────────────
  Total:    $24,000 MXN
```

### Income vs Expenses
Dashboard should show:
- Total Income
- Total Expenses (actual expenditure)
- **Balance**: Income - Expenses
  - If positive: Surplus (ideally should be zero, meaning all budgeted)
  - If negative: Overspent (red alert)

User's philosophy: "Balance should be zero since every cent should have a purpose (spend, save, or invest)."

### Income Management
- **Add Income**: Create new income entry
- **Edit Income**: Update amount or details
- **Delete Income**: Remove entry
- **Monthly View**: See all income sources for selected month
- **Year View**: Track income trends over time

---

## Debt Management Requirements

### User's Need
User wants to track debts separately from regular expenses because:
- Seeing total debt is depressing and not helpful for daily tracking
- What matters is monthly payment amount
- Want to see payoff progress over time

### Debt Structure
Separate section showing:

**Debt Properties:**
- **Name**: Description (e.g., "Car Loan", "Credit Card Balance")
- **Type**: "loan" | "credit_card" | "personal_loan" | "installment"
- **Total Amount**: Original debt amount
- **Remaining Amount**: Current balance
- **Interest Rate**: Annual percentage rate
- **Minimum Payment**: Monthly payment due
- **Due Date**: Day of month payment is due
- **Start Date**: When debt began (optional)

### Debt Dashboard
Display as mini-dashboard on right side of main dashboard:

```
💳 Debt Overview
──────────────────────────────────
Total Debt: $45,000 MXN

Car Loan: $32,000
  Payment: $800/mo | Rate: 8%
  [████████░░] 64% paid off

Credit Card: $13,000
  Payment: $500/mo | Rate: 18%
  [████░░░░░░] 35% paid off
```

### Debt and Monthly Expenses
- **Monthly payments** for debts ARE included in "Total Monthly Expenses"
- When user makes a debt payment, log as expense in "Debt" category
- That expense counts toward total spending
- Debt dashboard shows progress, not individual payments

### Debt Operations
- **Add Debt**: Create new debt with all properties
- **Record Payment**: Log payment (updates remaining amount)
- **Update Debt**: Edit properties (refinanced rate, new terms)
- **Delete Debt**: Mark as paid off and archive
- **View Progress**: Show payoff trajectory

### Debt Alerts
- Warn if minimum payment not made this month
- Show days until next payment due
- Alert if debt increased (credit card balance went up)

---

## Savings Goals Requirements

### Goal Structure
User wants to track multiple savings goals:

**Goal Properties:**
- **Name**: Goal description (e.g., "Emergency Fund", "Vacation", "New Laptop")
- **Target Amount**: How much needed
- **Current Amount**: How much saved so far
- **Deadline**: Target date (optional)
- **Priority**: Low/Medium/High (optional)

### Primary Goal: Emergency Fund
User's main goal is building a solid emergency fund. This should be featured prominently.

### Goal Types
Support different goal categories:
- Emergency Fund (primary)
- Open Savings (general savings)
- Vacation
- Big Purchase (car, laptop, etc.)
- Investment
- Custom goals

### Goal Display
Show as section on dashboard:

```
🎯 Savings Goals
──────────────────────────────────
Emergency Fund
  ████████░░ 80% ($8,000 / $10,000)
  Target: Dec 2025

Vacation Fund
  ████░░░░░░ 40% ($1,200 / $3,000)
  Target: Jul 2025

New Laptop
  ██░░░░░░░░ 20% ($400 / $2,000)
  No deadline
```

### Goal Operations
- **Create Goal**: Set target, deadline
- **Contribute**: Add money to goal (increases current amount)
- **Withdraw**: Remove money (decreases current amount)
- **Update Goal**: Change target or deadline
- **Complete Goal**: Mark as achieved
- **Delete Goal**: Remove goal

### Goal Progress Calculation
- **Percentage**: (Current / Target) × 100
- **Remaining**: Target - Current
- **Monthly Target**: (Remaining / Months until deadline) if deadline set

### Goal Integration
- When saving money (categorized as "Savings" expense), prompt: "Add to goal?"
- Link savings contributions to specific goals
- Track contribution history per goal

---

## Recurring Expenses Requirements

### Use Case
User has fixed monthly expenses that repeat:
- Rent (every 1st)
- Netflix subscription (every 15th)
- Phone plan (every 10th)
- Internet (every 5th)
- Gym membership (every 1st)

### Recurring Expense Definition
When creating expense, user can mark as recurring:

**Recurring Properties:**
- **Is Recurring**: Boolean flag
- **Frequency**: "weekly" | "monthly" | "yearly"
- **Recurring Day**: 
  - For weekly: Day of week (1=Monday, 7=Sunday)
  - For monthly: Day of month (1-31)
  - For yearly: Specific date
- **Template**: This expense serves as template

### Month Rollover Behavior
**Critical Feature**: At the start of each new month, automatically:
1. Find all recurring expenses
2. Generate new expense instances for current month
3. Use same data (amount, category, card, description)
4. Set date to recurring day of current month
5. Mark as NOT recurring (instance, not template)

Example:
- Template: "Netflix - $320 MXN - Recurring on 15th"
- Jan 1: System creates "Netflix - $320 MXN - Jan 15, 2025"
- Feb 1: System creates "Netflix - $320 MXN - Feb 15, 2025"

### Committed Money Concept
**Key UX Feature**: When viewing dashboard at start of month:

Show "Committed Money" section:
```
💰 Total Income: $24,000 MXN
⚠️ Committed: $8,500 MXN (35%)
   - Recurring expenses: $6,500
   - Debt payments: $2,000
✅ Available: $15,500 MXN (65%)
```

This shows user their "real" disposable income before spending anything.

### Recurring Management
- **View Templates**: See all recurring expenses
- **Edit Template**: Update amount, date, description (affects future instances)
- **Pause Recurring**: Temporarily stop auto-generation (canceled subscription)
- **Delete Template**: Stop creating instances
- **Manual Trigger**: "Generate recurring expenses now" button
- **Auto-Trigger**: Cron job runs on 1st of each month

### Idempotency
- System must prevent duplicates
- Check if expense already exists for this month before creating
- If user manually added the expense, don't auto-create

---

## Dashboard Requirements

### Dashboard Purpose
Primary view when user opens app. Must show complete financial overview for selected month.

### Dashboard Layout Structure

**Top Section: Month Selector**
```
◀ December 2024 ▶               [Add Expense]
```

**Row 1: Summary Cards**
```
┌──────────────────┬──────────────────┬──────────────────┐
│  💰 Income       │  💸 Spent        │  💵 Balance      │
│  $24,000         │  $16,339         │  $7,661          │
│  Status: 🟢      │  90% of budget   │  Surplus 🟢      │
└──────────────────┴──────────────────┴──────────────────┘
```

**Row 2: Committed Money + Budget**
```
┌──────────────────────────────────┬──────────────────┐
│  ⚠️ Committed Money              │  📊 Budget Status│
│  Recurring: $6,500               │  8/12 on track   │
│  Debt Payments: $2,000           │  2 over budget   │
│  Total: $8,500 (35% of income)   │  1 approaching   │
│  Available: $15,500              │                  │
└──────────────────────────────────┴──────────────────┘
```

**Row 3: Visualizations**
```
┌──────────────────────────────────┬──────────────────┐
│  📊 Expense Breakdown            │  💳 Card Usage   │
│                                  │                  │
│  [Pie Chart]                     │  Amex Plat: 45%  │
│  - Alimentación: 28%             │  Amex Gold: 30%  │
│  - Vivienda: 26%                 │  NU: 20%         │
│  - Transporte: 14%               │  BBVA: 5%        │
│  - Other: 32%                    │                  │
└──────────────────────────────────┴──────────────────┘
```

**Row 4: Recent Activity + Debt**
```
┌──────────────────────────────────┬──────────────────┐
│  📋 Recent Expenses              │  💰 Debt Overview│
│  Date   Description   Amount Card│  Total: $45,000  │
│  12/18  Groceries    $450   🔵  │                  │
│  12/17  Uber         $85    🟣  │  Car Loan:       │
│  12/16  Netflix      $320   ⚫  │  [████████░░] 64%│
│  [View All]                      │  $800/mo payment │
│                                  │                  │
│                                  │  [Manage Debts]  │
└──────────────────────────────────┴──────────────────┘
```

**Row 5: Goals + AI Insights**
```
┌──────────────────────────────────┬──────────────────┐
│  🎯 Savings Goals                │  🤖 AI Insights  │
│  Emergency Fund:                 │  • Over budget on│
│  [████████░░] 80%                │    restaurants   │
│  $8,000 / $10,000                │  • Spending      │
│                                  │    trending up   │
│  Vacation:                       │  • Consider meal │
│  [████░░░░░░] 40%                │    prepping      │
│  $1,200 / $3,000                 │                  │
│                                  │  [Full Analysis] │
└──────────────────────────────────┴──────────────────┘
```

### Color Coding System
- 🟢 Green: Good/under budget/healthy
- 🟡 Yellow: Warning/approaching limit
- 🔴 Red: Alert/over budget/problem
- Color intensity based on severity

### Dashboard Data Requirements
Must fetch and calculate:
- Total income (fixed + variable)
- Total expenses (actual expenditure)
- Balance (income - expenses)
- Committed money (recurring + debt payments)
- Available money (income - committed)
- Spending by category (for pie chart)
- Budget status per category
- Recent expenses (last 10)
- Card utilization
- Debt summary
- Goal progress
- AI insights (if enabled)

### Dashboard Interactions
- Click category in pie chart → filter expenses by that category
- Click card → view expenses for that card
- Click recent expense → open edit modal
- Click "View All" → navigate to expenses page
- Month selector → refresh all data for selected month
- All data updates in real-time when expenses added/edited

### Performance Requirement
Dashboard must load in **<500ms** even with thousands of expenses.

---

## AI Features Requirements

### AI Provider
- Use OpenAI API (user has credits)
- Model: GPT-4 or GPT-4-turbo (balance cost vs quality)

### AI Access Control
- **Toggle in Settings**: User can enable/disable AI features
- **Feature Flag**: `aiEnabled` boolean in User model
- **Rate Limiting**: Limit AI calls to prevent excessive costs
  - Example: Max 20 AI requests per hour
- **Only for Enabled Users**: Middleware checks before AI endpoints

### Language Support
AI must respond in user's selected language:
- If user's language setting is "es" → respond in Spanish
- If user's language setting is "en" → respond in English
- AI prompts should specify: "Respond in [language]"

### AI Feature 1: Expense Health Analysis

**Trigger**: User requests analysis or weekly email

**Input Data:**
- All expenses for the month
- Income data
- Budget data
- Debt data
- Category breakdown
- Spending trends

**AI Task:**
- Analyze spending behavior
- Compare to budgets
- Identify overspending categories
- Detect unusual spending patterns
- Assess financial health
- Provide verdict (Good/Caution/Poor)

**Output Format:**
```json
{
  "summary": "You spent $16,339 this month, which is 90% of your budget. You're slightly overspending on restaurants.",
  "status": "caution",
  "insights": [
    "Restaurant spending increased by 30% compared to last month",
    "You're on track with your emergency fund goal",
    "Transportation costs are well controlled"
  ],
  "warnings": [
    "Exceeded restaurant budget by $150",
    "Approaching credit limit on Amex Gold (68% utilization)"
  ],
  "recommendations": [
    "Consider meal prepping to reduce restaurant expenses",
    "Great job staying within housing and transport budgets",
    "Try to increase emergency fund contribution by $200 next month"
  ]
}
```

### AI Feature 2: Smart Categorization

**Trigger**: User adds expense, optionally requests AI suggestion

**Input**:
- Expense description (e.g., "Uber to airport")
- Amount
- User's historical categorization patterns

**AI Task**:
- Suggest most appropriate category
- Provide confidence score
- Learn from user corrections

**Output**:
```json
{
  "category": "Transport",
  "subcategory": "Ubers",
  "confidence": 0.92,
  "reasoning": "Contains 'Uber' keyword and matches previous patterns"
}
```

**UI Flow**:
1. User types "Netflix subscription"
2. System suggests "Personal > Subscriptions" (92% confidence)
3. User confirms or corrects
4. System learns from correction

### AI Feature 3: Anomaly Detection

**Trigger**: Daily or weekly check, or on-demand

**Input**:
- Current month expenses
- Historical spending patterns (past 3-6 months)
- Budget data

**AI Task**:
- Identify unusual spending
- Flag significant deviations
- Detect new merchants
- Spot potential fraud or mistakes

**Output**:
```json
{
  "anomalies": [
    {
      "type": "unusual_amount",
      "description": "Gas expense of $800 is 4x your average",
      "date": "2024-12-15",
      "severity": "high"
    },
    {
      "type": "new_merchant",
      "description": "First purchase at 'Unknown Store XYZ'",
      "date": "2024-12-18",
      "severity": "medium"
    }
  ]
}
```

### AI Feature 4: Personalized Savings Tips

**Trigger**: Weekly email or dashboard widget

**Input**:
- Spending patterns
- Income level
- Savings goals
- Budget adherence

**AI Task**:
- Generate 3-5 actionable tips
- Personalize to user's situation
- Focus on realistic changes
- Prioritize by impact

**Output**:
```json
{
  "tips": [
    {
      "category": "Food",
      "tip": "You spend $600/month on restaurants. Cooking 2 extra meals per week could save $200/month.",
      "impact": "high",
      "difficulty": "medium"
    },
    {
      "category": "Subscriptions",
      "tip": "You have 5 active subscriptions totaling $450/month. Consider canceling Netflix ($320) since you also have Disney+.",
      "impact": "medium",
      "difficulty": "easy"
    }
  ]
}
```

### AI Feature 5: Predictive Budgeting (Future)

**Input**: Historical data
**Task**: Predict next month's spending
**Output**: Recommended budget amounts

### AI Usage Tracking
System must log:
- User ID
- AI endpoint called
- Timestamp
- Tokens used (for cost tracking)
- Response time

User can view their AI usage in settings.

---

## Email Automation Requirements

### Weekly Email Summary

**Schedule**: Every Sunday at 5:00 PM (Mexico City time)

**Recipients**: All users with `aiEnabled = true`

**Email Structure**:

**Subject Line**: "📊 Your Weekly Financial Summary - [Date Range]"

**Email Content**:

```
Hi [Name],

Here's your financial summary for Dec 15-21, 2024:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This Week: $2,340.00 MXN
This Month: $14,820.00 MXN
Budget Remaining: $3,180.00 MXN

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 TOP SPENDING CATEGORIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Alimentación: $4,230.00 (28.5%)
2. Vivienda: $3,890.00 (26.2%)
3. Transporte: $2,100.00 (14.2%)

[Embedded Pie Chart Image]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ BUDGET ALERTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Restaurantes: 120% of budget ($600 / $500)
🟡 Personal: 85% of budget ($600 / $707)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 AI INSIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• You spent $450 more on restaurants this week 
  compared to last week.
• Consider meal prepping to reduce restaurant 
  expenses.
• Great job staying within your transport budget!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 SAVINGS TIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You're on track to save $1,200 this month. Keep it up!

[View Full Dashboard Button]

Sent from MoneyFlow | Unsubscribe | Settings
```

**Technical Requirements**:
- HTML email template with inline CSS
- Responsive design (mobile-friendly)
- Embedded chart image (generate and include)
- CTA button links to dashboard
- Unsubscribe link (disables AI/emails)
- Language matches user preference

### Email Chart Generation
- Use chart library to generate pie chart
- Convert to PNG/JPG image
- Embed in email or upload to S3 and link
- Maximum size: 500KB

### Email Service
- Use SendGrid or Resend API
- Handle failures gracefully (log, retry)
- Track delivery status
- Respect rate limits

### Email Preferences (User Settings)
User can configure:
- Enable/disable weekly emails
- Change email day (default Sunday)
- Change email time (default 5pm)
- Include/exclude PDF attachment
- Language preference

### Manual Email Trigger
- User can request "Send me this week's summary now"
- Endpoint: POST /api/reports/send-weekly
- Generates and sends immediately

### Monthly Summary Email (Future)
- Same format, but for full month
- Sent on 1st of next month
- Includes month-over-month comparison

---

## Export Functionality Requirements

### CSV Export

**Trigger**: User clicks "Export to CSV" button

**Scope**: Export expenses based on current filters
- All expenses (if no filters)
- Filtered expenses (if filters applied)
- Date range expenses

**CSV Format**:
```csv
Date,Description,Amount,Currency,Category,Subcategory,Card,Shared,Actual Expenditure,Merchant,Notes
2024-12-18,Groceries at Costco,1000,MXN,Alimentación,Groceries,BBVA,Yes (70%),700,Costco,Weekly groceries
2024-12-17,Uber to airport,85,MXN,Transporte,Ubers,NU,No,85,Uber,
2024-12-16,Netflix,320,MXN,Personal,Subscriptions,Amex Gold,No,320,Netflix,Monthly
```

**Download**: Trigger browser download with filename: `moneyflow_expenses_[date].csv`

### PDF Export

**Trigger**: User clicks "Export to PDF" button

**PDF Layout**:

**Header**:
- Logo (optional)
- Title: "Expense Report"
- User name
- Date range
- Generated date

**Summary Section**:
```
Financial Summary
─────────────────────────────────
Total Income:      $24,000 MXN
Total Expenses:    $16,339 MXN
Balance:           $7,661 MXN

Relevant:          $14,995 MXN (92%)
Non-Relevant:      $3,110 MXN (19%)
```

**Category Breakdown**:
- Table or chart showing spending by category
- Percentage of total for each

**Expense List**:
- Table with all expenses (or filtered)
- Columns: Date, Description, Amount, Category, Card
- Subtotals per category

**Charts**:
- Embedded pie chart image
- Optional: Bar chart for trends

**Footer**:
- Page numbers
- "Generated by MoneyFlow"
- Timestamp

**Technical Requirements**:
- Use library like PDFKit or Puppeteer
- A4 page size
- Professional styling
- File size optimization

### Export Options

**Filter Controls**:
```
Export Expenses
───────────────────────────────
Date Range:  [Dec 1, 2024] to [Dec 31, 2024]
Category:    [All Categories ▼]
Card:        [All Cards ▼]
Include:     ☑ Summary  ☑ Charts  ☑ Details

[Export as CSV]  [Export as PDF]
```

### Email Attachment
If user has weekly emails enabled:
- Option: "Include PDF in weekly email"
- Checkbox in settings
- PDF attached to email (if enabled)

### Performance Considerations
- Large exports (1000+ expenses) should not timeout
- Show progress indicator during generation
- Limit to reasonable date ranges (e.g., max 1 year at a time)

---

## User Management Requirements

### User Profile

**User Properties**:
- **Name**: Display name
- **Email**: Login email (unique)
- **Password**: Hashed, never plain text
- **Profile Picture**: Optional image upload
- **Default Currency**: Currency code (default: MXN)
- **Language**: "en" | "es" (default: browser language)
- **AI Enabled**: Boolean (default: false)
- **Two-Factor Enabled**: Boolean (default: false)
- **Created At**: Timestamp
- **Updated At**: Timestamp

### Profile Management

User should be able to:
- View profile information
- Edit name
- Change email (with verification)
- Change password (require current password)
- Upload/change profile picture
- Delete account (with confirmation)

### Profile Picture Upload
- Accept: JPG, PNG, WebP
- Max size: 5MB
- Resize/crop to square (e.g., 200x200)
- Store in S3 or server storage
- Display in header/settings

### Change Password Flow
1. User enters current password
2. User enters new password (twice)
3. Validate current password correct
4. Validate new password strength
5. Hash and save new password
6. Log out other sessions (optional)
7. Show success message

### Settings Page Sections

**1. Profile Settings**
- Name, Email, Profile Picture
- Change Password button

**2. Preferences**
- Default currency dropdown
- Language toggle (EN/ES)

**3. AI Settings**
- Enable/disable AI features
- View AI usage stats
- Rate limits info

**4. Email Preferences**
- Enable/disable weekly emails
- Email day/time
- Include PDF attachment

**5. Data & Privacy**
- Export all data (full backup)
- Delete account
- Privacy policy link

**6. Account Security** (Future)
- Two-factor authentication
- Active sessions
- Login history

---

## Internationalization Requirements

### Supported Languages
- **English** (en)
- **Spanish** (es)

### Language Detection
On first visit:
- Detect browser language (`navigator.language`)
- If browser is Spanish (es-MX, es-ES, etc.) → set to Spanish
- Otherwise → set to English
- User can override in settings

### Language Toggle
- In settings page or footer
- Toggle switch or dropdown: "English | Español"
- Saves preference to database
- Refreshes UI immediately

### Translation Coverage
Must translate:
- All UI text (buttons, labels, headings)
- Navigation menu
- Form labels and placeholders
- Error messages
- Success messages
- Email templates
- Dashboard widgets
- Settings pages

### Category Names
Categories are bilingual:
```javascript
{
  "Housing": {
    "en": "Housing",
    "es": "Vivienda"
  },
  "Groceries": {
    "en": "Groceries",
    "es": "Alimentación"
  }
}
```

### AI Responses
AI must respond in user's language:
- Pass language parameter to AI service
- Prompt: "Respond in [English/Spanish]"
- Validate response is in correct language

### Date/Number Formatting
- Dates: Use locale-specific format
  - English: "Dec 18, 2024" or "12/18/2024"
  - Spanish: "18 dic 2024" or "18/12/2024"
- Numbers: Use locale separators
  - English: "1,234.56"
  - Spanish: "1.234,56"
- Currency: Use currency symbol/code
  - "$1,234.56 MXN" or "1.234,56 MXN"

### Translation Files Structure
```
locales/
├── en.json
└── es.json
```

Each file contains key-value pairs:
```json
{
  "dashboard": {
    "title": "Dashboard",
    "income": "Income",
    "spent": "Spent",
    "balance": "Balance"
  },
  "expenses": {
    "add": "Add Expense",
    "edit": "Edit Expense",
    "delete": "Delete Expense"
  }
}
```

---

## Security & Privacy Requirements

### Authentication
- **Password Requirements**:
  - Minimum 8 characters
  - At least 1 uppercase, 1 lowercase, 1 number
  - No common passwords (use library to check)
- **Hashing**: bcrypt with 10 salt rounds
- **JWT Tokens**:
  - 7-day expiration (configurable)
  - Stored in httpOnly cookie or localStorage
  - Include user ID in payload

### Authorization
- **User Isolation**: Users can ONLY access their own data
  - All queries must filter by userId
  - Middleware attaches userId from JWT
  - Database queries include WHERE userId = ?
- **Route Protection**: All API routes (except auth) require valid JWT
- **No Cross-User Access**: User A cannot see User B's expenses/data

### Data Privacy
- **Sensitive Data**: Financial data is sensitive
  - Use HTTPS in production (SSL/TLS)
  - Encrypt sensitive fields (optional: income amounts)
  - No data sharing without explicit consent
- **Privacy Toggle**: User can hide sensitive data from UI
  - Option in settings: "Hide amounts in shared screens"
  - Blurs numbers when toggle enabled

### Rate Limiting
- **Auth Endpoints**: 5 attempts per 15 minutes per IP
  - Prevents brute force attacks
- **API Endpoints**: 100 requests per minute per user
  - Prevents abuse
- **AI Endpoints**: 20 requests per hour per user
  - Controls costs
- **Export Endpoints**: 10 per hour per user
  - Prevents resource exhaustion

### Input Validation
- **All User Input**: Validate before processing
  - Use Zod schemas
  - Sanitize strings (prevent XSS)
  - Validate types and ranges
- **SQL Injection Protection**: Prisma ORM prevents this (parameterized queries)

### Error Messages
- **Never Expose**:
  - Stack traces in production
  - Database errors to users
  - Internal server details
- **User-Friendly Messages**:
  - "Something went wrong" instead of technical errors
  - Log detailed errors server-side

### Two-Factor Authentication (Future - Phase 9)
- TOTP-based (Time-based One-Time Password)
- QR code setup
- Backup codes
- Required on login after password

### OAuth Security (Future - Phase 9)
- Google/Apple Sign-In
- Verify tokens server-side
- Link accounts securely
- Handle account conflicts

---

## Mobile Requirements

### MVP: Mobile-Responsive Web App

**For initial launch**, app must work well on mobile browsers:

**Responsive Design**:
- Mobile-first CSS approach
- Breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop)
- Touch-friendly buttons (min 44x44px)
- No horizontal scrolling
- Readable font sizes (min 14px on mobile)

**Mobile Navigation**:
- Hamburger menu for small screens
- Bottom navigation bar (optional)
- Swipe gestures (future enhancement)

**Mobile-Optimized Features**:
- Quick "Add Expense" button (floating action button)
- Date picker optimized for touch
- Simplified forms (fewer fields visible at once)
- Card selection as visual grid (color squares)

**Mobile Performance**:
- Fast load times (<3 seconds)
- Minimal JavaScript bundle
- Lazy loading for images/charts

### Future: Native Mobile App (Phase 10+)

**Platform**: React Native (iOS + Android)

**Native Features**:
- **Biometric Authentication**: Face ID, Touch ID, fingerprint
- **Camera Access**: Scan receipts (OCR)
- **Push Notifications**:
  - "You spent $X today"
  - "Budget alert: Over limit on restaurants"
  - "Recurring expense due tomorrow"
- **Offline Mode**:
  - Cache data locally
  - Queue expenses when offline
  - Sync when back online
- **Native Feel**:
  - Native navigation (tab bar, stack navigator)
  - Native date/time pickers
  - Pull-to-refresh
  - Swipe actions (delete, edit)

**Shared Backend**:
- Same API endpoints
- Same authentication (JWT)
- Same data model

**Development Timeline**:
- Start after web app is stable
- Estimated: 2-3 months additional work

---

## Performance Requirements

### API Response Times
- **Dashboard**: <500ms (critical, most viewed)
- **Expense List**: <300ms
- **CRUD Operations**: <200ms
- **AI Analysis**: <5 seconds (acceptable for complex task)
- **Exports**: <10 seconds for 1 year of data

### Database Performance
- **Indexes**: On frequently queried fields
  - userId (all tables)
  - date (expenses)
  - categoryId (expenses)
  - cardId (expenses)
- **Aggregations**: Optimize with proper grouping
- **N+1 Prevention**: Use Prisma includes to load relations

### Caching Strategy
- **Redis Cache**:
  - Dashboard data: 5 min TTL
  - Category list: 1 hour TTL
  - Card list: 1 hour TTL
- **Invalidation**:
  - On expense create/update/delete → invalidate dashboard
  - On category change → invalidate category list
  - On card change → invalidate card list

### Frontend Performance
- **Bundle Size**: <500KB initial load
- **Code Splitting**: Lazy load pages
- **Image Optimization**: WebP format, lazy loading
- **Chart Rendering**: Use canvas instead of SVG for large datasets

### Scalability Targets
- Support 10,000+ expenses per user
- Support 100+ concurrent users (initially)
- Dashboard loads fast even with years of data

---

## Future Features (Version 2)

### Mobile App (React Native)
- Native iOS and Android apps
- Biometric authentication
- Camera for receipt scanning
- Push notifications
- Offline mode with sync
- Pull-to-refresh
- Swipe actions

### Bank API Integration (Plaid)
- Connect bank accounts
- Auto-import transactions
- Auto-categorize based on merchant
- Handle duplicate detection
- Support multiple accounts
- Real-time balance sync

### Receipt OCR
- Upload receipt photo
- Extract merchant, date, amount, items
- Auto-populate expense form
- Store receipt image (linked to expense)
- Search expenses by receipt image

### Investment Tracking
- Add investment accounts
- Track stocks, bonds, ETFs, crypto
- Fetch real-time prices (Yahoo Finance API)
- Calculate portfolio value
- Show investment performance
- Include in net worth calculation

### Multi-User & Household
- Create household/family account
- Invite members
- Shared budgets
- Shared goals
- Permission system (admin, member)
- Split expenses automatically across household
- Activity feed (who added what)

### Voice Input
- Speech-to-text integration
- Natural language: "I spent 50 dollars on groceries"
- Parse and create expense
- Confirm before saving

### Advanced AI Features
- Predict future expenses (machine learning)
- Recommend budget adjustments
- Detect subscription waste
- Tax optimization tips
- Investment recommendations
- Financial goal planning

### Additional Integrations
- Slack notifications (budget alerts)
- WhatsApp summaries
- Google Calendar (bill due dates)
- Zapier webhooks (connect to other apps)
- IFTTT automation

### Advanced Analytics
- Custom date ranges
- Year-over-year comparisons
- Trends and forecasting
- Export to Excel/Google Sheets
- Custom reports builder

---

## Non-Functional Requirements

### Availability
- **Uptime**: 99.5% (allows ~3.5 hours downtime per month)
- **Maintenance Windows**: Scheduled off-peak hours
- **Graceful Degradation**: If AI fails, rest of app still works

### Reliability
- **Data Backup**: Daily automated backups
- **Disaster Recovery**: Can restore within 24 hours
- **Error Logging**: All errors logged to CloudWatch/Sentry

### Usability
- **Intuitive UI**: No tutorial needed
- **Consistent Design**: Follow design system
- **Clear Feedback**: Success/error messages clear
- **Undo Actions**: Allow undo for deletions (soft delete)
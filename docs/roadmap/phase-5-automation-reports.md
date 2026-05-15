# Phase 5: Automation & Reports

**Status**: 🔒 Locked
**Goal**: Weekly emails, PDF/CSV exports, scheduled jobs
**Duration**: 2-3 weeks

## What you'll learn

- Email service integration
- HTML email templates
- PDF generation
- CSV export
- Cron job scheduling
- Chart-to-image conversion
- Template engines

---

## Sub-Phase 5.1: Email Service Setup

### 5.1.1: Email Provider Setup [PR]

- [ ] Choose email provider (SendGrid or Resend)
- [ ] Install SDK (e.g., @sendgrid/mail)
- [ ] Add API key to .env
- [ ] Update env validation in config

### 5.1.2: Email Service [PR]

- [ ] Create services/email.service.ts
- [ ] Implement sendEmail(to, subject, html) method
- [ ] Add error handling
- [ ] Add email validation
- [ ] Unit tests (mock provider SDK)

### 5.1.3: Email Templates [PR]

- [ ] Create templates/email/ directory
- [ ] Create weeklyReport.html template
- [ ] Add CSS for email styling (inline styles)
- [ ] Create template utility to populate data
- [ ] Unit tests for template rendering

### 5.1.4: Test Email Sending

- [ ] Send test email
- [ ] Verify formatting
- [ ] Test with Gmail/Outlook
- [ ] Check spam score

**Checkpoint**: Emails send successfully, templates render correctly

---

## Sub-Phase 5.2: Weekly Summary Report

### 5.2.1: Report Service [PR]

- [ ] Create services/report.service.ts
- [ ] Implement generateWeeklySummary(userId, language):
  - Get week's expenses
  - Calculate totals
  - Get budget status
  - Get AI insights
  - Format data for template
- [ ] Unit tests

### 5.2.2: Chart Image Generation [PR]

- [ ] Install chart-to-image library (or use external service)
- [ ] Implement generatePieChartImage(data)
- [ ] Save to temp directory or upload to S3
- [ ] Include image URL in email
- [ ] Unit tests

### 5.2.3: Weekly Email Content [PR]

- [ ] Populate weekly report template with data
- [ ] Include: total spent, top categories, budget alerts, AI insights, pie chart, dashboard link
- [ ] Support English and Spanish
- [ ] Unit tests for content rendering

### 5.2.4: Weekly Email Cron Job [PR]

- [ ] Create jobs/weeklyEmail.job.ts
- [ ] Schedule for Sunday 5pm (`0 17 * * 0`)
- [ ] For each user with aiEnabled: generate report, send email, log success/failure
- [ ] Register job in server startup
- [ ] Unit tests

### 5.2.5: Manual Trigger Endpoint [PR]

- [ ] Create POST /api/reports/send-weekly (controller + route + validation)
- [ ] Allow user to request email immediately
- [ ] Manual Postman testing
- [ ] Controller unit tests

**Checkpoint**: Weekly emails send automatically, charts embedded, bilingual support

---

## Sub-Phase 5.3: Export Functionality

### 5.3.1: CSV Export [PR]

- [ ] Install csv-writer or similar
- [ ] Create utils/csvExport.ts (exportExpensesToCSV)
- [ ] Add controller + route + validation: GET /api/expenses/export/csv
- [ ] Add query filters (month, year, category)
- [ ] Manual testing
- [ ] Unit tests

### 5.3.2: PDF Export [PR]

- [ ] Install pdfkit or puppeteer
- [ ] Create utils/pdfExport.ts (exportExpensesToPDF)
- [ ] Design PDF layout (header, summary, table, charts, footer)
- [ ] Add controller + route + validation: GET /api/expenses/export/pdf
- [ ] Manual testing
- [ ] Unit tests

### 5.3.3: Export Attachment in Weekly Email [PR]

- [ ] Add checkbox in weekly email settings
- [ ] If enabled, attach PDF to weekly email
- [ ] Unit tests

### 5.3.4: Test Export Features

- [ ] Export expenses to CSV
- [ ] Export to PDF
- [ ] Verify formatting
- [ ] Test with large datasets
- [ ] Test file download in browser

**Checkpoint**: CSV/PDF exports working, attachments in emails optional

---

## Phase 5 Completion Checklist

### Functionality

- [ ] Weekly emails send automatically
- [ ] Emails contain accurate data
- [ ] Charts embedded in emails
- [ ] CSV export works
- [ ] PDF export works
- [ ] Manual email trigger works
- [ ] Bilingual email support

### Code Quality

- [ ] Email templates clean
- [ ] Cron jobs registered properly
- [ ] Export utilities reusable
- [ ] Error handling in place

### Performance

- [ ] Chart generation efficient
- [ ] PDF generation doesn't timeout
- [ ] Cron jobs don't block server

### Security

- [ ] Email API key secured
- [ ] Only user can export their data
- [ ] Rate limiting on exports

# Phase 9: Advanced Features

**Status**: 🔒 Locked
**Goal**: OAuth, 2FA, advanced filtering, performance optimization
**Duration**: 2-3 weeks

## What you'll learn

- OAuth 2.0 flow
- Google/Apple Sign-In
- 2FA with TOTP
- QR code generation
- Advanced search patterns
- Performance optimization

---

## Sub-Phase 9.1: OAuth Integration

### 9.1.1: Google OAuth Provider Setup [PR]

- [ ] Create Google Cloud project
- [ ] Enable Google Sign-In API
- [ ] Get client ID and secret
- [ ] Add to .env

### 9.1.2: Google OAuth Backend [PR]

- [ ] Install passport and passport-google-oauth20
- [ ] Configure passport strategy
- [ ] Create /api/auth/google route
- [ ] Handle OAuth callback
- [ ] Create or login user
- [ ] Return JWT

### 9.1.3: Google Sign-In Frontend [PR]

- [ ] Add Google Sign-In button
- [ ] Redirect to OAuth URL
- [ ] Handle callback
- [ ] Store JWT
- [ ] Navigate to dashboard

### 9.1.4: Apple Sign-In (backend + frontend) [PR]

- [ ] Configure Apple Developer account
- [ ] Create service ID
- [ ] Get credentials
- [ ] Implement similar to Google

### 9.1.5: Test OAuth Flows

- [ ] Sign in with Google
- [ ] Verify account created
- [ ] Sign in with Apple
- [ ] Test account linking

**Checkpoint**: Can sign in with Google and Apple, accounts created/linked

---

## Sub-Phase 9.2: Two-Factor Authentication

### 9.2.1: 2FA Dependencies + Schema [PR]

- [ ] Install speakeasy (TOTP)
- [ ] Install qrcode (QR generation)

### 9.2.2: 2FA Backend (setup, verify, disable) [PR]

- [ ] Add twoFactorSecret field to User model
- [ ] Add twoFactorEnabled boolean
- [ ] Create POST /api/auth/2fa/setup (generate secret, return QR)
- [ ] Create POST /api/auth/2fa/verify (verify code, enable 2FA)
- [ ] Create POST /api/auth/2fa/disable

### 9.2.3: 2FA-aware Login Flow [PR]

- [ ] After password validation, check if 2FA enabled
- [ ] If yes, require 2FA code
- [ ] Verify code before issuing JWT

### 9.2.4: 2FA Frontend (settings + login UI) [PR]

- [ ] Create 2FA setup page in settings
- [ ] Display QR code
- [ ] Input field for verification code
- [ ] Test setup flow
- [ ] Add 2FA code input on login

### 9.2.5: Backup Codes [PR]

- [ ] Generate 10 backup codes on 2FA setup
- [ ] Store hashed in database
- [ ] Display to user (one-time)
- [ ] Allow use of backup code for login

**Checkpoint**: 2FA working, backup codes functional

---

## Sub-Phase 9.3: Advanced Features & Optimization

### 9.3.1: Advanced Filtering [PR]

- [ ] Add full-text search on expense descriptions
- [ ] Add multi-category filter
- [ ] Add amount range filter
- [ ] Add merchant search
- [ ] Add saved filter presets

### 9.3.2: Redis Caching Middleware [PR]

- [ ] Install ioredis
- [ ] Create caching middleware
- [ ] Cache dashboard data (5 min TTL)
- [ ] Cache category list
- [ ] Invalidate on create/update/delete

### 9.3.3: DB Query Optimization (indexes, projections) [PR]

- [ ] Add indexes on frequently queried fields
- [ ] Optimize dashboard aggregations
- [ ] Use SELECT only needed fields
- [ ] Batch queries where possible

### 9.3.4: Rate Limiting on Sensitive Endpoints [PR]

- [ ] Install express-rate-limit
- [ ] Add rate limiting to auth endpoints
- [ ] Add rate limiting to AI endpoints
- [ ] Add rate limiting to export endpoints

### 9.3.5: Performance Testing

- [ ] Load test with many expenses
- [ ] Measure dashboard load time
- [ ] Identify bottlenecks
- [ ] Optimize slow queries

**Checkpoint**: Advanced features working, performance optimized, caching effective

---

## Phase 9 Completion Checklist

### Functionality

- [ ] Google OAuth works
- [ ] Apple OAuth works
- [ ] 2FA setup and login work
- [ ] Backup codes functional
- [ ] Advanced filtering works
- [ ] Search functional

### Performance

- [ ] Caching reduces DB load
- [ ] Dashboard loads <500ms
- [ ] Queries optimized
- [ ] Rate limiting active

### Security

- [ ] OAuth secure
- [ ] 2FA enforced properly
- [ ] Backup codes hashed
- [ ] Rate limits prevent abuse

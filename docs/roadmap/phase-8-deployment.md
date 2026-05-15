# Phase 8: Production Deployment

**Status**: 🔒 Locked
**Goal**: Deploy to AWS with proper infrastructure
**Duration**: 2-3 weeks

## What you'll learn

- AWS services (EC2, RDS, ElastiCache, S3)
- Docker production builds
- Environment management
- Database backups
- Monitoring and logging
- Domain and SSL setup

---

## Sub-Phase 8.1: AWS Infrastructure Setup

### 8.1.1: AWS Account + IAM Setup [PR]

- [ ] Create AWS account
- [ ] Set up billing alerts
- [ ] Create IAM user with appropriate permissions
- [ ] Configure AWS CLI locally

### 8.1.2: RDS PostgreSQL Setup [PR]

- [ ] Create RDS PostgreSQL instance
- [ ] Configure security group
- [ ] Set up database credentials
- [ ] Test connection from local
- [ ] Run Prisma migrations on production DB

### 8.1.3: ElastiCache Redis Setup [PR]

- [ ] Create ElastiCache Redis cluster
- [ ] Configure security group
- [ ] Note connection endpoint
- [ ] Test connection

### 8.1.4: S3 Bucket Setup [PR]

- [ ] Create S3 bucket for file storage
- [ ] Configure bucket policies
- [ ] Set up IAM role for EC2 access
- [ ] Test upload/download

**Checkpoint**: AWS services provisioned, connections verified

---

## Sub-Phase 8.2: Application Deployment

### 8.2.1: Production Dockerfile [PR]

- [ ] Create Dockerfile (multi-stage build)
- [ ] Optimize for production
- [ ] Test build locally
- [ ] Push to Docker Hub or AWS ECR

### 8.2.2: EC2 Instance Setup [PR]

- [ ] Launch EC2 instance (t3.small or similar)
- [ ] Configure security group (allow 80, 443, 22)
- [ ] SSH into instance
- [ ] Install Docker and Docker Compose

### 8.2.3: Backend Deployment [PR]

- [ ] Clone repository on EC2
- [ ] Create production .env
- [ ] Run docker-compose up
- [ ] Verify app running
- [ ] Test health endpoint

### 8.2.4: Nginx Reverse Proxy + SSL [PR]

- [ ] Install Nginx on EC2
- [ ] Configure reverse proxy to app
- [ ] Set up SSL with Let's Encrypt
- [ ] Test HTTPS access

### 8.2.5: Frontend Deployment [PR]

- [ ] Build frontend for production
- [ ] Upload to S3 or serve from EC2
- [ ] Configure with production API URL
- [ ] Test access

**Checkpoint**: App deployed, accessible via HTTPS, frontend connects to backend

---

## Sub-Phase 8.3: Monitoring & Maintenance

### 8.3.1: CloudWatch Logs + Alarms [PR]

- [ ] Configure CloudWatch logs
- [ ] Set up log groups
- [ ] Stream application logs
- [ ] Create alarms (CPU, memory, errors)

### 8.3.2: Database Backups [PR]

- [ ] Configure RDS automated backups
- [ ] Test restore process
- [ ] Document backup procedure

### 8.3.3: CI/CD Auto-Deploy [PR]

- [ ] Add deploy job to GitHub Actions
- [ ] Trigger on merge to main
- [ ] SSH into EC2 and pull latest
- [ ] Restart Docker containers
- [ ] Run migrations if needed

### 8.3.4: Monitoring Dashboard [PR]

- [ ] Set up CloudWatch dashboard
- [ ] Add key metrics (requests, errors, latency)
- [ ] Add database metrics
- [ ] Set up email alerts

### 8.3.5: Document Deployment Process

- [ ] Write deployment README
- [ ] Document environment variables
- [ ] Document rollback procedure
- [ ] Document scaling procedure

**Checkpoint**: App monitored, backups configured, auto-deploy working

---

## Phase 8 Completion Checklist

### Infrastructure

- [ ] AWS services provisioned
- [ ] Database accessible
- [ ] Redis connected
- [ ] S3 configured

### Deployment

- [ ] App deployed and running
- [ ] SSL certificate active
- [ ] Frontend accessible
- [ ] API endpoints work

### Monitoring

- [ ] Logs streaming to CloudWatch
- [ ] Alarms configured
- [ ] Dashboard created
- [ ] Backups automated

### Documentation

- [ ] Deployment process documented
- [ ] Environment variables documented
- [ ] Troubleshooting guide created

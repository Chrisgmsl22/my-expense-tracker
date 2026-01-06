# MoneyFlow - Development Commands

.PHONY: dev dev-be dev-fe build start lint lint-fix format format-check test clean install help services-up services-down db-logs

help:
	@echo "Available commands:"
	@echo "  make install      - Install all dependencies"
	@echo "  make dev          - Start backend (frontend not ready yet)"
	@echo "  make dev-be       - Start backend only"
	@echo "  make dev-fe       - Start frontend only"
	@echo "  make build        - Build for production"
	@echo "  make start        - Run production build"
	@echo "  make lint         - Run ESLint"
	@echo "  make lint-fix     - Run ESLint with auto-fix"
	@echo "  make format       - Format code with Prettier"
	@echo "  make format-check - Check code formatting"
	@echo "  make test         - Run tests"
	@echo "  make clean        - Remove build artifacts"

# Install dependencies
install:
	cd backend && npm install
	@echo "Frontend install skipped (not set up yet)"

# Development - for now just backend
dev: dev-be

dev-be: services-up
	cd backend && npm run dev

dev-fe:
	@echo "Frontend not set up yet"


# Services (only DB for now)
services-up:
	docker-compose up -d
	@echo "PostgreSQL is running on port 5432"
	

services-down:
	docker-compose down
	@echo "PostgreSQL stopped"

db-logs:
	docker-compose logs -f postgres

# Build
build:
	cd backend && npm run build

# Start production
start:
	cd backend && npm run start

# Linting
lint:
	cd backend && npm run lint

lint-fix:
	cd backend && npm run lint:fix

# Formatting
format:
	cd backend && npm run format

format-check:
	cd backend && npm run format:check

# Testing
test:
	cd backend && npm run test

# Clean
clean:
	rm -rf backend/dist
	rm -rf frontend/dist
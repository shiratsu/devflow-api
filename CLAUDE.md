# DevFlow API — Claude Code Instructions

## Project Overview
A REST API for managing developer tasks and sprints. Node.js + Express, no database (in-memory store).

## Architecture
- `src/routes/` — Express route handlers (thin, delegate to services)
- `src/services/` — Business logic
- `src/models/store.js` — In-memory data store (all state lives here)
- `src/middleware/` — Error handling, validation, logging
- `src/utils/` — Shared schemas and error classes
- `tests/` — Jest + supertest

## Coding Standards
- Always use `===` (never `==`)
- Services throw typed errors (`NotFoundError`, `ValidationError`)
- Routes never contain business logic
- All new routes need a corresponding test

## Run Commands
- `npm install` — install deps
- `npm run dev` — start with hot reload
- `npm test` — run test suite
- `npm run lint` — check code style

## Known Issues (good Claude Code practice targets)
- `sprintService.getStats()` has two bugs — find and fix them
- Test coverage for tasks and sprints is incomplete
- No pagination on list endpoints
- No rate limiting middleware

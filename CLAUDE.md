# DevFlow API — Claude Code Instructions

## Project Overview
A REST API for managing developer tasks and sprints. Node.js + Express, no database (in-memory store).

## Architecture
- `src/index.js` — Server entry point (binds port, imports app)
- `src/app.js` — Express app setup (middleware registration, route mounting)
- `src/routes/` — Express route handlers (thin, delegate to services)
- `src/services/` — Business logic
- `src/models/store.js` — In-memory data store (all state lives here)
- `src/middleware/` — Error handling (`errorHandler.js`), validation (`validate.js`), logging (`requestLogger.js`)
- `src/utils/errors.js` — `NotFoundError` and `ValidationError` class definitions
- `src/utils/schemas.js` — Joi validation schemas
- `tests/` — Jest + supertest

## Key Dependencies
- `express` — HTTP framework
- `joi` — Request body validation (used in `src/middleware/validate.js`)
- `uuid` — ID generation for new resources
- `date-fns` — Date utility functions used in sprint services

## API Endpoints
**Server:** `http://localhost:3000` (override with `PORT` env var)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/projects` | List all projects |
| GET | `/api/projects/:id` | Get project by ID |
| POST | `/api/projects` | Create project |
| PATCH | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| GET | `/api/tasks` | List tasks (filter: `projectId`, `status`, `assignee`, `priority`) |
| GET | `/api/tasks/:id` | Get task by ID |
| POST | `/api/tasks` | Create task |
| PATCH | `/api/tasks/:id` | Update task |
| POST | `/api/tasks/:id/assign-sprint` | Assign task to a sprint |
| DELETE | `/api/tasks/:id` | Delete task |
| GET | `/api/sprints` | List sprints (filter: `projectId`) |
| GET | `/api/sprints/:id` | Get sprint by ID |
| GET | `/api/sprints/:id/stats` | Get sprint statistics |
| POST | `/api/sprints` | Create sprint |
| PATCH | `/api/sprints/:id` | Update sprint |

## Coding Standards
- Always use `===` (never `==`)
- Services throw typed errors (`NotFoundError`, `ValidationError`) defined in `src/utils/errors.js`
- Routes never contain business logic
- All new routes need a corresponding test

## Run Commands
- `npm install` — install deps
- `npm start` — start server
- `npm run dev` — start with hot reload (nodemon)
- `npm test` — run test suite with coverage
- `npm run test:watch` — run tests in watch mode
- `npm run lint` — check code style
- `npm run lint:fix` — auto-fix lint issues

## Known Issues (good Claude Code practice targets)
- Test coverage for tasks and sprints is incomplete
- No pagination on list endpoints
- No rate limiting middleware

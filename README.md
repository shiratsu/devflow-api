# DevFlow API

A sprint & task management REST API — built as a Claude Code learning project.

## Quick Start
```bash
npm install
npm run dev
```

## Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/projects | List all projects |
| POST | /api/projects | Create a project |
| GET | /api/tasks | List tasks (filter by ?status=, ?assignee=, ?priority=) |
| POST | /api/tasks | Create a task |
| POST | /api/tasks/:id/assign-sprint | Assign task to sprint |
| GET | /api/sprints/:id/stats | Get sprint progress stats |

## Learning Goals
This project is intentionally set up with:
- Missing tests (write them with Claude Code)
- Known bugs in `sprintService.js` (find & fix them)
- Missing features like pagination, auth, rate limiting (add them)

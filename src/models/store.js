let projects = [
  { id: 'proj-1', name: 'Phoenix Rewrite', status: 'active', createdAt: '2024-01-10T09:00:00Z' },
  { id: 'proj-2', name: 'API Gateway', status: 'active', createdAt: '2024-02-01T09:00:00Z' },
];
let tasks = [
  { id: 'task-1', projectId: 'proj-1', title: 'Set up CI pipeline', status: 'done', priority: 'high', assignee: 'alice', sprintId: 'sprint-1', createdAt: '2024-01-11T09:00:00Z' },
  { id: 'task-2', projectId: 'proj-1', title: 'Design auth flow', status: 'in_progress', priority: 'high', assignee: 'bob', sprintId: 'sprint-1', createdAt: '2024-01-12T09:00:00Z' },
  { id: 'task-3', projectId: 'proj-1', title: 'Write API docs', status: 'todo', priority: 'medium', assignee: null, sprintId: null, createdAt: '2024-01-13T09:00:00Z' },
  { id: 'task-4', projectId: 'proj-2', title: 'Rate limiting middleware', status: 'todo', priority: 'high', assignee: 'alice', sprintId: null, createdAt: '2024-02-02T09:00:00Z' },
  { id: 'task-5', projectId: 'proj-2', title: 'Load balancer config', status: 'todo', priority: 'low', assignee: null, sprintId: null, createdAt: '2024-02-03T09:00:00Z' },
];
let sprints = [
  { id: 'sprint-1', projectId: 'proj-1', name: 'Sprint 1', startDate: '2024-01-15', endDate: '2024-01-29', status: 'active' },
];
module.exports = { projects, tasks, sprints };

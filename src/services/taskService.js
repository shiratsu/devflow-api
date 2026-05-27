const { v4: uuidv4 } = require('uuid');
const store = require('../models/store');
const { NotFoundError } = require('../utils/errors');

const getAll = ({ projectId, status, assignee, priority } = {}) => {
  let tasks = store.tasks;
  if (projectId) tasks = tasks.filter(t => t.projectId === projectId);
  if (status)    tasks = tasks.filter(t => t.status === status);
  if (assignee)  tasks = tasks.filter(t => t.assignee === assignee);
  if (priority)  tasks = tasks.filter(t => t.priority === priority);
  return tasks;
};
const getById = (id) => {
  const t = store.tasks.find(t => t.id === id);
  if (!t) throw new NotFoundError(`Task ${id} not found`);
  return t;
};
const create = ({ projectId, title, priority = 'medium', assignee = null, sprintId = null }) => {
  const task = { id: uuidv4(), projectId, title, status: 'todo', priority, assignee, sprintId, createdAt: new Date().toISOString() };
  store.tasks.push(task);
  return task;
};
const update = (id, updates) => { const t = getById(id); Object.assign(t, updates); return t; };
const assignToSprint = (id, sprintId) => { const t = getById(id); t.sprintId = sprintId; return t; };
const remove = (id) => {
  const idx = store.tasks.findIndex(t => t.id === id);
  if (idx === -1) throw new NotFoundError(`Task ${id} not found`);
  store.tasks.splice(idx, 1);
};
module.exports = { getAll, getById, create, update, assignToSprint, remove };

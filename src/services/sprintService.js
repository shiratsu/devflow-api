const { v4: uuidv4 } = require('uuid');
const store = require('../models/store');
const { NotFoundError } = require('../utils/errors');

const getAll = ({ projectId } = {}) => {
  let sprints = store.sprints;
  if (projectId) sprints = sprints.filter(s => s.projectId === projectId);
  return sprints;
};
const getById = (id) => {
  const s = store.sprints.find(s => s.id === id);
  if (!s) throw new NotFoundError(`Sprint ${id} not found`);
  return s;
};
// BUG: intentionally broken — good Claude Code debugging practice
const getStats = (id) => {
  const sprint = getById(id);
  const tasks = store.tasks.filter(t => t.sprintId === id);
  return {
    sprintId: id,
    sprintName: sprint.name,
    total: tasks.length,
    done: tasks.filter(t => t.status === 'done').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    todo: tasks.filter(t => t.status === 'todo').length,
    completionRate: tasks.length ? tasks.filter(t => t.status === 'done').length / tasks.length : 0,
    velocity: tasks.filter(t => t.status === 'done').length,
  };
};
const create = ({ projectId, name, startDate, endDate }) => {
  const sprint = { id: uuidv4(), projectId, name, startDate, endDate, status: 'planning' };
  store.sprints.push(sprint);
  return sprint;
};
const update = (id, updates) => { const s = getById(id); Object.assign(s, updates); return s; };
module.exports = { getAll, getById, getStats, create, update };

const { v4: uuidv4 } = require('uuid');
const store = require('../models/store');
const { NotFoundError } = require('../utils/errors');

const getAll = () => store.projects;
const getById = (id) => {
  const p = store.projects.find(p => p.id === id);
  if (!p) throw new NotFoundError(`Project ${id} not found`);
  return p;
};
const create = ({ name, status = 'active' }) => {
  const project = { id: uuidv4(), name, status, createdAt: new Date().toISOString() };
  store.projects.push(project);
  return project;
};
const update = (id, updates) => { const p = getById(id); Object.assign(p, updates); return p; };
const remove = (id) => {
  const idx = store.projects.findIndex(p => p.id === id);
  if (idx === -1) throw new NotFoundError(`Project ${id} not found`);
  store.projects.splice(idx, 1);
};
module.exports = { getAll, getById, create, update, remove };

const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');
const { validate } = require('../middleware/validate');
const { taskSchema } = require('../utils/schemas');

router.get('/', (req, res) => {
  const { projectId, status, assignee, priority } = req.query;
  const tasks = taskService.getAll({ projectId, status, assignee, priority });
  res.json({ data: tasks, count: tasks.length });
});
router.get('/:id', (req, res, next) => {
  try { res.json({ data: taskService.getById(req.params.id) }); }
  catch (err) { next(err); }
});
router.post('/', validate(taskSchema), (req, res, next) => {
  try { res.status(201).json({ data: taskService.create(req.body) }); }
  catch (err) { next(err); }
});
router.patch('/:id', (req, res, next) => {
  try { res.json({ data: taskService.update(req.params.id, req.body) }); }
  catch (err) { next(err); }
});
router.post('/:id/assign-sprint', (req, res, next) => {
  try { res.json({ data: taskService.assignToSprint(req.params.id, req.body.sprintId) }); }
  catch (err) { next(err); }
});
router.delete('/:id', (req, res, next) => {
  try { taskService.remove(req.params.id); res.status(204).send(); }
  catch (err) { next(err); }
});
module.exports = router;

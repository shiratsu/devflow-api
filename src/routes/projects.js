const express = require('express');
const router = express.Router();
const projectService = require('../services/projectService');
const { validate } = require('../middleware/validate');
const { projectSchema } = require('../utils/schemas');

router.get('/', (req, res) => {
  const projects = projectService.getAll();
  res.json({ data: projects, count: projects.length });
});
router.get('/:id', (req, res, next) => {
  try { res.json({ data: projectService.getById(req.params.id) }); }
  catch (err) { next(err); }
});
router.post('/', validate(projectSchema), (req, res, next) => {
  try { res.status(201).json({ data: projectService.create(req.body) }); }
  catch (err) { next(err); }
});
router.patch('/:id', (req, res, next) => {
  try { res.json({ data: projectService.update(req.params.id, req.body) }); }
  catch (err) { next(err); }
});
router.delete('/:id', (req, res, next) => {
  try { projectService.remove(req.params.id); res.status(204).send(); }
  catch (err) { next(err); }
});
module.exports = router;

const express = require('express');
const router = express.Router();
const sprintService = require('../services/sprintService');

router.get('/', (req, res) => {
  const { projectId } = req.query;
  const sprints = sprintService.getAll({ projectId });
  res.json({ data: sprints, count: sprints.length });
});
router.get('/:id', (req, res, next) => {
  try { res.json({ data: sprintService.getById(req.params.id) }); }
  catch (err) { next(err); }
});
router.get('/:id/stats', (req, res, next) => {
  try { res.json({ data: sprintService.getStats(req.params.id) }); }
  catch (err) { next(err); }
});
router.post('/', (req, res, next) => {
  try { res.status(201).json({ data: sprintService.create(req.body) }); }
  catch (err) { next(err); }
});
router.patch('/:id', (req, res, next) => {
  try { res.json({ data: sprintService.update(req.params.id, req.body) }); }
  catch (err) { next(err); }
});
module.exports = router;

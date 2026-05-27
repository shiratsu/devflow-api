const Joi = require('joi');
const projectSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  status: Joi.string().valid('active', 'archived').default('active'),
});
const taskSchema = Joi.object({
  projectId: Joi.string().required(),
  title: Joi.string().min(2).max(200).required(),
  priority: Joi.string().valid('low', 'medium', 'high').default('medium'),
  assignee: Joi.string().optional().allow(null),
  sprintId: Joi.string().optional().allow(null),
});
module.exports = { projectSchema, taskSchema };

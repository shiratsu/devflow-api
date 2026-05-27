const { NotFoundError, ValidationError } = require('../utils/errors');
const errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) return res.status(404).json({ error: err.message });
  if (err instanceof ValidationError) return res.status(400).json({ error: err.message, details: err.details });
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
};
module.exports = { errorHandler };

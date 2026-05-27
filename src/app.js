const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const { requestLogger } = require('./middleware/requestLogger');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
const sprintRoutes = require('./routes/sprints');

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get('/health', (req, res) => res.json({ status: 'ok', version: '1.0.0' }));

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/sprints', sprintRoutes);

app.use(errorHandler);

module.exports = app;

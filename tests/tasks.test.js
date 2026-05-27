const request = require('supertest');
const app = require('../src/app');

describe('Tasks API', () => {
  it('GET /api/tasks returns all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(res.body.count).toBeGreaterThan(0);
  });
  it('GET /api/tasks?status=todo filters by status', async () => {
    const res = await request(app).get('/api/tasks?status=todo');
    expect(res.status).toBe(200);
    res.body.data.forEach(t => expect(t.status).toBe('todo'));
  });
  // TODO: tests for create, update, assign-sprint are missing
});

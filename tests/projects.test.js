const request = require('supertest');
const app = require('../src/app');

describe('Projects API', () => {
  it('GET /api/projects returns list', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });
  it('POST /api/projects creates a project', async () => {
    const res = await request(app).post('/api/projects').send({ name: 'Test Project' });
    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Test Project');
  });
  it('GET /api/projects/:id returns 404 for missing project', async () => {
    const res = await request(app).get('/api/projects/nonexistent');
    expect(res.status).toBe(404);
  });
  // TODO: add tests for PATCH and DELETE
});

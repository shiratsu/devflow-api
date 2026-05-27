const request = require('supertest');
const app = require('../src/app');

describe('Sprints API', () => {
  it('GET /api/sprints returns list', async () => {
    const res = await request(app).get('/api/sprints');
    expect(res.status).toBe(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });

  it('GET /api/sprints?projectId filters by project', async () => {
    const res = await request(app).get('/api/sprints?projectId=proj-1');
    expect(res.status).toBe(200);
    res.body.data.forEach(s => expect(s.projectId).toBe('proj-1'));
  });

  it('GET /api/sprints/:id returns a sprint', async () => {
    const res = await request(app).get('/api/sprints/sprint-1');
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe('sprint-1');
  });

  it('GET /api/sprints/:id returns 404 for missing sprint', async () => {
    const res = await request(app).get('/api/sprints/nonexistent');
    expect(res.status).toBe(404);
  });

  it('GET /api/sprints/:id/stats returns stats', async () => {
    const res = await request(app).get('/api/sprints/sprint-1/stats');
    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({
      sprintId: 'sprint-1',
      total: expect.any(Number),
      done: expect.any(Number),
      completionRate: expect.any(Number),
    });
  });

  it('POST /api/sprints creates a sprint', async () => {
    const res = await request(app).post('/api/sprints').send({
      projectId: 'proj-1',
      name: 'Sprint 2',
      startDate: '2024-02-01',
      endDate: '2024-02-15',
    });
    expect(res.status).toBe(201);
    expect(res.body.data.name).toBe('Sprint 2');
  });

  it('PATCH /api/sprints/:id updates a sprint', async () => {
    const res = await request(app).patch('/api/sprints/sprint-1').send({ name: 'Sprint 1 Updated' });
    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe('Sprint 1 Updated');
  });

  it('PATCH /api/sprints/:id returns 404 for missing sprint', async () => {
    const res = await request(app).patch('/api/sprints/nonexistent').send({ name: 'X' });
    expect(res.status).toBe(404);
  });
});

import request from 'supertest';
import app from '../index'; // Убедитесь, что вы экспортируете экземпляр app в вашем основном файле сервера

describe('GET /api/rates/:table', () => {
  it('responds with JSON for table A', async () => {
    const response = await request(app).get('/api/rates/A');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toBeInstanceOf(Object);
  });

  // Добавьте дополнительные тесты для других случаев...
});

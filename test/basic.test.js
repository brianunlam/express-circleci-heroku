const request = require('supertest');
const { exec } = require('child-process-promise');
const app = require('../app');
const models = require('../db/models');


describe('Test the root path', () => {
  beforeAll(async () => {
    await models.sync;
    // const result = await models.User.destroy({ where: {} });
    const spawnResult = await exec('NODE_ENV=test npm run dbSeed');
    return spawnResult;
  });

  test('It should response the GET method pr', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
  test('It should response the GET method pr', async () => {
    const response = await request(app).get('/api');
    console.log(response.body);
    expect(response.body.users[0].username).toBe('Brian');
  });
});

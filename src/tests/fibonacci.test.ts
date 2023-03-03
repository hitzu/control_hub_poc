const supertest = require('supertest');
import { describe, expect, test } from '@jest/globals';

describe('login module', () => {

  test('POST /fibonacci/value', async () => {
    const app = require('../../app');

    const res = await supertest(app)
      .post('/fibonacci/value')
      .send({ index: 6 });
    
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('value');
  });

});

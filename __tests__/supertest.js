const fs = require('fs');
const path = require('path');
const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route Testing', () => {
  describe('/api', () => {
    describe('POST', () => {
      it('Should return status 200 and an object', () => {
        request(server)
          .post('/api')
          .send({ query: 'legendary', pageNum: 1 })
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
});

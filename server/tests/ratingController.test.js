const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const models = require('../../database/schemas.js');
const db = require('../../database/database');

const expect = chai.expect;

describe('Ratings Controller', () => {
  describe('api/users/:id/ratings', () => {
    xit('should respond with a statusCode of 200', (done) => {
      request(app)
        .get('/api/users')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
});

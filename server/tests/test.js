var app = require('../server');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('/testing', () => {
  it('should respond with 200', (done) => {
    request(app)
      .get('/testing')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      })
  })
})

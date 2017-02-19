const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const db = require('../../database/schemas.js');

const expect = chai.expect;
describe('Begin', () => {
  afterEach((done) => {
      // Log out currently signed in user
    db.User.destroy({
      where: {
      },
    })
    .then(() => {
      done();
    });
  });

  describe('User Creation', () => {
    it('should respond with a statusCode of 200 for /users/api', (done) => {
      request(app)
        .post('/api/users')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('should store a new user in the User table', (done) => {
      const data = {
        name: 'Cory Wolnewitz',
        email: 'cwol@bigusdickus.com',
        address: '1337 Cocksure Ln',
        city: 'Jupiter',
        state: 'FL',
        zip: '70542',
        country: 'Murica',
      };
      request(app)
        .post('/api/users')
        .send(data)
        .end((err, res) => {
          expect(res.body.email).to.equal(data.email);
          done();
        });
    });
  });
});

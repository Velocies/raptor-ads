const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const models = require('../../database/schemas.js');
const db = require('../../database/database');

const expect = chai.expect;

describe('Ratings Controller', () => {
  beforeEach(() => db.database.sync({ force: true }));

  describe('api/users/:id/ratings', () => {
    it('should respond with a statusCode of 200', () => {
      models.User.create({
        first_name: 'Cory',
        last_name: 'Wolnewitz',
        password: 'trololol',
        email: 'cwol@gmail.com',
        address: '1337 Sure Ln',
        city: 'Jupiter',
        state: 'FL',
        zip: '70542',
        country: 'Murica',
      })
        .then(user => {
          models.Rating.create({
            stars: '5',
            body: 'awesome work',
            user: user.dataValues,
          }, { include: [models.User] })
            .then((rating) => {
              request(app)
                .get(`/api/users/${user.dataValues.id}/ratings`)
                .end((err, res) => {
                  console.log('here in end', res);
                  expect(res.statusCode).to.equal(200);
                });
            });
        });
    });
  });
});

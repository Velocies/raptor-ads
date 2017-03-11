const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const models = require('../../database/schemas.js');
const db = require('../../database/database');

const expect = chai.expect;
describe('Begin', () => {
  beforeEach(() => db.database.sync({ force: true }).then());

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
        firstName: 'Cory Wolnewitz',
        lastName: 'Wolnewitz',
        password: 'trololol',
        email: 'cwol@gmail.com',
        address: '1337 Sure Ln',
        city: 'Jupiter',
        state: 'FL',
        zip: '70542',
        country: 'Murica',
      };

      request(app)
        .post('/api/users')
        .send(data)
        .end((err, res) => {
          expect(res.body.user.email).to.equal(data.email);
          done();
        });
    });
  });

  describe('User Patching', () => {
    it('should properly update an existing user with a new email', (done) => {
      const data = {
        firstName: 'Cory Wolnewitz',
        lastName: 'Wolnewitz',
        password: 'trololol',
        email: 'cwol@gmail.com',
        address: '1337 Sure Ln',
        city: 'Jupiter',
        state: 'FL',
        zip: '70542',
        country: 'Murica',
      };

      request(app) // create the user
        .post('/api/users')
        .send(data)
        .end((err, res) => {
          request(app) // patch the user with a new email
            .patch(`/api/users/${res.body.user.id}`)
            .send({ email: 'cwol29@tinydude.com' })
            .end(() => {
              models.User.findOne({ where: { id: res.body.user.id } })
                .then((user) => {
                  expect(user.email).to.equal('cwol29@tinydude.com');
                  done();
                });
            });
        });
    });
  });

  describe('User Retrieval', () => {
    it('should be able to retrieve all users from the database', (done) => {
      const data = {
        firstName: 'Cory Wolnewitz',
        lastName: 'Wolnewitz',
        password: 'trololol',
        email: 'cwol@gmail.com',
        address: '1337 Sure Ln',
        city: 'Jupiter',
        state: 'FL',
        zip: '70542',
        country: 'Murica',
      };
      const data2 = {
        firstName: 'Jimmie',
        lastName: 'Gisclair',
        password: 'trololol',
        email: 'jimmehsemail@herpderp.yolo',
        address: '2257 meow meow lane',
        city: 'Shoop',
        state: 'LA',
        zip: '70029',
        country: 'Murica',
      };

      request(app).post('/api/users').send(data)
        .end(() => {
          request(app).post('/api/users').send(data2)
            .end(() => {
              request(app).get('/api/users')
                .end((err, res) => {
                  expect(res.body.length).to.equal(2);
                  done();
                });
            });
        });
    });

    it('should be able to retrieve a single user from the database by id', (done) => {
      const data = {
        firstName: 'Cory Wolnewitz',
        lastName: 'Wolnewitz',
        password: 'trololol',
        email: 'cwol@gmail.com',
        address: '1337 Sure Ln',
        city: 'Jupiter',
        state: 'FL',
        zip: '70542',
        country: 'Murica',
      };

      request(app).post('/api/users').send(data)
        .end((err, res) => {
          request(app).get(`/api/users/${res.body.user.id}`)
            .end((err2, res2) => {
              expect(res2.body.id).to.equal(res.body.user.id);
              done();
            });
        });
    });

    it('should send failure message to client when the given user doesnt exist', (done) => {
      request(app).get('/api/users/1243')
        .end((err, res) => {
          expect(res.text).to.equal('User not found!');
          done();
        });
    });
  });
});

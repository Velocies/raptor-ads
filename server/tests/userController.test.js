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

  describe('User Deletion', () => {
    it('should delete a user from the database', (done) => {
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
        .end((postErr, postRes) => {
          request(app)
            .delete(`/api/users/${postRes.body.id}`)
            .end(() => {
              db.User.findOne({ where: { email: data.email } })
              .then((user) => {
                expect(user).to.equal(null);
                done();
              });
            });
        });
    });

    it('should delete the correct user from the database', (done) => {
      const data = {
        name: 'Cory Wolnewitz',
        email: 'cwol@bigusdickus.com',
        address: '1337 Cocksure Ln',
        city: 'Jupiter',
        state: 'FL',
        zip: '70542',
        country: 'Murica',
      };

      const data2 = {
        name: 'Jimmie Gisclair',
        email: 'jimmehsemail@herpderp.yolo',
        address: '2257 meow meow lane',
        city: 'Shoop',
        state: 'LA',
        zip: '70029',
        country: 'Murica',
      };
      let existingUser;
      let deletedUser;

      request(app)
        .post('/api/users')
        .send(data)
        .end(() => {
          request(app)
          .post('/api/users')
          .send(data2)
          .end((err, res) => {
            request(app)
              .delete(`/api/users/${res.body.id}`)
              .end(() => {
                db.User.findOne({ where: { id: res.body.id } })
                  .then((user) => {
                    deletedUser = user;

                    db.User.findOne({ where: { email: data.email } })
                      .then((result) => {
                        existingUser = result;

                        expect(existingUser).to.not.equal(null);
                        expect(deletedUser).to.equal(null);
                        done();
                      });
                  });
              });
          });
        });
    });
  });

  describe('User Patching', () => {

  });

  describe('User Retrieval', () => {

  });
});

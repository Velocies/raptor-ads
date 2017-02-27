const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const models = require('../../database/schemas.js');
const db = require('../../database/database');

const expect = chai.expect;
let result = null;

describe('Begin', () => {
  beforeEach((done) => {
    db.database.sync({ force: true })
      .then(() => {
        done();
      });
  });

  describe('Listing Creation', () => {
    it('should properly create a new Post in the database', (done) => {
      const data = {
        firstName: 'Cory Wolnewitz',
        lastName: 'Wolnewitz',
        password: 'trololol',
        email: 'cwol@something.com',
        address: '1337 sure Ln',
        city: 'Jupiter',
        state: 'FL',
        zip: '70542',
        country: 'Murica',
      };
      const post = {
        body: 'This is a generic message body describing a job listing',
        tags: 'computer_repair, computer, need_fix',
        title: 'My Job Listing',
        type: 'Computer Repair',
      };

      models.User.create(data)
      .then((user) => {
        request(app).post(`/api/users/${user.dataValues.id}/listings`).send(post)
        .end((err, res) => {
          result = res;
          expect(res.body.body).to.equal('This is a generic message body describing a job listing');
          done();
        });
      });
    });

    it('should have a title property', (done) => {
      expect(result.body.title).to.exist;
      done();
    });

    it('should have a type property', (done) => {
      expect(result.body.type).to.exist;
      done();
    });

  });

  xdescribe('Listing Retrieving', () => {

  });

  xdescribe('Listing Deletion', () => {

  });

  xdescribe('Listing Updating', () => {

  });

  xdescribe('Listing Creation', () => {

  });

  xdescribe('Listing Creation', () => {

  });
});

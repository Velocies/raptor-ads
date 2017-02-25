const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const db = require('../../database/schemas.js');

const expect = chai.expect;
let result = null;

describe('Begin', () => {
  afterEach((done) => {
    // Destroy any users in the database after every 'it' block
    db.Post.destroy({
      where: {
      },
    })
    .then(() => {
      // Destroy all listings in the database after every 'it' block
      db.User.destroy({
        where: {
        },
      });
      done();
    });
  });

  describe('Listing Creation', () => {
    it('should properly create a new Post in the database', (done) => {
      const data = {
        firstName: 'Cory Wolnewitz',
        lastName: 'Wolnewitz',
        password: 'trololol',
        email: 'cwol@bigusdickus.com',
        address: '1337 Cocksure Ln',
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

      db.User.create(data)
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
      console.log('result', result)
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

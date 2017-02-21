const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const db = require('../../database/schemas.js');

describe('Begin', () => {
  afterEach((done) => {
    // Destroy any users in the database after every 'it' block
    db.User.destroy({
      where: {
      },
    })
    .then(() => {
      // Destroy all listings in the database after every 'it' block
      db.Post.destroy({
        where: {
        },
      });
      done();
    });
  });

  xdescribe('Listing Creation', () => {

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

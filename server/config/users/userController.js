const db = require('../../database/schemas.js');

module.exports = {
  getOne: (req, res) => {

  },

  getAll: (req, res) => {
    db.User.findAll({})
    .then((users) => {
      res.send(users);
    });
  },

  createOne: (req, res) => {

  },

  patchOne: (req, res) => {

  },

  deleteOne: (req, res) => {

  },
};
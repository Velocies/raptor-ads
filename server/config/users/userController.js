const db = require('../../../database/schemas.js');

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
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      if (!user) {
        db.User.create(req.body)
        .then((createdUser)=>{
          res.send(createdUser);
        });
      } else {
        res.send('User already exists!');
      }
    });
  },

  patchOne: (req, res) => {

  },

  deleteOne: (req, res) => {

  },
};
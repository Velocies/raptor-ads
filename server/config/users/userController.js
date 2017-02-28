const db = require('../../../database/schemas.js');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

module.exports = {
  getOne: (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(400).send('User not found!');
      }
    });
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
        email: req.body.email,
      },
    })
    .then((user) => {
      if (!user) {
        const salt = bcrypt.genSaltSync(10);
        const passwordToSave = bcrypt.hashSync(req.body.password, salt);

        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: passwordToSave,
          email: req.body.email,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          country: req.body.country,
          role: req.body.role,

        })
        .then((createdUser) => {
          const token = jwt.sign({
            email: createdUser.email,
            firstName: createdUser.firstName,
            id: createdUser.id,
          }, 'bobbyisbadatstarcraft', { expiresIn: '1h' });

          res.json({ token, user: createdUser });
        });
      } else {
        res.send({ error: 'User already exists!' });
      }
    });
  },

  patchOne: (req, res) => {
    db.User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((status) => {
      res.send(status);
    });
  },

  deleteOne: (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((status) => {
      if (status === 1) {
        res.send('User deleted!');
      } else {
        res.send('User did not exist');
      }
    });
  },
};

const db = require('../../../database/schemas.js');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

module.exports = {
  logIn: (req, res) => {
    db.User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({
              email: user.email,
              first_name: user.first_name,
              id: user.id,
            }, 'bobbyisbadatstarcraft', { expiresIn: '1h' });
            res.send({ user, token });
          } else {
            res.send({ error: 'Incorrect password' });
          }
        } else {
          res.send({ error: 'No account found with that email' });
        }
      });
  },

  getUserFromToken: (req, res) => {
    const token = req.params.token;
    jwt.verify(token, 'bobbyisbadatstarcraft', (err, decoded) => {
      if (err || !decoded) {
        res.status(400).send('Bad Token');
      } else {
        db.User.findOne({ where: { id: decoded.id } })
          .then((user) => {
            res.json(user);
          });
      }
    });
  },
};

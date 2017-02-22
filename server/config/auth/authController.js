const db = require('../../../database/schemas.js');
const bcrypt = require('bcrypt-nodejs');


module.exports = {
  logIn: (req, res) => {
    db.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send(user);
        } else {
          res.send({ error: 'Incorrect password' });
        }
      } else {
        res.send({ error: 'No account found with that email' });
      }
    });
  },

  logOut: (req, res) => {
    // TODO: logout currently logged in user
  },
};

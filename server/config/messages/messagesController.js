const models = require('../../../database/schemas.js');

module.exports = {
  getAllForUser: (req, res) => {
    models.User.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((user) => {
        user.getMessages({
          include: [
            { model: models.User, as: 'sender' },
            { model: models.Post },
          ],
        })
          .then((messages) => {
            res.json(messages);
          });
      });
  },

  createMessage: (req, res) => {
    res.send(200);
  },
};

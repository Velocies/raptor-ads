const models = require('../../../database/schemas.js');

module.exports = {
  getAllForUser: (req, res) => {
    const userId = req.params.id;
    models.Rating.findAll({
      where: {
        userId,
      },
      include: [
        { model: models.User },
        { model: models.User, as: 'rater' },
      ],
    })
      .then((ratings) => {
        res.json(ratings);
      });
  },

  createRating: (req, res) => {
    const {
      userId,
      body,
      raterId,
      stars,
    } = req.body;

    models.Rating.create({
      userId,
      body,
      raterId,
      stars,
    })
      .then((rating) => {
        res.json(rating);
      });
  },
};

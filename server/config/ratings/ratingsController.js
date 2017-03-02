const models = require('../../../database/schemas.js');

module.exports = {
  getAllForUser: (req, res) => {
    const userId = req.params.id;
    models.User.findAll({
      where: {
        id: userId,
      },
      include: [
        {
          model: models.Rating,
          include: [{ model: models.User, as: 'rater' }],
        },
        { model: models.Business },
      ],
    })
      .then((ratings) => {
        res.json(ratings);
      });
  },

  createRating: (req, res) => {
    models.Rating.create(req.body)
      .then((rating) => {
        res.json(rating);
      });
  },
};

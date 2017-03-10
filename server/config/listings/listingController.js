const models = require('../../../database/schemas.js');

module.exports = {
  getOne: (req, res) => {
    models.Post.findOne({
      where: {
        id: req.params.listId,
        isDeleted: false,
      },
      include: [
        models.Picture,
        {
          model: models.User,
          include: [{
            model: models.Rating,
            include: [{ model: models.User, as: 'rater' }],
          }],
        },
      ],
    })
      .then((listing) => {
        res.send(listing);
      });
  },

  getAll: (err, res) => {
    models.Post.findAll({
      where: {
        isDeleted: false,
      },
      include: [{ model: models.Picture }],
    })
      .then((posts) => {
        res.send(posts);
      });
  },

  getAllForUser: (req, res) => {
    models.User.find({
      where: { id: req.params.id, isDeleted: false },
    })
      .then((user) => {
        user.getPosts({
          include: [{ model: models.Picture }],
        })
          .then((posts) => {
            res.json(posts);
          });
      });
  },

  createOne: (req, res) => {
    models.User.find({ where: { id: req.params.id } })
      .then((user) => {
        const newPost = {
          title: req.body.title,
          body: req.body.body,
          type: req.body.type,
          pictures: req.body.images,
          userId: user.id,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          isDeleted: false,
        };
        models.Post.create(newPost, { include: [models.Picture] })
          .then((post) => {
            res.json(post);
          });
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
  },

  patchOne: (req, res) => {
    models.Post.update(req.body, {
      where: {
        id: req.params.listId,
      },
    })
      .then((status) => {
        res.send(status);
      });
  },

  deleteOne: (req, res) => {
    models.Post.update({ isDeleted: true }, {
      where: {
        id: req.params.listId,
        isDeleted: false,
      },
    })
      .then((status) => {
        if (status === 1) {
          res.send('listing deleted!');
        } else {
          res.send('listing wasn\'t found');
        }
      });
  },

  getAllPhotos: (req, res) => {
    models.Picture.findAll({
      where: {
        post_id: req.params.listId,
      },
    })
      .then((photos) => {
        res.send(photos);
      });
  },

  createOnePhoto: (req, res) => {
    models.Picture.create({
      img_name: req.body.img_name,
      img_path: req.body.img_path,
      post_id: req.params.listId,
    })
      .then((photoData) => {
        res.send(photoData);
      });
  },

  patchOnePhoto: (req, res) => {
    models.Picture.update(
      {
        img_name: req.body.img_name,
        img_path: req.body.img_path,
      },
      {
        where: {
          id: req.params.id,
        },
      })
      .then((status) => {
        res.send(status);
      });
  },

  deleteOnePhoto: (req, res) => {
    models.Picture.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((status) => {
        if (status === 1) {
          res.send('photo deleted!');
        } else {
          res.send('photo wasn\'t found');
        }
      });
  },
};

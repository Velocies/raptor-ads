const db = require('../../../database/schemas.js');

module.exports = {
  getOne: (req, res) => {
    db.Post.findOne({
      where: {
        id: req.params.listId,
      },
    })
      .then((listing) => {
        res.send(listing);
      });
  },

  getAll: (err, res) => {
    db.Post.findAll({})
      .then((posts) => {
        res.send(posts);
      });
  },

  getAllForUser: (req, res) => {
    db.User.find({ where: {id: req.params.id} })
      .then((user) => {
        user.getPosts({}).then((posts) => {
          res.json(posts);
        });
      });
  },

  createOne: (req, res) => {
    db.User.find({ where: { id: req.params.id } })
      .then((user) => {
        const newPost = {
          title: req.body.title,
          body: req.body.body,
          type: req.body.type,
          pictures: req.body.images,
          userId: user.id,
        };
        db.Post.create(newPost, { include: [db.Picture] })
          .then((post) => {
            res.json(post);
          });
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
  },

  patchOne: (req, res) => {
    db.Post.update(req.body, {
      where: {
        id: req.params.listId,
      },
    })
      .then((status) => {
        res.send(status);
      });
  },

  deleteOne: (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.listId,
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
    db.Picture.findAll({
      where: {
        post_id: req.params.listId,
      },
    })
      .then((photos) => {
        res.send(photos);
      });
  },

  createOnePhoto: (req, res) => {
    db.Picture.create({
      img_name: req.body.img_name,
      img_path: req.body.img_path,
      post_id: req.params.listId,
    })
      .then((photoData) => {
        res.send(photoData);
      });
  },

  patchOnePhoto: (req, res) => {
    db.Picture.update(
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
    db.Picture.destroy({
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

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

  getAll: (req, res) => {
    db.Post.findAll({})
    .then((listings) => {
      res.send(listings);
    });
  },

  createOne: (req, res) => {
    db.Post.create({
      body: req.body.body,
      tags: req.body.tags,
      user_id: req.params.id,
    })
    .then((listing) => {
      res.send(listing);
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

  },
};

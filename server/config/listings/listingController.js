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

  },

  createOnePhoto: (req, res) => {

  },

  patchOnePhoto: (req, res) => {

  },

  deleteOnePhoto: (req, res) => {

  },
};

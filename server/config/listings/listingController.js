const db = require('../../../database/schemas.js');

module.exports = {
  getOne: (req, res) => {

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

  },

  deleteOne: (req, res) => {

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

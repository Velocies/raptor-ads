var userController = require('../users/userController.js');
var listingController = require('../listings/listingController.js');

module.exports = (app, db) => {

  // Routes for all users
  app.get('/api/users', userController.getAll);
  app.post('/api/users', userController.createOne);

  // Routes for specific user
  app.get('api/users/:id', userController.getOne);
  app.patch('api/users/:id', userController.patchOne);
  app.delete('api/users/:id', userController.deleteOne);

  // Routes for all listings belonging to a specific user
  app.get('api/users/:id/listings', listingController.getAll);
  app.post('api/users/:id/listings', listingController.createOne);

  // Routes for a specific listing
  app.get('api/listings/:listId', listingController.getOne);
  app.patch('api/listings/:listId', listingController.patchOne);
  app.delete('api/listings/:listId', listingController.deleteOne);

  // Routes for a specific listing's photos
  app.get('api/listings/:listId/photos', listingController.getAllPhotos);
  app.post('api/listings/:listId/photos', listingController.createOnePhoto);

  // Routes for a specific listing's specific photo
  app.patch('api/listings/:listId/photos/:id', listingController.patchOnePhoto);
  app.delete('api/listings/:listId/photos/:id', listingController.deleteOnePhoto);

}
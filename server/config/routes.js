const userController = require('./users/userController.js');
const listingController = require('./listings/listingController.js');
const authController = require('./auth/authController.js');
const ratingsController = require('./ratings/ratingsController.js');

module.exports = (app, db, path, rootPath) => {
  // Route for logging in
  app.post('/api/login', authController.logIn);
  app.get('/api/token/:token', authController.getUserFromToken);

  // Routes for all users
  app.get('/api/users', userController.getAll);
  app.post('/api/users', userController.createOne);

  // Routes for specific user
  app.get('/api/users/:id', userController.getOne);
  app.patch('/api/users/:id', userController.patchOne);
  app.delete('/api/users/:id', userController.deleteOne);


  // Routes for all listings belonging to a specific user
  app.get('/api/users/:id/listings', listingController.getAllForUser);
  app.post('/api/users/:id/listings', listingController.createOne);

  // Route to get all listings regardless of user
  app.get('/api/listings', listingController.getAll);

  // Routes for a specific listing
  app.get('/api/listings/:listId', listingController.getOne);
  app.patch('/api/listings/:listId', listingController.patchOne);
  app.delete('/api/listings/:listId', listingController.deleteOne);

  // Routes for a specific listing's photos
  app.get('/api/listings/:listId/photos', listingController.getAllPhotos);
  app.post('/api/listings/:listId/photos', listingController.createOnePhoto);

  // Routes for a specific listing's specific photo
  app.patch('/api/listings/:listId/photos/:id', listingController.patchOnePhoto);
  app.delete('/api/listings/:listId/photos/:id', listingController.deleteOnePhoto);


  // Routes for ratings
  app.get('/api/users/:id/ratings', ratingsController.getAllForUser);
  app.post('/api/users/ratings', ratingsController.createRating);

  // Catch-all route to allow reloading
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${rootPath}/index.html`));
  });
};

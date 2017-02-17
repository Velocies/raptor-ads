var Sequelize = require('sequelize');

db = new Sequelize('postgres://postgres:4D6514efa@localhost:5432');

db.authenticate()
  .then((err) => {
    console.log('Database connection established');
  }, (err) => {
    console.log('Unable to connect to the database: ', err);
  });

  module.exports = {database: db, Sequelize:Sequelize};
const Sequelize = require('sequelize');

const db = new Sequelize('postgres', 'postgres', ' ', {
  dialect: 'postgres',
  port: 5432,
  logging: true,
});

db.authenticate()
  .then((err) => {
    if (err) {
      console.log('Unable to connect to the database');
    } else {
      console.log('Database connection established');
    }
  });

module.exports = { database: db, Sequelize };

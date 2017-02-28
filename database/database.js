const Sequelize = require('sequelize');

const db = new Sequelize('postgres', 'postgres', ' ', {
  dialect: 'postgres',
  port: 5432,
});

module.exports = { database: db, Sequelize };

const Sequelize = require('sequelize');

let db;

if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol:'postgres',
    port: match[4],
    host: match[3],
    logging: true
  });
} else {
  db = new Sequelize('postgres', 'postgres', ' ', {
    dialect: 'postgres',
    port: 5432,
  });
}

module.exports = { database: db, Sequelize };

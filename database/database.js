const Sequelize = require('sequelize');

let db;

if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    port: 5432,
    host: 'ec2-23-21-76-49.compute-1.amazonaws.com',
    logging: true,
  });
} else {
  db = new Sequelize('postgres', 'postgres', ' ', {
    dialect: 'postgres',
    port: 5432,
  });
}

module.exports = { database: db, Sequelize };

const Sequelize = require('sequelize');

if (process.env.DATABASE_URL) {
  let db = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  true
  });
} else {
  let db = new Sequelize('postgres', 'postgres', ' ', {
    dialect: 'postgres',
    port: 5432,
  });
}

module.exports = { database: db, Sequelize };

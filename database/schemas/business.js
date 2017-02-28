module.exports = (db, Sequelize) => {
  const Business = db.define('business', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
    license: Sequelize.STRING,
  });

  return Business;
};

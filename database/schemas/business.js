module.exports = (db, Sequelize) => {
  const Business = db.define('business', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    license: Sequelize.STRING,
    user_id: Sequelize.INTEGER,
  });

  return Business;
};

module.exports = (db, Sequelize) => {
  const Business = db.define('business', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    companyName: Sequelize.STRING,
    companyAddress: Sequelize.STRING,
    companyCity: Sequelize.STRING,
    companyState: Sequelize.STRING,
    companyZip: Sequelize.STRING,
    license: Sequelize.STRING,
  });

  return Business;
};

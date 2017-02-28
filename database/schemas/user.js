module.exports = (db, Sequelize) => {
  const User = db.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
    country: Sequelize.STRING,
    role: Sequelize.STRING,
  });

  return User;
};

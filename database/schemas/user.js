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
    role: Sequelize.STRING,
    businessName: Sequelize.STRING,
    profile_img_path: Sequelize.STRING,
    isDeleted: Sequelize.BOOLEAN,
  });

  return User;
};

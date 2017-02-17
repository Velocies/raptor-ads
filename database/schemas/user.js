module.exports = (db, Sequelize) => {
  var User = db.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    role: Sequelize.STRING,
  });
  User.sync({});

  return User;
};
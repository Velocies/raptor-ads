module.exports = (db, Sequelize) => {
  const Message = db.define('message', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: Sequelize.STRING,
    post_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
  });

  return Message;
};

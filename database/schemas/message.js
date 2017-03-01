module.exports = (db, Sequelize) => {
  const Message = db.define('message', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    body: Sequelize.STRING,
  });

  return Message;
};

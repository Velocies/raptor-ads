module.exports = (db, Sequelize) => {
  const Rating = db.define('rating', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    stars: Sequelize.INTEGER,
    content: Sequelize.TEXT,
  });

  return Rating;
};

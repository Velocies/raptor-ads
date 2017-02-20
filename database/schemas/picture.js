module.exports = (db, Sequelize) => {
  const Picture = db.define('picture', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    img_name: Sequelize.STRING,
    img_path: Sequelize.STRING,
    post_id: Sequelize.INTEGER,
  });

  return Picture;
};

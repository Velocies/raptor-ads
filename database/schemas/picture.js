module.exports = (db, Sequelize, Post) => {
  var Picture = db.define('picture', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    img_name: Sequelize.STRING,
    img_path: Sequelize.STRING,
    post_id: Sequelize.INTEGER
  });
  Picture.sync({});
  Picture.belongsTo(Post, {foreignKey: 'post_id'});

  return Picture;
};
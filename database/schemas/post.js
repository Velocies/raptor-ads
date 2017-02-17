module.exports = (db, Sequelize, User) => {
  var Post = db.define('post', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    body: Sequelize.STRING,
    tags: Sequelize.STRING,
    user_id: Sequelize.INTEGER
  });
  Post.sync({});
  Post.belongsTo(User, {foreignKey: 'user_id'});

  return Post;
};
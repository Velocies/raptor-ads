module.exports = (db, Sequelize, User) => {
  var Post = db.define('posts', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    body: Sequelize.STRING,
    tags: Sequelize.STRING,
    user_id: Sequelize.INTEGER
  });

  return Post;
};
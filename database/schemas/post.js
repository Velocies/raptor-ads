module.exports = (db, Sequelize) => {
  const Post = db.define('posts', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: Sequelize.STRING,
    tags: Sequelize.STRING,
    title: Sequelize.STRING,
    type: Sequelize.STRING,
  });

  return Post;
};

module.exports = (db, Sequelize) => {
  const Post = db.define('posts', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: Sequelize.TEXT,
    tags: Sequelize.STRING,
    title: Sequelize.STRING,
    type: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
    isDeleted: Sequelize.BOOLEAN,
  });

  return Post;
};

/*
  id - primary key, integer
  rater - integer
  stars - integer
  content - string
  user_id - integer, foreign key
*/

module.exports = (db, Sequelize, User) => {
  var Rating = db.define('rating', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    stars: Sequelize.INTEGER,
    content: Sequelize.STRING
    rater_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER
  });

  return Rating;
};
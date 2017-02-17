var db = require('./database.js');

var user = require('./schemas/user.js')(db.database, db.Sequelize);
var post = require('./schemas/post.js')(db.database, db.Sequelize, user);
var picture = require('./schemas/picture.js')(db.database, db.Sequelize, post);
var message = require('./schemas/message.js')(db.database, db.Sequelize, post, user);
var rating = require('./schemas/rating.js')(db.database, db.Sequelize, user);
var business = require('./schemas/business.js')(db.database, db.Sequelize, user);

user.sync({})
  .then(() => post.belongsTo(user, {foreignKey: 'user_id'}))
  .then(() => post.sync({}))
  .then(() => picture.belongsTo(post, {foreignKey: 'post_id'}))
  .then(() => picture.sync({}))
  .then(() => message.belongsTo(post, {foreignKey: 'post_id'}))
  .then(() => message.belongsTo(user, {foreignKey: 'user_id'}))
  .then(() => message.sync({}))
  .then(() => rating.belongsTo(user, {foreignKey: 'user_id'}))
  .then(() => rating.belongsTo(user, {foreignKey: 'rater_id'}))
  .then(() => rating.sync({}))
  .then(() => business.belongsTo(user, {foreignKey: 'user_id'}))
  .then(() => business.sync({}));

module.exports = {
  User: user,
  Post: post,
  Picture: picture,
  Message: message,
  Rating: rating,
  Business: business
};

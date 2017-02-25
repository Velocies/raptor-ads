const db = require('./database.js');

const user = require('./schemas/user.js')(db.database, db.Sequelize);
const post = require('./schemas/post.js')(db.database, db.Sequelize);
const picture = require('./schemas/picture.js')(db.database, db.Sequelize);
const message = require('./schemas/message.js')(db.database, db.Sequelize);
const rating = require('./schemas/rating.js')(db.database, db.Sequelize);
const business = require('./schemas/business.js')(db.database, db.Sequelize);

user.sync({force: true})
  .then(() => post.belongsTo(user, { foreignKey: 'user_id' }))
  .then(() => post.hasMany(picture, { foreignKey: 'user_id' }))
  .then(() => post.sync({}))
  .then(() => picture.belongsTo(post, { foreignKey: 'post_id' }))
  .then(() => picture.sync({}))
  .then(() => message.belongsTo(post, { foreignKey: 'post_id' }))
  .then(() => message.belongsTo(user, { foreignKey: 'user_id' }))
  .then(() => message.sync({}))
  .then(() => rating.belongsTo(user, { foreignKey: 'user_id' }))
  .then(() => rating.belongsTo(user, { foreignKey: 'rater_id' }))
  .then(() => rating.sync({}))
  .then(() => business.belongsTo(user, { foreignKey: 'user_id' }))
  .then(() => business.sync({}))
  .then(() => user.hasMany(post))
  .then(() => user.hasMany(rating))
  .then(() => user.hasMany(business))
  .then(() => user.sync({}));

module.exports = {
  User: user,
  Post: post,
  Picture: picture,
  Message: message,
  Rating: rating,
  Business: business,
};

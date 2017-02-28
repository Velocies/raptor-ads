const db = require('./database.js');

const User = require('./schemas/user.js')(db.database, db.Sequelize);
const Post = require('./schemas/post.js')(db.database, db.Sequelize);
const Picture = require('./schemas/picture.js')(db.database, db.Sequelize);
const Message = require('./schemas/message.js')(db.database, db.Sequelize);
const Rating = require('./schemas/rating.js')(db.database, db.Sequelize);
const Business = require('./schemas/business.js')(db.database, db.Sequelize);

User.sync()
  .then(() => User.hasMany(Post))
  .then(() => Post.belongsTo(User))
  .then(() => Post.hasMany(Picture))
  .then(() => Picture.belongsTo(Post))
  .then(() => Post.hasMany(Message))
  .then(() => Message.belongsTo(Post))
  .then(() => User.hasMany(Message))
  .then(() => Message.belongsTo(User))
  .then(() => User.hasMany(Rating))
  .then(() => Rating.belongsTo(User))
  .then(() => Rating.belongsTo(User, { as: 'rater', foreignKey: 'raterId' }))
  .then(() => User.hasOne(Business))
  .then(() => Business.belongsTo(User))
  .then(() => User.sync({}))
  .then(() => Post.sync({}))
  .then(() => Picture.sync({}))
  .then(() => Message.sync({}))
  .then(() => Rating.sync({}))
  .then(() => Business.sync({}));

module.exports = {
  User,
  Post,
  Picture,
  Message,
  Rating,
  Business,
};

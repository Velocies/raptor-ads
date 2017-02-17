var db = require('./database.js');

var user = require('./schemas/user.js')(db.database, db.Sequelize);
var post = require('./schemas/post.js')(db.database, db.Sequelize, user);
var picture = require('./schemas/picture.js')(db.database, db.Sequelize);
var comment = require('./schemas/comment.js')(db.database, db.Sequelize);
var rating = require('./schemas/rating.js')(db.database, db.Sequelize);
var business = require('./schemas/business.js')(db.database, db.Sequelize, user);

module.exports = {
  User: user,
  Post: post,
  Picture: picture,
  Comment: comment,
  Rating: rating,
  Business: business
};

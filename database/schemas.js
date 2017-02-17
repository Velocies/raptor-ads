var user = require('./schemas/user.js');
var post = require('./schemas/post.js');
var picture = require('./schemas/picture.js');
var comment = require('./schemas/comment.js');
var rating = require('./schemas/rating.js');
var business = require('./schemas/business.js');

module.exports = {
  User: user,
  Post: post,
  Picture: picture,
  Comment: comment,
  Rating: rating,
  Business: business
};

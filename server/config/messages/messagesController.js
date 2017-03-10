const models = require('../../../database/schemas.js');
const email = require('emailjs');

module.exports = {
  getAllForUser: (req, res) => {
    models.User.findOne({
      where: {
        id: req.params.id,
        isDeleted: false,
      },
    })
      .then((user) => {
        user.getMessages({
          where: {
            isDeleted: false,
          },
          include: [
            { model: models.User },
            { model: models.User, as: 'sender' },
            { model: models.Post },
          ],
        })
          .then((messages) => {
            res.json(messages);
          });
      });
  },

  createMessage: (req, res) => {
    // Find the user the message was sent to
    models.User.findOne({ where: { id: req.body.userId, isDeleted: false } })
    .then((receivingUser) => {
      if (receivingUser) {
        // Connect to the velocies.raptorads@gmail.com email
        const server = email.server.connect({
          user: 'velociesraptorads',
          password: 'velociesarethebest',
          host: 'smtp.gmail.com',
          ssl: true,
        });

        // Once connected, send the receiving user of the message an email notification
        server.send({
          text: 'Someone sent you a message in response to one of your job listings. You can navigate to your inbox on our website to view this message.',
          from: 'velocies.raptorads@gmail.com',
          to: receivingUser.email,
          subject: 'Response To Your Listing',
        }, (err, message) => { console.log(err || message); });

        models.Message.create({
          title: req.body.title,
          body: req.body.body,
          userId: req.body.userId,
          senderId: req.body.senderId,
          postId: req.body.postId,
          isDeleted: false,
        })
          .then((message) => {
            res.json(message);
          });
      } else {
        res.send('Could not find a user matching the intended recipient');
      }
    });
  },
};

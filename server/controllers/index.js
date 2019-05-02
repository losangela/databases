var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
    models.messages.get((err, result) => {res.send(result)});
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post((err, result) => {res.send('you sent a message!!!!!!!!')}, req.body);
       /*username, roomname, mesagetext */

    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get((err, result) => {res.send(result)});
    },
    post: function (req, res) {
      models.users.post((err, result) => {res.send('you created an account!!!!')});
    }
  }
};


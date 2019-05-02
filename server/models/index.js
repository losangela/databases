var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //
      db.query('select user_id from users where user_name = "kathleen";', function (err, result) {
        if (err) {
          callback(err)
        } else {
          callback(null, result);
        }
      });
    
    }, // a function which produces all the messages
    post: function (callback, dataObj) {
      // console.log(typeof dataObj.message)
      let text = `INSERT INTO MESSAGES (id_users, message_text, id_rooms) values ((select user_id from users where user_name = "${dataObj.username}"), "${dataObj.message}", 1);`
      console.log(text);
      db.query(text, function (err, result) {
        if (err) {
          callback(err)
        } else {
          callback(null, result);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users;', function (err, result) {
        if (err) {
          callback(err)
        } else {
          callback(null, result);
        }
      });
    },
    post: function () {}
  }
};


var Parse = {

  server: 'http://127.0.0.1:3000/',
  // server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/messages',
      json: {
        username: 'angela',
        message: 'will this post?',
        roomname: 'lobby'
      }
    }) 
    },

    // $.ajax({
    //   url: Parse.server,
    //   type: 'POST',
    //   data: JSON.stringify(message),
    //   contentType: 'application/json',
    //   success: successCB,
    //   error: errorCB || function (error) {
    //     console.error('chatterbox: Failed to create message', error);
    //   }
    // });
      // },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + 'classes/messages',
      type: 'GET',
      data: { order: 'message_date' },
      // contentType: 'text/plain',
      contentType: 'application/json',
      // crossDomain: true,
      // dataType: 'jsonp',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
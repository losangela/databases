var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// const config = {
//     host: '127.0.0.1',
//     user: 'root',
//     database: 'chat'
// };

// const pool = mysql.createPool(config);
// module.exports = pool;

const db = mysql.createConnection({
    host: "localhost",
    // user: "root",
    user: "student",
    password: 'student',
    database: "chat"
  });
db.connect();


module.exports = db;
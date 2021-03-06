// Set up MySQL connection.
var mysql = require("mysql");
require ('dotenv').config();


var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  process.env.PORT,
  user     :  process.env.userDB,
  password :  process.env.passDB,
  database: "burgers_db" //GET DB NAME - burgers_db
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
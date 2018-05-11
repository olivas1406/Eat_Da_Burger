var mysql = require("mysql");             
/*
var connection = mysql.createConnection({ // Set connection parameters
  host: "localhost",
  user: "root",
  password: "tiMh9AwUOkKzsfX1wVBs",
  database: "burgers_db"
});
*/

var connection;
if(process.env.JAWSDB_URL) {            //For Heroku Deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({ // Set local connection parameters
    host: "localhost",
    user: "root",
    password: "tiMh9AwUOkKzsfX1wVBs",
    database: "burgers_db"
    });
};

connection.connect(function(err) {      // Create connection
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;            // Export connection for ORM

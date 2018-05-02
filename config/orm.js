
var connection = require("./connection.js");

/*
In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order 
to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()

Export the ORM object in module.exports.
*/
var orm = {
    selectAll: function(whatToSelect, colToSearch) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [whatToSelect, colToSearch], function(err, res) {
        if (err) throw err;
        console.log(res);
      });
    },
    insertOne: function(colToSearch,valOfCol) {
        var queryString = "INSERT INTO ?? VALUES ??";
        connnection.query(queryString, [colToSearch, valOfCol], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function(colToSearch, valOfCol, ID) {
        var queryString = "INSERT INTO ?? VALUES ?? WHERE ID = ??";
        connection.query(queryString, [      ,       ,     ], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    }
}

  module.exports = orm;



var connection = require("./connection.js");

var orm = {
    selectAll: function(what, callback) {
     var queryString = "SELECT * FROM " + what + ";";
      connection.query(queryString, [what], function(err, res) {
        if (err) throw err;
        console.log(res);
        callback(data);   
      });
    },
    insertOne: function(table, values, newBurer, callback) {
        var queryString = "INSERT INTO" + table + "VALUES" + values;
        connnection.query(queryString, [table, values], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function(table, values, id) {
        var queryString = "INSERT INTO ?? VALUES ?? WHERE ID = ??";
        //INSERT INTO `burgers_db`.`burgers` (`id`, `burger_name`) VALUES ('5', 'Steak Burger');

        connection.query(queryString, [table, values, id], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    deleteOne: function(table, values1,, values2, callback) {
        var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';

        connection.query(queryString, [values2], function(err, res) {
            if (err) throw err;
            console.log(res);
            callback(res);
        });
    }
}

  module.exports = orm;


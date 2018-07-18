
var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(BoilEm, MashEm, StickEmInAStew, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [BoilEm, MashEm, StickEmInAStew], function(err, samwise){
            if (err) throw err;
        callback(samwise);
    });
    },
    updateOne: function(colVal, id, callback) {
    var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
        connection.query(queryString, [id], function(err, result) {
      
            if (err) throw err;
      
        callback(result);
        });
    },
    deleteOne: function(id, callback) {
        var queryString = "DELETE FROM burgers WHERE " + id + ";";
        connection.query(queryString, [id], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
}

module.exports = orm;
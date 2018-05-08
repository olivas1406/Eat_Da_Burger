
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
    /*
       updateOne: function(table, changeColumn, newValue, idColumn, id, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";

        // UPDATE `burgers_db`.`burgers` SET `devoured`='1' WHERE `id`='4';

        connection.query(queryString, [table, changeColumn, newValue, idColumn, id], function(err, res){
            if (err) throw err;
            callback(res);
        });
    }
*/
updateOne: function(table, changeColumn, newValue, idColumn, id, callback) {
    //this is for a database in which only one column will be changed
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
    connection.query(queryString, [table, changeColumn, newValue, idColumn, id], function(err, data){
        if (err) {
            console.log("orm.js, updateOne error: " + err);
        }
        callback(data);
    });
}


       // DELETE - DELETE FROM `burgers_db`.`burgers` WHERE `id`='17';
}

module.exports = orm;

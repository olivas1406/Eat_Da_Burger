
var connection = require("./connection.js");

var orm = {
    selectAll: function(what, callback) {                       // Function to pull all burgers from the DB
     var queryString = "SELECT * FROM " + what + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;        
            callback(res);   
      });
    },
    insertOne: function(table, column, newBurger, callback) {   // Function for adding a new burger
        var queryString = "INSERT INTO" + table + "VALUES" + newBurger;
        connnection.query(queryString, [table, values], function(err, res) {
            
            console.log(queryString);                       //  REMOVE ME REMOVE ME REMOVE ME
            console.log(newBurger);                         // REMOVE ME REMOVE ME REMOVE ME
            
            if (err) throw err;
          //  callback(res);
        });
    },
    //updateOne: function(table, objColVals, condition, callback) {
    updateOne: function(table, ID, callback) {
        // actual SQL commands: UPDATE `burgers_db`.`burgers` SET `devoured`='0' WHERE `id`='2';
   // var queryString = "UPDATE " + table + " SET `devoured`='1' WHERE `id`= 2" ;
     //   var idNum = JSON.stringify(ID);
     //  console.log(idNum);
      var queryString = "UPDATE " + table + " SET `devoured`='1' WHERE `id`= " + ID;
      //  var queryString = "UPDATE ?? SET `devoured`='1' WHERE `id`= ??";

      //  var queryString = "UPDATE " + table + " SET " + objColVals + " WHERE " + condition;

        console.log(queryString);                           // REMOVE ME REMOVE ME REMOVE ME
        
        connection.query(queryString, [table, ID], function(err, res) {
            if (err) throw err;

        });
       //  callback(res);

    },
    deleteOne: function(table, condition) {
        var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';
        
        console.log(queryString);                           // REMOVE ME REMOVE ME REMOVE ME

        connection.query(queryString, function(err, res) {
            if (err) throw err;
        
          //  callback(res);
        });
    }
}

  module.exports = orm;


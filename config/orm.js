
var connection = require("./connection.js");

var orm = {
    showBurgers: function(what, callback) {                       // Function to pull all burgers from the DB
     var queryString = "SELECT * FROM " + what + ";";

     console.log(queryString);                              // REMOVE ME REMOVE ME

        connection.query(queryString, function (err, res) {
            
            console.log(res);                               // REMOVE ME REMOVE ME

            if (err) throw err;        
            callback(res);   
      });
    },
    omNomNom: function(colToUpdate, ID, callback) {                       // Function to pull all burgers from the DB
        var queryString = "UPDATE ?? WHERE ID = ??";
   
        console.log(queryString);                              // REMOVE ME REMOVE ME
   
           connection.query(queryString, [colToUpdate, ID], function (err, res) {
               
               console.log(res);                               // REMOVE ME REMOVE ME
   
               if (err) throw err;        
               callback(res);   
         });
       }
    }
















    /*
    addBurger: function(table, column, newBurger, callback) {   // Function for adding a new burger
        var queryString = "INSERT INTO" + table + "VALUES" + newBurger;
        connnection.query(queryString, [table, values], function(err, res) {
            
            console.log(queryString);                       //  REMOVE ME REMOVE ME REMOVE ME
            console.log(newBurger);                         // REMOVE ME REMOVE ME REMOVE ME
            
            if (err) throw err;
        });
    },

    omNomNom: function(table, ID, callback) {
      var queryString = "UPDATE " + table + " SET `devoured`='1' WHERE `id`= " + ID;

        console.log(queryString);                           // REMOVE ME REMOVE ME REMOVE ME
        
        connection.query(queryString, [table, ID], function(err, res) {
            if (err) throw err;

        });
    },
    deleteBurger: function(table, condition) {
        var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';
        
        console.log(queryString);                           // REMOVE ME REMOVE ME REMOVE ME

        connection.query(queryString, function(err, res) {
            if (err) throw err;
        });
    }
}
*/

  module.exports = orm;


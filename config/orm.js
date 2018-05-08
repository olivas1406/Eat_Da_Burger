/*
var connection = require("./connection.js");
var orm = {
    showBurgers: function(what, callback) {                       // Function to pull all burgers from the DB
     var queryString = "SELECT * FROM " + what + ";";
   //  console.log(queryString);                              // REMOVE ME REMOVE ME
        connection.query(queryString, function (err, res) {
            
         //   console.log(res);                               // REMOVE ME REMOVE ME
            if (err) throw err;        
            callback(res);   
      });
    }, /*
    omNomNom: function(colToUpdate, ID, callback) {                       // Function to pull all burgers from the DB
        var queryString = "UPDATE ?? WHERE ID = ??";
   
        console.log(queryString);                              // REMOVE ME REMOVE ME
   
           connection.query(queryString, [colToUpdate, ID], function (err, res) {
               
               console.log(res);                               // REMOVE ME REMOVE ME
   
               if (err) throw err;        
               callback(res);   
         });
       }  */
/*
       updateOne: function(table, col, colVal, condition, conditionVal, callback){
        var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';
    
        connection.query(queryString, [colVal, conditionVal], function(err, data){
          if(err) throw err;
          callback(data);
        });
      },
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
/*
  module.exports = orm;
*/

var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

//insertOne: function(table, column, value, callback) {
    insertOne: function(BoilEm, MashEm, StickEmInAStew, callback) {

    var queryString = "INSERT INTO ?? (??) VALUES (?);"
 //   connection.query(queryString, [table, column, value], function(err, data){
        connection.query(queryString, [BoilEm, MashEm, StickEmInAStew], function(err, samwise){
        if (err) {
            console.log("orm.js, insertOne error: " + err);
        }
    // callback(data);
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

/*
var orm = require("../config/orm.js")
var burger = {
    showBurgers: function(callback) {                 // Pull all burgers from DB
        orm.showBurgers("burgers", function(res) {
            callback(res)
        });
    },
    omNomNom: function(colVal, conditionVal, cb){
        orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
          cb(res);
        });
        /*
    omNomNom: function(burgerID, devoured, callback) { // Change the status of a burger
        orm.omNomNom("burger", burgerID, devoured, function(res) {  
            
            console.log(res);
            callback(res);
        }); */

        /*
    },
    addBurger: function(column, value, callback) {      // Add a burger to the DB
        orm.addBurger("burgers", column, value, function(res) {
            callback(res);
        });
    },
    deleteBurger: function(value, callback) {                  // Remove a burger
        orm.deleteBurger("burgers", "id", value, function(res) {
            callback(res);
        });
    }
};
module.exports = burger;                                    // Make available to burgers_controller.js
*/


var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },  
    /*
    insertOne: function(value, callback) {

        console.log(value);

        orm.insertOne(value, function(res) {
        });
   */
  insertOne: function (potato, callback) {
    orm.insertOne("burgers", "burger_name", potato, function (stew) {
        callback(stew);
    });



    },
    /*
    updateOne: function(id, callback) {
        orm.updateOne("burgers", "devoured", true, "id", id, function(res) {
            callback(res);
        });
    }
    */

   updateOne: function(id, callback){
    orm.updateOne("burgers", "devoured", true, "id", id, function(res){
        callback(res);
    });
}



}

module.exports = burger;

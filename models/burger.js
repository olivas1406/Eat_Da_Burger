
var orm = require("../config/orm.js")

var burger = {
    showBurgers: function(callback) {                 // Pull all burgers from DB
        orm.showBurgers("burgers", function(res) {
            callback(res)
        });
    },
    omNomNom: function(colVal, colToUpdate, callback) { // Change the status of a burger
        orm.omNomNom("burgers", colVal, colToUpdate, function(res) {  
            callback(res);
        });
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
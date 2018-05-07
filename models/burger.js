
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(callback) {                 // Pull all burgers from DB
        orm.selectAll("burgers", function(res) {
            callback(res)
        });
    },
    insertOne: function(column, value, callback) {      // Add a burger to the DB
        orm.insertOne("burgers", column, value, function(res) {
            callback(res);
        });
    },
    updateOne: function(colVals, condition, callback) { // Change the status of a burger
        orm.updateOne("burgers", colVals, condition, function(res) {  
            callback(res);
        });
    },
    deleteOne: function(value, callback) {                  // Remove a burger
        orm.deleteOne("burgers", "id", value, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;                                    // Make available to burgers_controller.js
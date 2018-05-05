
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            console.log(res);
            callback(res)
        });
    },
    insertOne: function(table, values, callback) {
        orm.insertOne("burgers", table, values, function(res) {
            console.log(res);
            callback(res);
        });
    },
    updateOne: function(column, value, callback) {
        orm.updateOne("burgers", "devoured", column, "id", value, function(res) {
            callback(res);
        });
    },
    deleteOne: function(value, callback) {
        orm.deleteOne("burgers", "id", value, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;
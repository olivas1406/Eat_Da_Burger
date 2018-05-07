
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res)
        });
    },
    insertOne: function(column, value, callback) {
        orm.insertOne("burgers", column, value, function(res) {
            callback(res);
        });
    },
    updateOne: function(colVals, condition, callback) {
        orm.updateOne("burgers", colVals, condition, function(res) {
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
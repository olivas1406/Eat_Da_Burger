
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
         //   console.log(res);                                 // REMOVE ME REMOVE ME REMOVE ME
            callback(res)
        });
    },
    insertOne: function(column, value, callback) {
        orm.insertOne("burgers", column, value, function(res) {
        //    console.log(res);                                 // REMOVE ME REMOVE ME REMOVE ME
            callback(res);
        });
    },
    updateOne: function(colVals, condition, callback) {
        orm.updateOne("burgers", colVals, condition, function(res) {
       //  console.log(res);                                   // REMOVE ME REMOVE ME REMOVE ME
            callback(res);
        });
    },
    deleteOne: function(value, callback) {
        orm.deleteOne("burgers", "id", value, function(res) {
        // console.log(res);                                    // REMOVE ME REMOVE ME REMOVE ME
            callback(res);
        });
    }
};

module.exports = burger;
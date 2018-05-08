
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },  
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

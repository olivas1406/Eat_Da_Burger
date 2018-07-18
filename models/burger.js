
var orm = require("../config/orm.js");                                     

var burger = {
    selectAll: function(callback) {                                         
        orm.selectAll("burgers", function(res) {                            
            callback(res);
        });
    },  
    insertOne: function (potato, callback) {
        orm.insertOne("burgers", "burger_name", potato, function (stew) {
            console.log("burgerJS potato: ", potato, "stew: ", stew);
            callback(stew);
        });
    },
    updateOne: function(colVal, id, cb) {
        orm.updateOne(colVal, id, function(res) {
            cb(res);
        });
    }
    //deleteOne would go here
};

module.exports = burger;
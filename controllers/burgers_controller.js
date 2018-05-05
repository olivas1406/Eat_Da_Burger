
var express = require("express");
var app = express();
var burger = require("../models/burger.js");

app.get("/", function(req, res) {
    var holdBurger = {
        burger: []
    };
    burger.selectAll(function(data) {
        for (var i = 0; i < data.length; i++) {
            info.holdBurger.push(data[i]);
        }
        res.render("index", info);
    });
});



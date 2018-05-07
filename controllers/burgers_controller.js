
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {            // Redirect to /index
    res.redirect("/index");
});

router.get("/index", function(req, res) {
    var holdBurger = {
        burger: []
    };
    burger.selectAll(function(data) {
        for (var i = 0; i < data.length; i++) {
            holdBurger.burger.push(data[i]);
        }
        res.render("index", holdBurger);
    });
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
    res.render("burger_name", {burger: data});
    });
});

router.get("/add", function(req, res) {
    burger.insertOne([req.body.holdBurger], function() {
    res.redirect("/");
    });
});

router.get("/update/:id", function(req, res) {
    burger.updateOne([req.body.devoured], [req.params.id], function() {
    res.redirect("/");
    });
});

router.get("/delete/:id", function(req, res) {
    burger.deleteOne([req.params.id], function() {
    res.redirect("/");
    });
});

module.exports = router;

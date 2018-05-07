
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    var holdBurger = {
        burger: []
    };
    burger.selectAll(function(data) {
        for (var i = 0; i < data.length; i++) {
            holdBurger.burger.push(data[i]);
        }
     //   console.log(holdBurger);                // REMOVE ME REMOVE ME
        res.render("index", holdBurger);
        
    });
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {

        console.log(data);                  // REMOVE ME REMOVE ME 
    res.render("burger_name", {burger: data});
    
    });
});

router.post("/add", function(req, res) {
    burger.insertOne([req.body.holdBurger], function() {
    res.redirect("/");
    });
});

router.post("/update/:id", function(req, res) {
    burger.updateOne([req.body.devoured], [req.params.id], function() {
        console.log(req);
        console.log(res);
    res.redirect("/");
    });
});

router.delete("/delete/:id", function(req, res) {
    burger.deleteOne([req.params.id], function() {
    res.redirect("/");
    });
});

module.exports = router;
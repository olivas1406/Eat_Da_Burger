
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {            // Redirect to /index
    res.redirect("/index");
});

router.get("/index", function(req, res) {   // Get all from burgers DB
    burger.selectAll(function(potato) {  // because we can call it anything
        var getBurgers = {
            burgers: potato
        };
        console.log(getBurgers);
        res.render("index", getBurgers);
    });
});

router.post("/burgers/insertOne", function(req, res) {
    burger.insertOne["burger_name", "devoured"], [req.body.name, false], function() {
        res.redirect("/index");
    }
});

router.put("/burgers/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: " + condition);             // REMOVE ME REMOVE ME REMOVE ME

    burger.updateOne({devoured: req.body.devoured}, condition, function() {
        res.redirect("/index");
    });
});

module.exports = router;



var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerBurger = {
            burgers: data
        };
        res.render("index", burgerBurger);     
    });
});

router.post("/insertOne", function (req, res) {
    console.log("Burger Name: " + req.body.burger_name);
    burger.insertOne(req.body.burger_name, function (potato) {
        res.redirect("/")
    });
});

router.post("/updateOne/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function() {
      res.redirect("/");
    });
  });

module.exports = router;
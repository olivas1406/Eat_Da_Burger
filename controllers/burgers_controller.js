
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
       // console.log(holdBurger);                    // REMOVE ME REMOVE ME REMOVE ME
        res.render("index", holdBurger);
    });
});

/////////// The Drop /////////////////////////


router.post("/insertOne", function(req, res) {
    burger.insertOne["burger_name", "devoured"], [req.body.name, false], function() {
        res.redirect("/index");
    }
});



// sql syntax error 
// sql syntax error 
// sql syntax error 
// actual SQL commands: UPDATE `burgers_db`.`burgers` SET `devoured`='0' WHERE `id`='2';
// resets burger ID 2 to not Devoured
// CHANGE TO ORM THAT CORRESPONDS TO THIS   // CHANGE TO ORM THAT CORRESPONDS TO THIS
router.post("/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: " + condition);             // REMOVE ME REMOVE ME REMOVE ME

    burger.updateOne({devoured: req.body.devoured}, condition, function() {
        res.redirect("/index");
    });
});
// sql syntax error 
// sql syntax error 
// sql syntax error 


/*
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
*/

module.exports = router;

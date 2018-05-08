
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
    burger.showBurgers(function(data) {
        for (var i = 0; i < data.length; i++) {
            holdBurger.burger.push(data[i]);
        }
       // console.log(holdBurger);                    // REMOVE ME REMOVE ME REMOVE ME
        res.render("index", holdBurger);
    });
});

/////////// The Drop /////////////////////////


router.post("/omNomNom/:id", function(req, res) {
    burger.omNomNom["burger_name", "devoured"], [req.body.name, false], function() {
        res.redirect("/index");
    }
});

router.get("/addBurger", function(req, res) {
    burger.addBurger([req.body.holdBurger], function() {
    res.redirect("/");
    });
});

router.get("/deleteBurger/:id", function(req, res) {
    burger.deleteBurger([req.params.id], function() {
    res.redirect("/");
    });
});



module.exports = router;

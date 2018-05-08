
/*
.get gets from another source
.post pushes information to another source/create information
.put – used for updating
.delete – used to delete

*/
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

router.post("/insertOne", function(req, res) {
    burger.insertOne(req.body.burger_name, function(res) {
    });
});






router.put("/updateOne/:id", function(req, res) {
    var id = req.params.id;
    burger.updateOne(id, function(res) {
        if (res.changeRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
        });
    });

 

module.exports = router;


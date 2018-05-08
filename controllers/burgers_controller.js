
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


/*
router.post("/insertOne", function(req, res) {
    burger.insertOne(req.body.burger_name, function(err, res) {
        console.log(req.body.burger_name);
        if (err) throw err;
       // res.redirect("index");
    });
});
*/
/*
router.post("/insertOne", function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
      
        console.log(data);
        if (err) throw err;
       res.redirect("index");
    });
});
*/
router.post("/insertOne", function (req, res) {
    console.log("Burger Name: " + req.body.burger_name);
    burger.insertOne(req.body.burger_name, function (potato) {
        res.redirect("/")
    });
});




/*
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
*/
router.put("/updateOne/:id", function(req, res) {
    burger.updateOne(req.params.id, function(results) {

    });
});
 

module.exports = router;
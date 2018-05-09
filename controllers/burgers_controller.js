
var express = require("express");                               // Require Express for APIs
var burger = require("../models/burger.js");                    // Make burger.js available here
var router = express.Router();                                  // Use Express Routing

router.get("/", function(req, res) {                            // Get request
    burger.selectAll(function(data) {                           // Use selectAll from burger.js
        var burgerBurger = {                                    // Var to hold burger data
            burgers: data
        };
        res.render("index", burgerBurger);                      // Serve the burger data to the index.handlebars page
    });
});

router.post("/insertOne", function (req, res) {                 // Post request
    burger.insertOne(req.body.burger_name, function (potato) {  // Use insertOne from burger.js - pass in data from the HTML form burger_name - call it 'potato'
        res.redirect("/")                                       // Redirect to the main page
    });
});

router.post("/updateOne/:id", function(req, res) {              // Post request
    var condition = "id = " + req.params.id;                    // Var to hold the 'id' of the burger being devoured
         burger.updateOne({                                     // Use updateOne from burger.js
            devoured: req.body.devoured                         
        }, condition, function() {                              
        res.redirect("/");
    });
  });

module.exports = router;
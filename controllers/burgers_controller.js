
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


/*
router.get("/", function(req, res) {            // Redirect to /index
    res.redirect("/index");
});
*/

//router.get("/index", function(req, res) {
router.get("/", function(req, res) {
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

/*
router.put("/omNomNom/:id", function(req, res) {
    burger.omNomNom["burger_name", "devoured"], [req.body.name, false], function() {
        res.redirect("/index");
    }
});
*/
/*
router.put('/omNomNom/:id', function(req, res) {
	var colToUpdate = "id = " + req.params.id;
	console.log("colToUpdate", colToUpdate);
    console.log(res);
	burger.omNomNom({devoured: req.body.devoured}, colToUpdate, function() {
		res.redirect('/index');
	});
});

*/

router.put('/omNomNom/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
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


var express = require("express");                                   // Require Express.js to use  APIs
var bodyParser = require("body-parser");                            // Require body-parser to bring in form data as JSON
var exphbs = require("express-handlebars");                         // Require handlebars.js for templates
var routes = require("./controllers/burgers_controller.js");        // Require burgers_controllers
var app = express();                                                // Call express using 'app'
var PORT = process.env.PORT || 1337;                                // Let hosting service decide port or set to 1337

app.use(express.static("public"));                                  // Make what's in the 'public' folder available

app.use(bodyParser.json());                                         // Use JSON
app.use(bodyParser.urlencoded({ extended: true }));                 // Allow nested objects

app.engine("handlebars", exphbs({                                   // Use the Handlebars engine
    defaultLayout: "main"                                           // Use 'main' for static content
}));

app.set("view engine", "handlebars");                             

app.use(routes);

app.listen(PORT, function(){                                        // Start the app
console.log("Listening on Port: " + PORT);
});
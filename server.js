
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");
var PORT = process.env.PORT || 3000;                                // Set the port to 3000 or allow Heroku to decide

app.use(express.static("public"))                                   // Serve static content from the 'public' folder

app.use(bodyParser.json());                                         // Use JSON
app.use(bodyParser.urlencoded({ extended: true }));                 // Allow nested objects
app.use(bodyParser.json({ type: "application/vnd.api+json" }));     // Media type to parse

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT);
console.log("Listening on Port: " + PORT);
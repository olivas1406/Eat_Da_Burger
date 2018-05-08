
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");
var app = express();
var PORT = process.env.PORT || 1337;

app.use(express.static("public"));

app.use(bodyParser.json());                                         // Use JSON
app.use(bodyParser.urlencoded({ extended: true }));                 // Allow nested objects


app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function(){
console.log("Listening on Port: " + PORT);
});








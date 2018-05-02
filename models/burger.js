
var orm = require("../config/orm.js")

orm.selectAll("*", "burger_name");

orm.insertOne("burger_name", "newBurgerName");  // <-- Need to pull burger name from form

orm.updateOne("burger_name", "updatedBurger", "burgerID"); // <-- Need to pull ID and update from form


// module.exports ?? Export at the end of the burger.js file.  <-- export what???



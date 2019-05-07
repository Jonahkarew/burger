//import express, handlebars
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

//set up express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(express.static("public"));
//set up handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//get our routes
// require("./controllers/htmlRoutes")(app);
require("./controllers/burgers_controller")(app);


app.listen(PORT, () => console.log("listening on port:" + PORT));
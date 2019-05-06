//import express, handlebars
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

//set up express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//set up handlebars engine
app.engine("handlebars", exphbs({defaultLayou: "main"}));
app.set("view engine", "handlebars");

//get our routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


app.listen(PORT, () => console.log("listening on port:"+PORT));
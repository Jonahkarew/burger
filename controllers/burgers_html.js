var db = require("../models")

//code to send data to page
module.exports = (app) => {

app.get("/", function(req, res){
  db.burgers.findAll()

  .then(dbBurgerData => {
    res.render("index", {burgerData: dbBurgerData})
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});
};
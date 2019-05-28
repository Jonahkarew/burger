const burgers = require("../config/orm.js");

module.exports = app => {
//get all the burgers cus we need all the burgers
app.get("/api/burgers", function(req, res) {
  burgers.findAll()
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err)
    res.json(err)
  });
});


//post that burger
app.post("/api/burgers", function(req, res) {
  
  
  
  burgers.create(req.body)
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});


//route to get burger by id
app.get("/api/burgers/:id", function(req, res){
  burgers.findById(req.params.id)
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err);
  })
});


//route to update burger by id
app.put("/api/burgers/:id", function(req, res){
  burgers.update(req.body.devoured, req.params.id)
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err)
  })
})








}
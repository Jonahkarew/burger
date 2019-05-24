var db = require("../models")

module.exports = app => {
//get all the burgers cus we need all the burgers
app.get("/api/burgers", function(req, res) {
  db.burgers.findAll()
  .then(dbBurgerData =>  {res.json(dbBurgerData)})
  .catch(err => {
    console.log(err)
    res.json(err)
  });
});


//post that burger
app.post("/api/burgers", function(req, res) {
  
  
  
  db.burgers.create(req.body)
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});


//route to get burger by id
app.get("/api/burgers/:id", function(req, res){
  db.burgers.findById({
    where: {
      id: req.body.id
    }
  })
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err);
  })
});


//route to update burger by id
app.put("/api/burgers/:id", function(req, res){
  db.burgers.update({devoured: req.body.devoured},{
    where:{
      id: req.params.id
    }
    })
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err)
  })
})








}
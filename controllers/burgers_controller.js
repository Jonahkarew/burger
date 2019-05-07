const burgers = require("../config/orm.js");

module.exports = app => {
//get all the burgers
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
  // connection.query("INSERT INTO burgers VALUES ?", [req.body], function(err, result){
  //   if (err) {
  //     return res.status(500).end();
  //   }
  //   res.json({res})
  // })
  
  
  burgers.create(req.body)
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

app.get("/api/burgers/:id", function(req, res){
  burgers.findById(req.params.id)
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err);
  })
});

app.put("/api/burgers/:id", function(req, res){
  burgers.update(req.body.devoured, req.params.id)
  .then(dbBurgerData => res.json(dbBurgerData))
  .catch(err => {
    console.log(err);
    res.json(err)
  })
})








}
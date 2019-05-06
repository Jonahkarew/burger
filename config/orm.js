//import connection
var connection = require("./connection");



//alright let's see if i can do these promises correctly
//--------------------------------------------
//create function that reads all from burgers table
const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers", function(err, dbBurgerData){
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};

//-------------------------------------------
//find a burger by id i hope
const findById = burgerId => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers WHERE id = ?", [burgerId], function(err, dbBurgerData){
      if (err){

        return reject(err);
      }

      return resolve(dbBurgerData);
    });
  });
};

//----------------------------------------------------
//create a new burger
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO burgers SET ?", [burgerDataObj], function(err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData)
    });
  });
};

//----------------------------------------------------
//update a burger
const update = (eatenValue, burgerId) => {
  return new Promise((resolve, reject) => {
    eatenValue = (eatenValue === "true") ? true : false;

    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [eatenValue, burgerId], function(err, dbBurgerData) {
      if(err){
        return reject(err);
      }
      else if (dbBurgerData.changedRows === 0){
        return reject({message: "Try a different burger id"});
      }
      else {
        return resolve(dbBurgerData);
      }
    })
  })
}

module.exports = {findAll, findById, create, update};
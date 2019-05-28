//require mysql to connect to database

const mysql = require("mysql");

let connection;

//getting it ready for heroku
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "open",
    database: "burgers_db"
  })
}

//export this boi
module.exports = connection;
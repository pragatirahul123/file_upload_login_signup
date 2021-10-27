const mysql = require("mysql")
require('dotenv').config()


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pragati@12",
  database: "Navgurukul"
});

connection.connect((err,result) =>{
  if(err) throw err
  console.log("Database connected")
  
})

var sql = `create table if not exists Navgurukul (
  id int(11) NOT NULL,
  Profile_Picture varchar(266),
  Username varchar(50) NOT NUll,
  Email varchar(50)NOT NULL UNIQUE , 
  Password varchar(1000)NOT NULL,
  Gender varchar(50),
  Dob Date,
  Qualification varchar(266))`;

  connection.query(sql, (err, result) => {
    if (err) throw err
      console.log("table created")
  
  });

var  sql = `create table if not exists Item (
  id int(11),
  name varchar(233) NOT NULL,
  price varchar(233),
  quantity varchar(233))`

  connection.query(sql,(err,result)=>{
    if(err) throw err
      console.log("table created")
  });

module.exports = connection;
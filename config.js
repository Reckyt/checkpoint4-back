const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mldlp2015?",
  database: "checkpoint"
});
module.exports = connection;

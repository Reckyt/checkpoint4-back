const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mldlp2015?",
  database: "checkpoint"
});
module.exports = connection;

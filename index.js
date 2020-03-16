const express = require("express");
const bodyParser = require("body-parser");

const api = require("./src/routes");

const app = express();
<<<<<<< HEAD
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

=======
const PORT = 3000;

const bodyParser = require("body-parser");
const api = require("./src/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", api);

>>>>>>> 4cc3b243ec8af3d5c0a965b37a719aebe7b8cfa1
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

<<<<<<< HEAD
app.use("/api", api);

app.listen(port, err => {
  if (err) {
    throw new Error("There is an error");
  }
  console.log("ouverture du port");
=======
app.listen(PORT, err => {
  if (err) {
    throw new Error("There is an error");
  }
  console.log("le port est ouvert");
>>>>>>> 4cc3b243ec8af3d5c0a965b37a719aebe7b8cfa1
});

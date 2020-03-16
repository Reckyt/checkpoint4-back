const express = require("express");
const bodyParser = require("body-parser");

const api = require("./src/routes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", api);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, err => {
  if (err) {
    throw new Error("There is an error");
  }
  console.log("le port est ouvert");
});

const express = require("express");

const router = express.Router();
// const connection = require("../../config");

const jwt = require("jsonwebtoken");

router.post("/", verifyToken, (req, res) => {
  jwt.verify(req.token, "variable denvironnement", (err, authData) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(authData);
    }
  });
});

function verifyToken(req, res, next) {
  // Recuperation du token dans le Header
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bear = bearerHeader.split(" ");
    const bearToken = bear[1];
    req.token = bearToken;
    next();
  } else {
    res.status(403).send("forbidden");
  }
}

module.exports = router;

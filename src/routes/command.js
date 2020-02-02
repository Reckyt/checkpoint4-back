const express = require("express");

const router = express.Router();
const connection = require("../config");

// -----------------POST A DATE----------------------------------------------------------------

router.post("/api/command/:date", (req, res) => {
  const formData = { date: req.body.date };
  connection.query(
    "INSERT INTO user_has_show SET ?",
    formData,
    (err, results) => {
      if (err) {
        res.status(500).send("Error saving");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// -----------------POST A PRICE----------------------------------------------------------------

router.post("/:price", (req, res) => {
  const formData = { price: req.body.price };
  connection.query(
    "INSERT INTO user_has_show SET ?",
    formData,
    (err, results) => {
      if (err) {
        res.status(500).send("Error saving");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;

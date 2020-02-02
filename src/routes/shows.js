const express = require("express");

const router = express.Router();
const connection = require("../config");

// ----------------GET ALL SHOWS -----------------------------------------------------------------

router.get("/", (req, res) => {
  connection.query("SELECT * from spectacle", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving shows");
    } else {
      res.json(results);
    }
  });
});

module.exports = router;

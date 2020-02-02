const express = require("express");

const router = express.Router();
const connection = require("../config");

// -----------------GET ALL ARTIST----------------------------------------------------------------

router.get("/:id", (req, res) => {
  const idQuery = req.params.id;
  connection.query(
    "SELECT * from artist a JOIN spectacle s ON a.show_id=s.id where show_id = ?",
    idQuery,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving artist");
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;

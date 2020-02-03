const express = require("express");

const router = express.Router();
const connection = require("../config");

// -----------------GET ALL ARTIST----------------------------------------------------------------

router.get("/", (req, res) => {
  const idQuery = req.params.id;
  connection.query(
    "SELECT * FROM artist ORDER BY firstname",
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

// -----------------GET ARTIST BY SHOW_ID----------------------------------------------------------------

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

// -----------------POST AN ARTIST----------------------------------------------------------------

router.post("/", (req, res) => {
  const formaData = req.body;
  connection.query("INSERT INTO artist SET ?", formaData, (err, results) => {
    if (err) {
      res.status(500).send("Error saving artist");
    } else {
      res.json(results);
    }
  });
});

// -----------------DELETE AN ARTIST----------------------------------------------------------------

router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM artist WHERE id = ?", [idUrl], err => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;

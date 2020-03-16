const express = require("express");

const router = express.Router();
const connection = require("../config");

router.get("/api/artist", (req, res) => {
  connection.query("SELECT * FROM artist", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving artist");
    } else {
      res.json(results);
    }
  });
});

router.post("/api/url", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO table SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Error saving");
    } else {
      res.sendStatus(200);
    }
  });
});

router.put("/api/url/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    "UPDATE table SET ? WHERE id = ?",
    [formData, idUrl],
    err => {
      if (err) {
        res.status(500).send("Error editing");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.delete("/api/url/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM table WHERE id = ?", [idUrl], err => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;

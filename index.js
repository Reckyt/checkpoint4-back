//GET && POST && PUT && DELETE
const express = require("express");
const app = express();
const port = 3000;
const connection = require("./config");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------------------------------------------------------------------------------

app.get("/api/artist", (req, res) => {
  connection.query("SELECT * from artist", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving artist");
    } else {
      res.json(results);
    }
  });
});

app.post("/api/url", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO table SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Error saving");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put("/api/url/:id", (req, res) => {
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

app.delete("/api/url/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM table WHERE id = ?", [idUrl], err => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

// ---------------------------------------------------------------------------------

app.listen(port, err => {
  if (err) {
    throw new Error("There is an error");
  }
  console.log("There is an port");
});
//

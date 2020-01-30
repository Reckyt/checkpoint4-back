//GET && POST && PUT && DELETE
const express = require("express");
const app = express();
const port = 3000;
const connection = require("./config");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// ----------------GET ALL SHOWS -----------------------------------------------------------------

app.get("/api/show", (req, res) => {
  connection.query("SELECT * from spectacle", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving shows");
    } else {
      res.json(results);
    }
  });
});

// -----------------GET ALL ARTIST----------------------------------------------------------------

app.get("/api/artist/:id", (req, res) => {
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

// -----------------POST A PRICE----------------------------------------------------------------

app.post("/api/command/:price", (req, res) => {
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
  console.log("ouverture du port");
});
//

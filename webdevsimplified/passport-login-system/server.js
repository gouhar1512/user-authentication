const express = require("express");
const app = express();

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", {
    "firstName": "Ushran",
    "lastName": "Gouhar"
  });
});

app.listen(3000);
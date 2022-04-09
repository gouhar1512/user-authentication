const express = require("express")
const app = express();

const users = [];
app.get("/users", (req, res) => {
  res.json(users);
})

const PORT = 3000;
app.listen(PORT);
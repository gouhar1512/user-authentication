const express = require("express");
const app = express();

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
})

app.post("/users", (req, res) => {
  const user = {
    name: req.body.name,
    password: req.body.password
  }
  console.log(user);
  users.push(user);
  res.status(201).send();

})

const PORT = 3000;
app.listen(PORT);
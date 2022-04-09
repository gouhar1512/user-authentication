const express = require("express");
const app = express();
const bcrypt = require("bcrypt");


app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
})

app.post("/users", async (req, res) => {

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
      name: req.body.name,
      password: hashedPassword
    }
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
  
});

app.post("/users/login", async(req, res) => {
  const user = users.find(user => req.body.name == user.name);
  if (user == null) {
    return res.status(400).send("Cannot find the user");
  }

  try {
    let passwordMatched = await bcrypt.compare(req.body.password, user.password);
    if (passwordMatched) {
      res.status(200).send("Logged in");
    } else {
      res.status(401).send("Not allowed");
    }
  } catch {
    res.status(500).send();
  }

})


const PORT = 3000;
app.listen(PORT);
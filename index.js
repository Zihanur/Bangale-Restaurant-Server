const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Wellcome our server");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  const chef = chefs.find((chf) => chf.id == id);
  res.send(chef);
});

app.listen(port, () => {
  console.log(`App Listening port: ${port}`);
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const fs = require("fs");

const PORT = 2601;

const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => {
  res.status(200).send(`<h2>Hello Express</h2>`);
});

let products = JSON.parse(fs.readFileSync("./data/products.json"));

app.get("/products", (req, res) => {
  res.status(200).send(products);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);

  fs.writeFileSync("./data/products.json", JSON.stringify(products));

  res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
});

app.patch("/products", (req, res) => {
  let index = products.findIndex((item) => item.id == req.query.id);

  for (let prop in products[index]) {
    for (let bodyProp in req.body) {
      if (prop == bodyProp) {
        products[index][prop] = req.body[bodyProp];
      }
    }
  }

  fs.writeFileSync("./data/products.json", JSON.stringify(products));

  res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
});

app.put("/products", (req, res) => {
  let index = products.findIndex((item) => item.id == req.query.id);
  products[index] = req.body;

  fs.writeFileSync("./data/products.json", JSON.stringify(products));

  res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
});

app.delete("/products", (req, res) => {
  let index = products.findIndex((item) => item.id == req.query.id);
  products.splice(index, 1);

  fs.writeFileSync("./data/products.json", JSON.stringify(products));

  res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
});

app.listen(PORT, () => {
  console.log("Server running Express on port".PORT);
});

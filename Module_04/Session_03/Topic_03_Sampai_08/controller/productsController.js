const fs = require("fs");

let products = JSON.parse(fs.readFileSync("./data/products.json"));

module.exports = {
  getProducts: (req, res) => {
    res.status(200).send(products);
  },
  postProducts: (req, res) => {
    products.push(req.body);

    fs.writeFileSync("./data/products.json", JSON.stringify(products));

    res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
  },
  patchProduct: (req, res) => {
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
  },
  putProduct: (req, res) => {
    let index = products.findIndex((item) => item.id == req.query.id);
    products[index] = req.body;

    fs.writeFileSync("./data/products.json", JSON.stringify(products));

    res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
  },
  deleteProduct: (req, res) => {
    let index = products.indexOf((item) => item.id == req.query.id);
    products.splice(index, 1);

    fs.writeFileSync("./data/products.json", JSON.stringify(products));

    res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
  },
};

const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 2600;

const server = http.createServer((req, res) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
  };

  if (req.url.includes("/products")) {
    var products = fs.readFileSync("./data/products.json");
    if (req.method == "GET") {
      res.writeHead(200, headers);
      res.end(products);
    } else if (req.method == "POST") {
      let body = [];
      products = JSON.parse(products);
      // prettier-ignore
      req.on("data", (chunk) => {
          body.push(chunk);
        }).on("end", () => {
          body = Buffer.concat(body).toString();
          products.push(JSON.parse(body));
          fs.writeFileSync("./data/products.json", JSON.stringify(products));
          res.writeHead(201, headers);
          res.end(fs.readFileSync("./data/products.json"));
        });
    }
  }
});

server.listen(port, () => {
  console.log("Server Running :", port);
});

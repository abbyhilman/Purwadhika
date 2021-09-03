const express = require("express");
const cors = require("cors");
const bearerToken = require("express-bearer-token");

const PORT = 3200;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bearerToken());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Express Rest Api Emmerce App</h1>");
});

const { userRouters, uploadRouter } = require("./route");

app.use("/users", userRouters);
app.use("/product", uploadRouter);

app.listen(PORT, () => console.log("Rest API running on port", PORT));

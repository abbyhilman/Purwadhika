const express = require("express");
const cors = require("cors");

const PORT = 3200;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Express Rest Api Emmerce App</h1>");
});

const { userRouters } = require("./route");

app.use("/users", userRouters);

app.listen(PORT, () => console.log("Rest API running on port", PORT));

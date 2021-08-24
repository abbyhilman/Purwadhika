const express = require("express");
const cors = require("cors");

const PORT = 3300;

const app = express();

app.use(cors());
app.use(express.json());

const { karyawanRouters } = require("./route");

// app.get("/", (req, res) => {
//   res.status(200).send(`<h1>Integrated mysql with express</h1>`);
// });

app.use("/data", karyawanRouters);

app.listen(PORT, () => console.log("Express server listening on port", PORT));

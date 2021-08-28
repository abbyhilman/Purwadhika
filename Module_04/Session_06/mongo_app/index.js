const express = require("express");
const cors = require("cors");

const PORT = 4400;
const app = express();

app.use(cors());
app.use(express.json());

let { MongoClient, ObjectId } = require("mongodb");
let url = `mongodb+srv://byhil:YPJiBGDYiDlFv0Jp@cluster0.b6boq.mongodb.net/kantor?retryWrites=true&w=majority`;

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err);
  }
  console.log("MongoDB connected");
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Integrated mongo db to express</h1>");
});

app.get("/get-data", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db("kantor");
    db.collection("karyawan")
      .find({})
      .sort({ usia: -1 })
      .toArray((err, docs) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json({
          message: "Get Data successfully",
          docs,
        });
      });
  });
});

app.post("/add-data", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db("kantor");
    db.collection("karyawan").insertMany(
      [{ nama: "Budi", report: "Laporan hasil kerja" }],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send(err);
        }
        console.log(`Inser success : `, result);
        res.status(200).send(result);
      }
    );
  });
});

app.get("/get-filter", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db("kantor");
    db.collection("karyawan")
      .find({ usia: { $gt: 20 } })
      .toArray((err, docs) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send(docs);
      });
  });
});

app.get("/get-group", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db("kantor");
    db.collection("karyawan")
      .aggregate([
        {
          $group: {
            _id: "$kota",
            avgUsia: { $avg: "$usia" },
            count: { $sum: 1 },
          },
        },
      ])
      .toArray((err, docs) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send(docs);
      });
  });
});

app.listen(PORT, () => console.log("Express server listening on port", PORT));

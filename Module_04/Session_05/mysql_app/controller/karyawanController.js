const { db } = require("../database");

module.exports = {
  getDataKaryawan: (req, res) => {
    let scriptQuery = `SELECT * FROM karyawan`;
    if (req.query.nama) {
      scriptQuery = `SELECT * FROM karyawan where nama = ${db.escape(
        req.query.nama
      )}`;
    }
    db.query(scriptQuery, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  },
  postDataKaryawan: (req, res) => {
    let { nama, usia, email, berat, kota, tahun, id_posisi } = req.body;
    let insertQuery = `Insert into karyawan values (null, ${db.escape(
      nama
    )}, ${db.escape(usia)}, ${db.escape(email)}, ${db.escape(
      berat
    )}, ${db.escape(kota)}, ${db.escape(tahun)},${db.escape(id_posisi)})`;
    db.query(insertQuery, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      db.query(
        `Select * from karyawan where nama = ${db.escape(nama)}`,
        (err2, result2) => {
          if (err2) res.status(500).send(err2);
          res
            .status(200)
            .send({ message: "Penambahan karyawan berhasil", data: result2 });
        }
      );
      // jangan mengirim double result karena akan menimbulkan error pada server
    });
  },
  patchKaryawan: (req, res) => {
    let dataUpdate = [];
    //looping yang akan mengenerate kolom dan data yang akan di update
    for (let prop in req.body) {
      dataUpdate.push(`${prop}=${db.escape(req.body[prop])}`);
    }

    let updateQuery = `UPDATE karyawan SET ${dataUpdate} where id_karyawan = ${req.params.id}`;
    db.query(updateQuery, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteKarayawan: (req, res) => {
    let deleteQuery = `DELETE from karyawan WHERE id_karyawan = ${db.escape(
      req.params.id
    )}`;
    db.query(deleteQuery, (err, result) => {
      if (err) res.status(500).send(err);
      db.query(`Select * from karyawan`, (err2, result2) => {
        if (err2) res.status(500).send(err2);
        res
          .status(200)
          .send({ message: "delete karyawan berhasil", data: result2 });
      });
    });
  },
};

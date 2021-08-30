const { db } = require("../database");

module.exports = {
  getDataUser: (req, res) => {
    let scriptQuery = `Select * from users`;
    db.query(scriptQuery, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json({
        message: "Success Get Data User",
        result,
      });
    });
  },
  addData: (req, res) => {
    let { username, password, email } = req.body;
    let insertQuery = `Insert into users values {null, ${db.escape(
      username
    )}, ${db.escape(password)}, ${db.escape(email)}}`;
    db.query(insertQuery, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      }
    });
  },
  editData: (req, res) => {
    let dataUpdate = [];
    for (let prop in req.body) {
      dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
    }
    let updateQuery = `Update users set ${dataUpdate} where id_users = ${req.params.id}`;
    db.query(updateQuery, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json({
        message: "Updated successfully",
        result,
      });
    });
  },
};

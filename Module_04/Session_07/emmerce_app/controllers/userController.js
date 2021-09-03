const { db } = require("../database");
const { createToken } = require("../helper/createToken");
const Crypto = require("crypto");
const transporter = require("../helper/nodemailer");

module.exports = {
  getDataUser: (req, res) => {
    req.body.password = Crypto.createHmac("sha1", "hash123")
      .update(req.body.password)
      .digest("hex");
    let scriptQuery = `Select * from users where username = ${db.escape(
      req.body.username
    )} and password = ${db.escape(req.body.password)}`;
    db.query(scriptQuery, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      if (result[0]) {
        let { id_users, username, password, email, role, status } = result[0];

        let token = createToken({
          id_users,
          username,
          password,
          email,
          role,
          status,
        });
        if (status != "verified") {
          res.status(200).send({ message: "Your account not verified" });
        } else {
          res
            .status(200)
            .send({ dataLogin: result[0], token, message: "Login Success" });
        }
      }
    });
  },
  addData: (req, res) => {
    let { username, password, email } = req.body;
    password = Crypto.createHmac("sha1", "hash123")
      .update(password)
      .digest("hex");
    let insertQuery = `Insert into users values (null, ${db.escape(
      username
    )}, ${db.escape(password)}, ${db.escape(email)}, 'user', 'unverified');`;
    db.query(insertQuery, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      }
      if (result.insertId) {
        let sqlGet = `Select * from users where id_users = ${result.insertId}`;
        db.query(sqlGet, (err2, result2) => {
          if (err2) {
            res.status(500).send(err2);
          }
          // tools data for create token
          let {
            id_users,
            username,
            password,
            email,
            role,
            status,
          } = result2[0];
          // create token
          let token = createToken({
            id_users,
            username,
            password,
            email,
            role,
            status,
          });

          let mail = {
            from: "Admin EmmerceApp <abbyhilman@gmail.com>",
            to: `${email}`,
            subject: "EmmerceApp Account Verification",
            html: `<a href="http://localhost:3000/authentication/${token}">Click here for verification your account</a>`,
          };

          transporter.sendMail(mail, (errMail, resMail) => {
            if (errMail) {
              res.status(200).json({
                message: "Registration Failed",
                success: false,
                err: errMail,
              });
            }
            res.status(200).json({
              message: "Registration Success, Check Your Email",
              userData: result2[0],
              success: true,
            });
          });
        });
      }
    });
  },
  verification: (req, res) => {
    let updateQuery = `Update users set status="verified" where id_users = ${req.user.id_users}`;

    db.query(updateQuery, (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json({
        message: "Account Verification",
        success: true,
      });
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
  getUsersById: (req, res) => {
    let getQueryById = `SELECT * FROM users`;
    if (req.query.id) {
      getQueryById = `SELECT * FROM users where id_users = ${db.escape(
        req.query.id
      )}`;
    }
    db.query(getQueryById, (err, results) => {
      if (err) res.status(500).send(err);
      res.status(200).send(results);
    });
  },
  getAllUsers: (req, res) => {
    let updateQuery = `Select * from users;`;
    console.log(updateQuery);
    db.query(updateQuery, (err, results) => {
      if (err) res.status(500).send(err);
      res.status(200).send(results);
    });
  },
};

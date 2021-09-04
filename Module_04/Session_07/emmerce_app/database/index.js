const mysql = require("mysql");

// create connection to mysql
const db = mysql.createPool({
  host: "85.10.205.173",
  user: "abby1234",
  password: "abby1234",
  database: "emmerce_app",
  port: 3306,
  multipleStatements: true,
});

// connect to mysql
db.getConnection((err) => {
  if (err) {
    return console.error(err);
  }
  console.log("MySQL Connect");
});

module.exports = { db };

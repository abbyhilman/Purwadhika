const mysql = require("mysql");

// create connection to mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "db_emmerce",
  port: 3306,
  multipleStatements: true,
});

// connect to mysql
db.connect((err) => {
  if (err) {
    return console.error(err);
  }
  console.log("MySQL Connect");
});

module.exports = { db };

const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'AL',
    password: '007@001',
    database: 'dbshutter',
    port: 3306,
    multipleStatements: true
})

db.connect((err) => {
    if (err) {
        return console.error(`error : ${err.message}`)
    }
    console.log(`Connected to MySQL Server`)
})

module.exports = { db }
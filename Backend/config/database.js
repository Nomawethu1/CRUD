const {Pool} = require("pg");

const pool = new Pool({
user: "Dineo",
host: "localhost",
database: "todo",
password: "1234",
port: 5432,
})

module.exports = pool;
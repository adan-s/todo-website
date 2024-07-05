const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "as@12345",
  database: "todo_scheme",
});

module.exports = connection;

const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: process.env.DB_HOST,
  user: 'root',
  password: 'root',
  database: 'appdb'
});

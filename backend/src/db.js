const mysql = require('mysql');
const mysqlCred = require('./../mysqlCred.json');

const initDatabase = () => {
  const sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), uid VARCHAR(255))";
  
  const con = mysql.createConnection(mysqlCred);
  con.connect((err) => {
    if (err) throw err;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log('Init done');
    });
  });
}

const query = () => {
  const con = mysql.createConnection(mysqlCred);
  con.connect((err) => {
    if (err) throw err;
    console.log('Connected');
  });
};

module.exports = {
  initDatabase,
  query,
};

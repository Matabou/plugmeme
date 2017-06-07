const mysql = require('mysql');
const mysqlCred = require('./../mysqlCred.json');

const con = mysql.createConnection(mysqlCred);
con.connect((err) => {
  if (err) throw err;
});

const sqlInit = "CREATE TABLE IF NOT EXISTS users (id VARCHAR(255) PRIMARY KEY, name VARCHAR(255))";
const sqlSelectUser = 'SELECT * FROM users WHERE id = ?';
const sqlCreateUser = `INSERT INTO users (id, name) VALUES (?, ?)`;

const initDatabase = () => {

  con.query(sqlInit, (err, result) => {
    if (err) throw err;
  });
}

const query = () => {
};

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    con.query(sqlSelectUser, [id] , (err, result) => {
      if (err) reject(err);
      if (!result.length) {
        const rand = Math.floor(Math.random() * 10000) + 1;
        const name = `anonymous${rand}`;
        con.query(sqlCreateUser, [id, name] , (err, result) => {
          if (err) reject(err);
          resolve({
            id,
            name,
          });
        });
      } else {
        resolve(result[0]);
      }
    });
  });
}

module.exports = {
  initDatabase,
  getUser,
};

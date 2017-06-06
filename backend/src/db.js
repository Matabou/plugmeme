const mysql = require('mysql');
const mysqlCred = require('./../mysqlCred.json');

const query = () => {
  const con = mysql.createConnection(mysqlCred);
  con.connect((err) => {
    if (err) throw err;
    console.log('Connected');
    return;
  });
};

module.exports = {
  query,
};

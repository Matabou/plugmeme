const mysql = require('mysql');
const mysqlCred = require('./../mysqlCred.json');

const con = mysql.createConnection(mysqlCred);
con.connect((err) => {
  if (err) throw err;
});

const sqlInitUsers = 'CREATE TABLE IF NOT EXISTS users (id VARCHAR(255) PRIMARY KEY, name VARCHAR(255), avatar VARCHAR(255))';
const sqlInitMemes = 'CREATE TABLE IF NOT EXISTS memes (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(255), title VARCHAR(255), grade INT, share BOOLEAN, create_at DATETIME, data LONGTEXT, FOREIGN KEY (user_id) REFERENCES users(id))';

const sqlSelectUser = 'SELECT * FROM users WHERE id = ?';
const sqlCreateUser = 'INSERT INTO users (id, name) VALUES (?, ?)';
const sqlUpdateUserName = 'UPDATE users SET name = ? WHERE id = ?';
const sqlUpdateAvatar = 'UPDATE users SET avatar = ? WHERE id = ?';

const sqlCreateMeme = 'INSERT INTO memes (user_id, title, grade, share, create_at, data) VALUES (?, ?, ?, ?, ?, ?)';
const sqlSelectMemesFomUser = 'SELECT id, title, grade, share, data FROM memes WHERE user_id = ? ORDER BY create_at DESC ';


const initDatabase = () => {

  con.query(sqlInitUsers);
  con.query(sqlInitMemes);
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
            avatar: null,
          });
        });
      } else {
        resolve(result[0]);
      }
    });
  });
}

const updateUsername = (id, name) => {
  return new Promise((resolve, reject) => {
    con.query(sqlUpdateUserName, [name, id] , (err, result) => {
      if (err) reject(err);
      resolve(name);
    });
  });
}

const updateAvatar = (id, avatar) => {
  return new Promise((resolve, reject) => {
    con.query(sqlUpdateAvatar, [avatar, id] , (err, result) => {
      if (err) reject(err);
      resolve(avatar);
    });
  });
}

const createMeme = (data) => {
  return new Promise((resolve, reject) => {
    con.query(sqlCreateMeme, [
        data.userId,
        data.title,
        0,
        data.share,
        new Date().toISOString().slice(0, 19).replace('T', ' '),
        data.img
      ], (err, result) => {
      if (err) reject(err);
      resolve();
    });
  });
}

const getMemeFromUser = (id) => {
  return new Promise((resolve, reject) => {
    con.query(sqlSelectMemesFomUser, [id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

module.exports = {
  initDatabase,
  updateUsername,
  updateAvatar,
  getUser,
  createMeme,
  getMemeFromUser,
};

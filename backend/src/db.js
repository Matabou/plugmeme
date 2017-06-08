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
const sqlDeleteMeme = 'DELETE FROM memes WHERE id = ?';
const sqlUpdateShareMeme = 'UPDATE memes SET share = ? WHERE id = ?';
const sqlUpdateGradeMeme = 'UPDATE memes SET grade = grade + ? WHERE id = ?';

const sqlSelectBestThreeMeme = 'SELECT id, title, data FROM memes WHERE share = true ORDER BY grade DESC LIMIT 3';
const sqlSelectNewThreeMeme = 'SELECT id, title, data FROM memes WHERE share = true ORDER BY create_at DESC LIMIT 3';
const sqlSelectRandThreeMeme = 'SELECT id, title, data FROM memes WHERE share = true ORDER BY RAND() DESC LIMIT 3';


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

const getMemeFromUser = (userId) => {
  return new Promise((resolve, reject) => {
    con.query(sqlSelectMemesFomUser, [userId], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const deleteMeme = (id) => {
  return new Promise((resolve, reject) => {
    con.query(sqlDeleteMeme, [id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const updateShareMeme = (id, share) => {
  return new Promise((resolve, reject) => {
    con.query(sqlUpdateShareMeme, [share, id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const updateGradeMeme = (id, inc) => {
  return new Promise((resolve, reject) => {
    con.query(sqlUpdateGradeMeme, [inc, id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const getMemeForHome = () => {
  return new Promise((resolve, reject) => {
    const data = {};

    con.query(sqlSelectBestThreeMeme, (err, result) => {
      if (err) reject(err);
      data.best = result;
      con.query(sqlSelectNewThreeMeme, (err, result) => {
        if (err) reject(err);
        data.new = result;
        con.query(sqlSelectRandThreeMeme, (err, result) => {
          if (err) reject(err);
          data.rand = result;
          resolve(data);
        });
      });
    });
  });
}

const getMemeSearch = (title, creator, sort) => {
  const sqlSelectSearchMeme = `SELECT memes.id, title, grade, name, data FROM memes JOIN users on memes.user_id = users.id WHERE share = true AND title LIKE '%${title}%' AND name LIKE '%${creator}%' ORDER BY ${sort} DESC`;  

  return new Promise((resolve, reject) => {
    con.query(sqlSelectSearchMeme, (err, result) => {
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
  deleteMeme,
  updateShareMeme,
  updateGradeMeme,
  getMemeForHome,
  getMemeSearch,
};

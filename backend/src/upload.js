const multer = require('multer');

const uploading = multer({
  dest: __dirname + '../uploads',
});

const avatarUpload = uploading.single('avatar');

module.exports = {
  avatarUpload,
};
const multer = require('multer');

const uploading = multer({
  dest: __dirname + '/../uploads',
});

const fileUpload = uploading.single('file');

module.exports = {
  fileUpload,
};
const multer = require('multer');

const uploading = multer({
  dest: __dirname + '/public/uploads',
});

const fileUpload = uploading.single('file');

module.exports = {
  fileUpload,
};
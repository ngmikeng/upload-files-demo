const multer = require('multer');
const responseHandler = require('../helpers/responseHandler');

const DIR = '../uploads/';
const upSingle = multer({dest: DIR}).single('file');

module.exports = {
  uploadSingle: uploadSingle
};

function uploadSingle(req, res, next) {
  console.log('upload');
  upSingle(req, res, function (err) {
    if (err) {
      return next(err);
    }

    return res.json(responseHandler.responseSuccess({ message: 'Uploaded Successfully' }));
  });
}

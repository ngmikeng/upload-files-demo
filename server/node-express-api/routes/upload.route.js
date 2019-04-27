const express = require('express');
const router = express.Router();
const uploadCtrl = require('../controllers/upload.controller');

router.route('/single')
  .post(uploadCtrl.uploadSingle);

  module.exports = router;

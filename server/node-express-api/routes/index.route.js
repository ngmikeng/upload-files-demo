const express = require('express');
const uploadRoutes = require('./upload.route');

const router = express.Router();

router.use('/upload', uploadRoutes);

module.exports = router;

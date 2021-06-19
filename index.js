const express = require('express');
const router = express.Router();

const uploadController = require('./controller/upload');

router.post('/upload', uploadController.upload);
module.exports = router;
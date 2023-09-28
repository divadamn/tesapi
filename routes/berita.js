const express = require('express');
const router = express.Router();
const db = require('../database/mysql');
const controller = require('../controller/index');


router.get('/', controller.berita.getAll);
router.post('/', controller.berita.post);

module.exports = router;
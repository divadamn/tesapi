const express = require('express');
const router = express.Router();
const db = require('../database/mysql');
const controller = require('../controller/index');


router.get('/', controller.produk.getAll);
router.post('/', controller.produk.post);

module.exports = router;
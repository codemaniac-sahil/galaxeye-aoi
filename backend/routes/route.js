const express = require('express');
const { findTile } = require('../controller/tileController');
const router = express.Router();


router.post('/tiles', findTile);

module.exports = router;

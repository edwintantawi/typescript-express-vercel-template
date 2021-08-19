const express = require('express');
const { AdminController } = require('../controllers');

const router = express.Router();

router.get('/', AdminController.getAll);

module.exports = router;

const express = require('express');
const { UserController } = require('../controllers');

const router = express.Router();

router.get('/', UserController.getAll);

module.exports = router;

const router = require('express').Router();

const controller = require('../controller/userController');

router.get('/', controller.getAllUsers);

module.exports = router;
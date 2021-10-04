const express = require('express');
const home_router = express.Router();
const user_control = require('../controller/user_control');





home_router.get('/', user_control.find)


module.exports = home_router;
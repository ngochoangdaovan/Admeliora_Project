const express = require('express');
const home_router = express.Router();
const user_control = require('../controller/user_control');





home_router.get('/', user_control.find);
home_router.get('/:id', user_control.findByID)


module.exports = home_router;
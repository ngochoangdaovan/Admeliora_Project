const express = require('express');
const router = express.Router();
const UsersRoutes = require('./Users.routes');
const PhoneNumberRoutes = require('./PhoneNumber.routes');



router.use('/', UsersRoutes);

module.exports = router;
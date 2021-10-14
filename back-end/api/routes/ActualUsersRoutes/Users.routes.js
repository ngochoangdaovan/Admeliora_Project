const express = require('express');
const router = express.Router()
const Controller = require('../../controller').ActualUserControl;
const UsersControl = Controller.UsersController;
const PhoneRoutes = require('./PhoneNumbers.routes')



router.get('/', UsersControl.showAllUsers);
router.post('/', UsersControl.addUser);
router.use('/phone', PhoneRoutes)






module.exports = router;


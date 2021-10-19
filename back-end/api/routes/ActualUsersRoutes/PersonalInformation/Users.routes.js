    const express = require('express');
const router = express.Router()
const Controller = require('../../../controller').ActualUserControl;
const UsersControl = Controller.UsersController;
const auth = require('../../../controller/ActualUser/auth')


// user requests handlers
router.get('/profile', auth.AuthenticateToken, UsersControl.getInformation)



router.post('/register', UsersControl.registerUser);
router.post('/login')










module.exports = router;


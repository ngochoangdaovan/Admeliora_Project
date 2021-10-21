const express = require('express');
const router = express.Router();


const Controller = require('../../../controller');

const PhoneControl = Controller.ActualUserControl.PhoneNumbersController
const auth = Controller.ActualUserControl.Auth


router.get('/',  auth.AuthenticateToken, PhoneControl.getAllPhoneNumbersByID);
router.post('/', auth.AuthenticateToken, PhoneControl.addPhone);
router.put('/');
router.delete('/', auth.AuthenticateToken, PhoneControl.deleteAll);



module.exports = router;



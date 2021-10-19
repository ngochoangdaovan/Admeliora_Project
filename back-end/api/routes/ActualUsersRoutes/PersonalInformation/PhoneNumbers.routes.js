const express = require('express');
const router = express.Router();


const Controller = require('../../../controller');

const PhoneControl = Controller.ActualUserControl.PhoneNumbersController
const auth = Controller.ActualUserControl.Auth


router.get('/');
router.post('/', auth.AuthenticateToken, PhoneControl.addPhone);
router.put('/');
router.delete('/:phone_id');



module.exports = router;



const express = require('express');
const router = express.Router()

const PhoneControl = require('../../controller').ActualUserControl.PhoneNumbersController


router.get('/:userID&:phoneID');
router.post('/:userID&:phoneID');
router.put('/:userID&:phoneID');
router.delete('/:userID&:phoneID');



module.exports = router;


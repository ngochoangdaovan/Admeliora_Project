const express = require('express');
const router = express.Router();


const Controller = require('../../../controllers');

const PhoneControl = Controller.ActualUserControl.PhoneNumbersController
const auth = Controller.ActualUserControl.Auth
const requestLog = require('../../../middleWares/requestLog')






/*------------------------------------------------------GET------------------------------------------------------------*/
// http://localhost:5000/api/user/phone
router.get('/', requestLog,  auth.AuthenticateToken, PhoneControl.getAllPhoneNumbersByID);

/*------------------------------------------------------POST------------------------------------------------------------*/
// http://localhost:5000/api/users/phone/add
// this api required a req.body that is like {phone : '0123456789'}
router.post('/add', requestLog, auth.AuthenticateToken, PhoneControl.addPhone);

/*------------------------------------------------------PUT------------------------------------------------------------*/
// this api is to update the default address
// http://localhost:5000/api/users/phone/update
// this api required a req.body that is like {phone : '0123456789'}
router.put('/update', requestLog, auth.AuthenticateToken, PhoneControl.updateDefault);

/*------------------------------------------------------DELETE------------------------------------------------------------*/
// http://localhost:5000/api/users/phone/delete/0123456789
// delete is to delete a specific phone that is putted in the parameter like this
router.delete('/delete/:phone', requestLog, auth.AuthenticateToken, PhoneControl.delete);





module.exports = router;



const express = require('express');
const router = express.Router();


const Controller = require('../../../controller');

const PhoneControl = Controller.ActualUserControl.PhoneNumbersController
const auth = Controller.ActualUserControl.Auth






/*------------------------------------------------------GET------------------------------------------------------------*/
// http://localhost:5000/api/user/phone
router.get('/',  auth.AuthenticateToken, PhoneControl.getAllPhoneNumbersByID);

/*------------------------------------------------------POST------------------------------------------------------------*/
// http://localhost:5000/api/users/phone/add
// this api required a req.body that is like {phone : '0123456789'}
router.post('/add', auth.AuthenticateToken, PhoneControl.addPhone);

/*------------------------------------------------------PUT------------------------------------------------------------*/
// this api is to update the default address
// http://localhost:5000/api/users/phone/update
// this api required a req.body that is like {phone : '0123456789'}
router.put('/update', auth.AuthenticateToken, PhoneControl.updateDefault);

/*------------------------------------------------------DELETE------------------------------------------------------------*/
// http://localhost:5000/api/users/phone/delete/0123456789
// delete is to delete a specific phone that is putted in the parameter like this
router.delete('/delete/:phone', auth.AuthenticateToken, PhoneControl.delete);





module.exports = router;



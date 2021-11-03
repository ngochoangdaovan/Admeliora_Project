const express = require('express');
const AddressRouter = express.Router();
const ActualUserControl = require('../../../controllers').ActualUserControl
const AddressControl = ActualUserControl.AddressesController
const auth = require('../../../controllers/ActualUser/auth')
const requestLog = require('../../../middleWares/requestLog')






/*------------------------------------------------------GET------------------------------------------------------------*/


/*
    get all user's addresses with this url
    http://localhost:5000/api/user/address
*/ 
AddressRouter.get('/', requestLog, auth.AuthenticateToken, AddressControl.getAllAddress)


/*
get detail by user_id via url  http://localhost:5000/api/user/address/detail/address_id <= by push address's id here
*/ 
AddressRouter.get('/detail/:address_id', requestLog, auth.AuthenticateToken, AddressControl.getDetail)


/*------------------------------------------------------POST------------------------------------------------------------*/
// http://localhost:5000/api/user/address/add
/*
    this api required a body as in the example below
    {
        "province": "Gia Lai",
        "district": "Chu Se",
        "street"    : "H'Bong",
        "detail_address": "thon IASA"
        }
*/ 
AddressRouter.post('/add', requestLog, auth.AuthenticateToken, AddressControl.addAddress)

/*------------------------------------------------------PUT------------------------------------------------------------*/
// update need a body contains fields that need to be updated
// just put in it the properties and new value
AddressRouter.put('/update/:address_id', requestLog, auth.AuthenticateToken, AddressControl.updateAddresses)
/*------------------------------------------------------DELETE------------------------------------------------------------*/

// delete ist to delete a specific address with its id in the parameter of the request
AddressRouter.delete('/delete/:address_id', requestLog, auth.AuthenticateToken, AddressControl.delete)


module.exports = AddressRouter;
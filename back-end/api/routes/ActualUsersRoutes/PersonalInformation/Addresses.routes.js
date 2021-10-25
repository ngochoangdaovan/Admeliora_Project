const express = require('express');
const AddressRouter = express.Router();
const ActualUserControl = require('../../../controller').ActualUserControl
const AddressControl = ActualUserControl.AddressesController
const auth = require('../../../controller/ActualUser/auth')





/*------------------------------------------------------GET------------------------------------------------------------*/
AddressRouter.get('/', auth.AuthenticateToken, AddressControl.get)
AddressRouter.get('/all', auth.AuthenticateToken, AddressControl.getAllAddress)


/*------------------------------------------------------POST------------------------------------------------------------*/
// http://localhost:5000/user/address/add
/*
    this api required a body as in the example below
    {
        "province": "Gia Lai",
        "district": "Chu Se",
        "street"    : "H'Bong",
        "detail_address": "thon IASA"
        }
*/ 
AddressRouter.post('/add', auth.AuthenticateToken, AddressControl.addAddress)

/*------------------------------------------------------PUT------------------------------------------------------------*/
// update need a body contains fields that need to be updated
// just put in it the properties and new value
AddressRouter.put('/update/:address_id', auth.AuthenticateToken, AddressControl.updateAddresses)
/*------------------------------------------------------DELETE------------------------------------------------------------*/

// delete ist to delete a specific address with its id in the parameter of the request
AddressRouter.delete('/delete/:address_id', auth.AuthenticateToken, AddressControl.delete)


module.exports = AddressRouter;
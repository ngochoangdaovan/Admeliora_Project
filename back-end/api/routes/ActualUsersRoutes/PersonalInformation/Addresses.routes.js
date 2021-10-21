const express = require('express');
const AddressRouter = express.Router();
const AddressesController = require('../../../controller').ActualUserControl.AddressesController
const auth = require('../../../controller/ActualUser/auth')






AddressRouter.post('/add', auth.AuthenticateToken, AddressesController.addAddress)
AddressRouter.get('/', auth.AuthenticateToken, AddressesController.get)




module.exports = AddressRouter;
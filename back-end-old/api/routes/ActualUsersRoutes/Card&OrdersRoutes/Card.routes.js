
'use strict';

const express = require('express');
const router = express.Router();
const ActualUserControl = require('../../../controllers').ActualUserControl
const CartController = ActualUserControl.CardController
const auth = ActualUserControl.Auth
const requestLog = require('../../../middleWares/requestLog')





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', requestLog, auth.AuthenticateToken, CartController.getAll)
/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', requestLog, auth.AuthenticateToken, CartController.addToCart)
/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/quantity/:id', requestLog, auth.AuthenticateToken, CartController.update)
/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:id', requestLog, auth.AuthenticateToken, CartController.delete)






module.exports = router;









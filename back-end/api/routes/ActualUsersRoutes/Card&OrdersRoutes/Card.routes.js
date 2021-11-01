
'use strict';

const express = require('express');
const router = express.Router();
const ActualUserControl = require('../../../controllers').ActualUserControl
const CartController = ActualUserControl.CardController
const auth = ActualUserControl.Auth





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', auth.AuthenticateToken, CartController.getAll)
/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', auth.AuthenticateToken, CartController.addToCart)
/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/quantity/:id', auth.AuthenticateToken, CartController.update)
/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:id', auth.AuthenticateToken, CartController.delete)






module.exports = router;









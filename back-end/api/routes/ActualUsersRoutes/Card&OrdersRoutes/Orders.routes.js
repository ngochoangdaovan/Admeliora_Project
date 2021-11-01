'use strict';

const express = require('express');
const router = express.Router();
const ActualUserControl = require('../../../controllers').ActualUserControl
const OrderController  = ActualUserControl.OrderController
const auth = ActualUserControl.Auth






/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', auth.AuthenticateToken, OrderController.getAll)
router.get('/detail/:order_id', auth.AuthenticateToken, OrderController.getDetails)
/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/pay', auth.AuthenticateToken, OrderController.Pay)
/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:order_id',auth.AuthenticateToken, OrderController.update)
/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:order_id', auth.AuthenticateToken, OrderController.delete)




module.exports = router;







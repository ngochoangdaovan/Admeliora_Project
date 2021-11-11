'use strict';

const express = require('express');
const router = express.Router();
const ActualUserControl = require('../../../controllers').ActualUserControl
const OrderController  = ActualUserControl.OrderController
const auth = ActualUserControl.Auth
const requestLog = require('../../../middleWares/requestLog')





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', requestLog, auth.AuthenticateToken, OrderController.getAll)
router.get('/detail/:order_id', requestLog, auth.AuthenticateToken, OrderController.getDetails)
/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/pay', requestLog, auth.AuthenticateToken, OrderController.Pay)
/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:order_id',requestLog, auth.AuthenticateToken, OrderController.update)
/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:order_id', requestLog, auth.AuthenticateToken, OrderController.delete)




module.exports = router;







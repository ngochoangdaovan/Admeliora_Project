
'use strict';

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers');
const Warehouse = Controller.ProductControl.WarehouseController
const auth = Controller.ActualUserControl.Auth
const requestLog = require('../../middleWares/requestLog');





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', auth.ProductAccessAllow, Warehouse.getAll)

/*
we can get product based on product line, price threshold
http://localhost:5000/api/products/filter_by_product_line?product_line_id=1&price=100

*/ 
router.get('/filter', requestLog, auth.ProductAccessAllow, Warehouse.filterBy)

/*
http://localhost:5000/api/products/detail/1&1
*/ 
router.get('/detail/:product_line_id&:color_id', requestLog, auth.ProductAccessAllow, Warehouse.getByColorAndLine)

/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken,Warehouse.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:product_line_id', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, Warehouse.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete', requestLog, auth.AuthenticateToken,auth.AuthenticateAdminToken, Warehouse.delete)




module.exports = router;


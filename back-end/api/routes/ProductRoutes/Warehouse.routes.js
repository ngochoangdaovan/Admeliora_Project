
'use strict';

const express = require('express');
const router = express.Router();
const Controller = require('../../controller');
const Warehouse = Controller.ProductControl.WarehouseController
const auth = Controller.ActualUserControl.Auth





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', Warehouse.getAll)

/*
we can get product based on product line, price threshold
http://localhost:5000/api/products/filter_by_product_line?product_line_id=1&price=100

*/ 
router.get('/filter', Warehouse.filterBy)

/*
http://localhost:5000/api/products/detail/1&1
*/ 
router.get('/detail/:product_line_id&:color_id', Warehouse.getByColorAndLine)

/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', auth.AuthenticateToken, auth.AuthenticateAdminToken,Warehouse.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:product_line_id', auth.AuthenticateToken, auth.AuthenticateAdminToken, Warehouse.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete', auth.AuthenticateToken,auth.AuthenticateAdminToken, Warehouse.delete)




module.exports = router;


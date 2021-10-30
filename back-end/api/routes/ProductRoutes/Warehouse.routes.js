
'use strict';

const express = require('express');
const router = express.Router();
const Controller = require('../../controller');
const Warehouse = Controller.ProductControl.WarehouseController
const auth = Controller.ActualUserControl.Auth





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', Warehouse.getAll)
router.get('/:product_line_id', Warehouse.get )
router.get('/:product_line_id/:color_id', Warehouse.getByColorAndLine)

/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', auth.AuthenticateAdminToken,Warehouse.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:product_line_id', auth.AuthenticateAdminToken, Warehouse.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete', auth.AuthenticateAdminToken, Warehouse.delete)




module.exports = router;


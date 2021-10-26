

'use strict';

const express = require('express');
const router = express.Router();
const ProductControl = require('../../controller').ProductControl;
const Warehouse = ProductControl.WarehouseController





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', Warehouse.getAll)
router.get('/:product_line_id', Warehouse.get )
router.get('/:product_line_id/:color_id', Warehouse.getByColorAndLine)

/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', Warehouse.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:product_line_id', Warehouse.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete', Warehouse.delete)






module.exports = router;


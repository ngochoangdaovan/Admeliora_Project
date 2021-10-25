
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controller');
const productColorControl = controller.ProductControl.ColorController





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/:product_line_id', productColorControl.getAll)
router.get('/:product_line_id/:color_id', productColorControl.get)


/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', productColorControl.add)


/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:color_id', productColorControl.delete)


module.exports = router;



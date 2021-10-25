
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controller');
const auth = controller.ActualUserControl.Auth;
const productLine = controller.ProductControl.ProductLinesController;



/*------------------------------------------------------GET------------------------------------------------------------*/

router.get('/', productLine.getAll)
router.get('/:product_line_id', productLine.get)

/*------------------------------------------------------POST------------------------------------------------------------*/
// http://localhost:5000/products/productLines/add
router.post('/add', productLine.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
// http://localhost:5000/products/productLines/update/:product_line_id 
// product_line_id is a required params
router.put('/update/:product_line_id', productLine.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
// http://localhost:5000/products/productLines/delete/:product_line_id
router.delete('/delete/:product_line_id', productLine.delete)






module.exports = router;

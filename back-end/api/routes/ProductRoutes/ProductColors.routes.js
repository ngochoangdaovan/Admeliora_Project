
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controller');
const productColorControl = controller.ProductControl.ColorController
const auth = controller.ActualUserControl.Auth





/*------------------------------------------------------GET------------------------------------------------------------*/
/*
    - get all color related to a product line
    - role any one can request this
    - url http//localhost:5000/api/products/colors/1 <= product line id here
*/ 
router.get('/:product_line_id', productColorControl.getAll)


/*
    - get specific product line colors by line's id and color's id
    - role: any
    - url : http://localhost:5000/api/products/colors/1/1 <= product line id and color id one by one

*/ 
router.get('/:product_line_id/:color_id', productColorControl.get)


/*------------------------------------------------------POST------------------------------------------------------------*/
/*
    - create new color 
    - role: admin
    - required a req.body = 
    {
        product_line_id : 1,
        color_name  : "black"
    }
    - url : http://localhost:5000/api/products/colors/add

*/ 
router.post('/add', auth.AuthenticateToken, auth.AuthenticateAdminToken ,productColorControl.add)


/*------------------------------------------------------DELETE------------------------------------------------------------*/
/*
    - delete color by color's id 
    - role: admin
    - required color_id at the end of the url
    - url : http://localhost:5000/api/products/colors/1 <= this is the color id
*/ 
router.delete('/delete/:color_id', auth.AuthenticateToken, auth.AuthenticateAdminToken, productColorControl.delete)


module.exports = router;



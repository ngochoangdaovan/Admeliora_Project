
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers');
const auth = controller.ActualUserControl.Auth;
const productLine = controller.ProductControl.ProductLinesController;

// require requestLog 
const requestLog = require('../../middleWares/requestLog');



/*------------------------------------------------------GET------------------------------------------------------------*/

/*
    - get all product line and detail of a specific product line 
    - role : any
    - url 1: http://localhost:5000/api/products/productLines/
    - url 2: http://localhost:5000/api/products/productLines/1 <= this is the product line id
*/ 
router.get('/',requestLog, productLine.getAll) // get all product line
router.get('/:product_line_id', requestLog,productLine.get) // get details of a specific product line 

/*------------------------------------------------------POST------------------------------------------------------------*/
/*
     create new product line
    - role: admin
    - require a body: 
                    {
                        category_id   : 1,
                        name          : " Eyes Polo",
                        material      : "Chất liệu: vải cá sấu 100% cotton co dãn 4 chiều.",
                        information   : " Áo thun có cổ được may chi tiết lông mày và lông mi kết hợp với nút áo, tạo nên một con mắt tuyệt đẹp.",
                        from          : 'Viet Nam',
                        price         : 320000
                    }
    - url: http://localhost:5000/api/products/productLines/add
*/ 
router.post('/add',requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, productLine.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
/*
    - update the product line information
    - body: {
            
                category_id   : NEW INFO,
                name          : "NEW INFO",
                material      : "NEW INFO",
                information   : "NEW INFO",
                from          : 'NEW INFO',
                price         : NEW INFO
            }
    - body can be all these properties or just one of them, but it required explicit property's name
    - url: http://localhost:5000/api/products/productLines/update/:product_line_id 
    - product_line_id is a required params

*/ 
router.put('/update/:product_line_id',requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, productLine.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
// delete specific product line by product_line_id
// url: http://localhost:5000/api/products/productLines/delete/:product_line_id
router.delete('/delete/:product_line_id', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken ,productLine.delete)




module.exports = router;

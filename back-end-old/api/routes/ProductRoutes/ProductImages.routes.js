
'use strict';

const express = require('express');
const router = express.Router();
const ProductControl = require('../../controllers').ProductControl;
const ImageControl = ProductControl.ImagesController
const productImageUpload = require('../../middleWares/imageHandler/productImg')
const path = require('path');
const ActualUserControl = require('../../controllers').ActualUserControl
const auth = ActualUserControl.Auth
const requestLog = require('../../middleWares/requestLog')




/*------------------------------------------------------GET------------------------------------------------------------*/
/*
    - get image via this url, require image name at the end
    - url:  http://localhost:5000/api/products/images/163569068931579366492_173115284424984_4358949871956117947_n.jpg
*/
router.use(express.static(path.join(path.resolve(),'data/product_images')))

/*------------------------------------------------------POST-----------------------------------------------------------*/
/* 
    - this api need a body of form data contain color_id and an array of chosen images.
    - role: admin
    - url : http://localhost:5000/api/products/images/upload

*/
router.post('/upload', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, productImageUpload.array('product_images'), ImageControl.add)


/*------------------------------------------------------DELETE---------------------------------------------------------*/
/* 
    - delete image by the image id
    - role: admin
    - url : http://localhost:5000/api/products/images/delete/1 <= this is the image's id

*/

router.delete('/delete/:image_id',requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, ImageControl.delete)







module.exports = router;

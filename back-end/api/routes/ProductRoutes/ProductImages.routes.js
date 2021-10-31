
'use strict';

const express = require('express');
const router = express.Router();
const ProductControl = require('../../controller').ProductControl;
const ImageControl = ProductControl.ImagesController
const productImageUpload = require('../../middleWares/imageHandler/productImg')
const path = require('path');
const ActualUserControl = require('../../controller').ActualUserControl
const auth = ActualUserControl.Auth





/*------------------------------------------------------GET------------------------------------------------------------*/
router.use(express.static(path.join(path.resolve(),'data/product_images')))

/*------------------------------------------------------POST-----------------------------------------------------------*/
// this api need a body contain color_id and an array of images
router.post('/upload', auth.AuthenticateToken, auth.AuthenticateAdminToken, productImageUpload.array('product_images'), ImageControl.add)


/*------------------------------------------------------DELETE---------------------------------------------------------*/
router.delete('/delete/:image_id', auth.AuthenticateToken, auth.AuthenticateAdminToken, ImageControl.delete)







module.exports = router;

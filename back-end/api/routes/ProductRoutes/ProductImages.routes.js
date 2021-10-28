
'use strict';

const express = require('express');
const router = express.Router();
const ProductControl = require('../../controller').ProductControl;
const ImageControl = ProductControl.ImagesController
const productImageUpload = require('../../middleWares/imageHandler/productImg')
const path = require('path');





/*------------------------------------------------------GET------------------------------------------------------------*/
// console.log(path.join(path.resolve(),'data/product_images'))
// router.use(express.static('./data/product_images'))
router.use(express.static(path.join(path.resolve(),'data/product_images')))

/*------------------------------------------------------POST-----------------------------------------------------------*/
// this api need a body contain color_id and an array of images
router.post('/upload', productImageUpload.array('product_images'), ImageControl.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/')

/*------------------------------------------------------DELETE---------------------------------------------------------*/
router.delete('/')







module.exports = router;

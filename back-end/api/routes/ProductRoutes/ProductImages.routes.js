
'use strict';

const express = require('express');
const router = express.Router();
const ProductControl = require('../../controller').ProductControl;
const ImageControl = ProductControl.ImagesController





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/:color_id', ImageControl.getAll) 

/*------------------------------------------------------POST-----------------------------------------------------------*/
// this api need a body contain color_id and an array of images
router.post('/', ImageControl.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/')

/*------------------------------------------------------DELETE---------------------------------------------------------*/
router.delete('/')







module.exports = router;

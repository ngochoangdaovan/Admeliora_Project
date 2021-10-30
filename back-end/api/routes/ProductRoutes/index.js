'use strict';



const express = require('express');
const router = express.Router();
const warehouse = require('./Warehouse.routes');
const productLine = require('./ProductLines.routes');
const productColor = require('./ProductColors.routes');
const productImage = require('./ProductImages.routes');
const Sizes = require('./Sizes.routes');
const Categories = require('./Categories.routes')



router.use('/productLines', productLine)
router.use('/colors', productColor)
router.use('/sizes', Sizes)
router.use('/categories', Categories)
router.use('/images', productImage)
router.use('/', warehouse)












module.exports = router




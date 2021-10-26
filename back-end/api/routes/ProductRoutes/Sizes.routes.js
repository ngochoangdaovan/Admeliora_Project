
'use strict';

const express = require('express');
const router = express.Router();
const ProductControl = require('../../controller').ProductControl;
const SizeControl = ProductControl.SizeController





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', SizeControl.getAll)
router.get('/:size_id', SizeControl.get)
/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', SizeControl.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:size_id', SizeControl.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:size_id', SizeControl.delete)








module.exports = router;

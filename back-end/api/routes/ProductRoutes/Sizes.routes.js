
'use strict';

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers');
const SizeControl = Controller.ProductControl.SizeController
const auth = Controller.ActualUserControl.Auth






/*------------------------------------------------------GET------------------------------------------------------------*/
/*

*/ 

router.get('/', SizeControl.getAll)
router.get('/:category_id', SizeControl.getAllByCategory)
router.get('/:size_id', SizeControl.get)
/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', auth.AuthenticateToken, auth.AuthenticateAdminToken, SizeControl.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:size_id', auth.AuthenticateToken, auth.AuthenticateAdminToken, SizeControl.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:size_id', auth.AuthenticateToken, auth.AuthenticateAdminToken, SizeControl.delete)








module.exports = router;

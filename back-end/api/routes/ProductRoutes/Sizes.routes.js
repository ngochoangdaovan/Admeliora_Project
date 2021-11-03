
'use strict';

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers');
const SizeControl = Controller.ProductControl.SizeController
const auth = Controller.ActualUserControl.Auth
const requestLog = require('../../middleWares/requestLog');







/*------------------------------------------------------GET------------------------------------------------------------*/
/*

*/ 

router.get('/', requestLog, SizeControl.getAll)
router.get('/:category_id', requestLog, SizeControl.getAllByCategory)
router.get('/:size_id', requestLog, SizeControl.get)
/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, SizeControl.add)

/*------------------------------------------------------PUT------------------------------------------------------------*/
router.put('/update/:size_id', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, SizeControl.update)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:size_id', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, SizeControl.delete)








module.exports = router;

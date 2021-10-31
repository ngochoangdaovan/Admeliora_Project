const express = require('express');
const router = express.Router();
const auth = require('../../controller/ActualUser/auth');
const ProductControl = require('../../controller').ProductControl
const CategoryControl = ProductControl.CategoryController





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', auth.AuthenticateToken, auth.AuthenticateAdminToken, CategoryControl.getAll)

/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', auth.AuthenticateToken, auth.AuthenticateAdminToken, CategoryControl.addNewCategory)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:category_id', auth.AuthenticateToken, auth.AuthenticateAdminToken, CategoryControl.delete)











module.exports = router



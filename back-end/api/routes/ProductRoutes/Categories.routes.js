const express = require('express');
const router = express.Router();
const auth = require('../../controller/ActualUser/auth');
const ProductControl = require('../../controller').ProductControl
const CategoryControl = ProductControl.CategoryController





/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/', auth.AuthenticateAdminToken, CategoryControl.getAll)

/*------------------------------------------------------POST------------------------------------------------------------*/
router.post('/add', auth.AuthenticateAdminToken, CategoryControl.addNewCategory)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
router.delete('/delete/:category_id', auth.AuthenticateAdminToken, CategoryControl.delete)











module.exports = router



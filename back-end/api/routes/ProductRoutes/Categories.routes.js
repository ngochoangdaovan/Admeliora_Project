const express = require('express');
const router = express.Router();
const auth = require('../../controllers/ActualUser/auth');
const ProductControl = require('../../controllers').ProductControl
const CategoryControl = ProductControl.CategoryController
const requestLog = require('../../middleWares/requestLog')




/*------------------------------------------------------GET------------------------------------------------------------*/
/*
    - get all categories 
    - only admin 
    - url: http://localhost:5000/api/products/categories
*/ 
router.get('/', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, CategoryControl.getAll)

/*------------------------------------------------------POST------------------------------------------------------------*/
/*
    - add new category
    - role: admin only
    - url : http://localhost:5000/api/products/categories/add
*/ 
router.post('/add', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, CategoryControl.addNewCategory)

/*------------------------------------------------------DELETE------------------------------------------------------------*/
/*
    - delete category by category id
    - http://localhost:5000/api/products/categories
    - url : http://localhost:5000/api/products/categories/delete/1 <= this is the category id
*/ 
router.delete('/delete/:category_id', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, CategoryControl.delete)











module.exports = router



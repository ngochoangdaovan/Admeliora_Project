
// import and use router
const express = require('express');
const router = express.Router();
const auth = require('../controllers/ActualUser').Auth;
const path = require('path');
const requestLog = require('../middleWares/requestLog')

// import banner controller
const bannerController = require('../controllers/Banners');


// use banner static routes
router.use(express.static(path.join(path.resolve(),'data/banner_images')))

// @route   GET api/banner/all
router.get('/all', requestLog, bannerController.getAllPageImages);


// add banner
router.post('/add', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, bannerController.store);



// delete banner
router.delete('/delete/:image_name', requestLog, auth.AuthenticateToken, auth.AuthenticateAdminToken, bannerController.deletePageImage);


module.exports = router;
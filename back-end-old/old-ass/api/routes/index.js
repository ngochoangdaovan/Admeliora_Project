
const express = require('express');
const router = express.Router() ;

const ActualUser = require('./ActualUsersRoutes')
const ProductRoutes = require('./ProductRoutes')
const bannerRoutes = require('./bannerRoutes')
const Controller = require('../controllers')



router.use('/user', ActualUser)
router.use('/products', ProductRoutes)
router.use('/banner', bannerRoutes)


// router.delete('/resetDB', Controller.dataReset)

module.exports = router;
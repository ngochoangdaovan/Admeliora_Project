
const express = require('express');
const router = express.Router() ;

const ActualUser = require('./ActualUsersRoutes')
const ProductRoutes = require('./ProductRoutes')
const bannerRoutes = require('./bannerRoutes')
const Controller = require('../controllers')



router.use('/api/user', ActualUser)
router.use('/api/products', ProductRoutes)
router.use('/api/banner', bannerRoutes)

router.get('/' || '/home', function (req, res) {
    res.send('oke')
})

router.delete('/reset', Controller.dataReset)

module.exports = router;

const express = require('express');
const router = express.Router() ;

const ActualUser = require('./ActualUsersRoutes')
const ProductRoutes = require('./ProductRoutes')
const bannerRoutes = require('./bannerRoutes')
const db = require('../models')();



router.use('/user', ActualUser)
router.use('/products', ProductRoutes)
router.use('/banner', bannerRoutes)


router.delete('/createTestDB', async (req, res) => {
    res.send('ok')
    await db.createTestDB()
})

module.exports = router;
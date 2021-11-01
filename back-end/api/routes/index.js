
const express = require('express');
const router = express.Router() ;

const ActualUser = require('./ActualUsersRoutes')
const ProductRoutes = require('./ProductRoutes')
const Controller = require('../controllers')



router.use('/api/user', ActualUser)
router.use('/api/products', ProductRoutes)

router.get('/' || '/home', function (req, res) {
    res.send('oke')
})

router.delete('/reset', Controller.dataReset)

module.exports = router;
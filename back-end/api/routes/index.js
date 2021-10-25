
const express = require('express');
const router = express.Router() ;

const ActualUser = require('./ActualUsersRoutes')
const ProductRoutes = require('./ProductRoutes')
const Controller = require('../controller')
const ProductController = require('../controller')



router.use('/user', ActualUser)
router.use('/products', ProductRoutes)

router.get('/' || '/home', function (req, res) {
    res.send('oke')
})

router.delete('/', Controller.dataReset)

module.exports = router;
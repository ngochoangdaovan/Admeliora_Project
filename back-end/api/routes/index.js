
const express = require('express');
const router = express.Router() ;

const ActualUser = require('./ActualUsersRoutes')
const Controller = require('../controller')



router.use('/users', ActualUser)
router.get('/' || '/home', function (req, res) {
    res.send('oke')
})

router.delete('/', Controller.dataReset)

module.exports = router;
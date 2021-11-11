const express = require('express');
const router = express.Router();
const UsersRoutes = require('./PersonalInformation/Users.routes');
const PhoneRoutes = require('./PersonalInformation/PhoneNumbers.routes');
const AddressRoutes = require('./PersonalInformation/Addresses.routes');
const ActivityLogs = require('./PersonalInformation/ActivityLogs.routes');
const CartRoutes = require('./Card&OrdersRoutes/Card.routes');
const OrderRoutes = require('./Card&OrdersRoutes/Orders.routes');


router.use('/phone', PhoneRoutes);
router.use('/address', AddressRoutes);
router.use('/logs', ActivityLogs);
router.use('/cart', CartRoutes);
router.use('/Order', OrderRoutes);
router.use('/', UsersRoutes);

module.exports = router;


/*------------------------------------------------------GET------------------------------------------------------------*/
/*------------------------------------------------------POST------------------------------------------------------------*/
/*------------------------------------------------------PUT------------------------------------------------------------*/
/*------------------------------------------------------DELETE------------------------------------------------------------*/

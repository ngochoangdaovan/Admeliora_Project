const express = require('express');
const router = express.Router();
const UsersRoutes = require('./PersonalInformation/Users.routes');
const PhoneRoutes = require('./PersonalInformation/PhoneNumbers.routes');
const AddressRoutes = require('./PersonalInformation/Addresses.routes');
const ActivityLogs = require('./PersonalInformation/ActivityLogs.routes');
const Auth = require('../../controller/ActualUser/auth')


router.use('/', UsersRoutes);
router.use('/phone', PhoneRoutes);
router.use('/address', AddressRoutes);
router.use('/logs', ActivityLogs);

module.exports = router;


/*------------------------------------------------------GET------------------------------------------------------------*/
/*------------------------------------------------------POST------------------------------------------------------------*/
/*------------------------------------------------------PUT------------------------------------------------------------*/
/*------------------------------------------------------DELETE------------------------------------------------------------*/

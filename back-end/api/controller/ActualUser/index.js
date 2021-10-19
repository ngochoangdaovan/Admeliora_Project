'use strict';

const UsersController = require('./informations/Users.controller');
const AddressesController = require('./informations/Addresses.controller');
const ActivityLogsController = require('./informations/ActivityLogs.controller');
const PhoneNumbersController = require('./informations/PhoneNumbers.controller');
const Auth = require('./auth')



module.exports = {
    UsersController,
    AddressesController,
    ActivityLogsController,
    PhoneNumbersController,
    Auth
}
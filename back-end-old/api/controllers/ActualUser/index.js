'use strict';

const UsersController = require('./informations/Users.controller');
const AddressesController = require('./informations/Addresses.controller');
const ActivityLogsController = require('./informations/ActivityLogs.controller');
const PhoneNumbersController = require('./informations/PhoneNumbers.controller');
const OrderController = require('./Card&Orders/Orders.controller');
const CardController = require('./Card&Orders/Card.controller');
const Auth = require('./auth')



module.exports = {
    UsersController,
    AddressesController,
    ActivityLogsController,
    PhoneNumbersController,
    OrderController,
    CardController,
    Auth
}
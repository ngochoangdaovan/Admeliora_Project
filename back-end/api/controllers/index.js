'use strict'


const ActualUserControl = require('./ActualUser');
const AnonOrdersControl = require('./AnonOrders');
const ProductControl = require('./Product');
const db = require('../models')()





/*--------------------------------------------GET----------------------------------------------------*/ 
/*--------------------------------------------UPDATE-------------------------------------------------*/ 
/*--------------------------------------------DELETE-------------------------------------------------*/ 
/*--------------------------------------------CREATE-------------------------------------------------*/ 


module.exports = {
    ProductControl,
    AnonOrdersControl,
    ActualUserControl,
};


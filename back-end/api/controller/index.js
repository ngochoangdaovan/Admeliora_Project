'use strict'


const ActualUserControl = require('./ActualUser');
const AnonOrdersControl = require('./AnonOrders');
const OrdersAndCartControl = require('./Orders&Cart');
const ProductControl = require('./Product');
const dbMan = require('../databaseManipulations');

const dataReset = async function(req, res) {
    await dbMan.resetDB()
    .then(()=>{res.send('ok')})
    .catch(err => res.send(err.message))
}






module.exports = {
    OrdersAndCartControl,
    ProductControl,
    AnonOrdersControl,
    ActualUserControl,
    dataReset
};


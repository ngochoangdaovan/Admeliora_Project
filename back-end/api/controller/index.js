'use strict'


const ActualUserControl = require('./ActualUser');
const AnonOrdersControl = require('./AnonOrders');
const ProductControl = require('./Product');
const db = require('../models')()





const dataReset = async function(req, res) {
    await db.sequelize.drop()
    await db.sequelize.sync()
    .then(()=>{res.send('ok')})
    .catch(err => res.send(err.message))
}



/*--------------------------------------------GET----------------------------------------------------*/ 
/*--------------------------------------------UPDATE-------------------------------------------------*/ 
/*--------------------------------------------DELETE-------------------------------------------------*/ 
/*--------------------------------------------CREATE-------------------------------------------------*/ 


module.exports = {
    ProductControl,
    AnonOrdersControl,
    ActualUserControl,
    dataReset
};


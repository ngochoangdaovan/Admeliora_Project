'use strict'


const ActualUserControl = require('./ActualUser');
const AnonOrdersControl = require('./AnonOrders');
const ProductControl = require('./Product');
const dbMan = require('../databaseQueries');





const dataReset = async function(req, res) {
    await dbMan.resetDB()
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





const ModelAndConnection = require('../models')

const db =  ModelAndConnection();
const ActualUsersQueries = require('./ActualUsers');
const AnonOrdersQueries = require('./AnonOrders');
const CartAndOrdersQueries = require('./Card&Orders');
const ProductQueries = require('./Product');




const DatabaseManipulations = {ActualUsersQueries, AnonOrdersQueries, CartAndOrdersQueries, ProductQueries};
console.log(DatabaseManipulations);


DatabaseManipulations.resetDB = async function () {
    await db.sequelize.drop();
    await db.sequelize.sync();
    
}

module.exports =  DatabaseManipulations;












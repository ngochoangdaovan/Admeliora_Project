


const db =  require('../models')();
const ActualUsersQueries = require('./ActualUsers');
const AnonOrdersQueries = require('./AnonOrders');
const ProductQueries = require('./Product');



const DatabaseManipulations = {ActualUsersQueries, AnonOrdersQueries, ProductQueries};
// console.log(DatabaseManipulations.ActualUsersQueries.UsersQueries)


DatabaseManipulations.resetDB = async function () {
    await db.sequelize.drop();
    await db.sequelize.sync();
    
}

module.exports =  DatabaseManipulations;












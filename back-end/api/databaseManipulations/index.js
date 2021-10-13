

module.exports = async () => {

    const ModelAndConnection = require('../models')

    const db = await ModelAndConnection();
    const actualUsersQueries = require('./ActualUsers');
    const AnonOrdersQueries = require('./AnonOrders');
    const CartAndOrdersQueries = require('./Card&Orders');
    const productQueries = require('./Product');




    const DatabaseManipulations = {};
    for (let module of [productQueries, actualUsersQueries, AnonOrdersQueries, CartAndOrdersQueries]) {

        if (Object.keys(module).length > 0){
        
            Object.keys(module).forEach(filename => {
                // console.log(db)
                let queriesModel = new module[filename](db);
                console.log(typeof queriesModel)
                DatabaseManipulations[queriesModel.constructor.name] = queriesModel;
            });
        };
    }
    
        
    Object.keys(DatabaseManipulations).forEach(queriesModelName => {
        if (DatabaseManipulations[queriesModelName].associate) {
        DatabaseManipulations[queriesModelName].associate(DatabaseManipulations);
        }
    });


    return DatabaseManipulations;
};












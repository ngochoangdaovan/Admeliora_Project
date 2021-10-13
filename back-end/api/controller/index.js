'use strict'

module.exports = async () => {

    const ActualUserControl = require('./ActualUser');
    const AnonOrdersControl = require('./AnonOrders');
    const OrdersAndCartControl = require('./Orders&Cart');
    const ProductControl = require('./Product');

    const DatabaseMan = await require('../databaseManipulations')();

    const DBManModels = {};
    for (let module of [ProductControl, ActualUserControl, AnonOrdersControl, OrdersAndCartControl]) {

        if (Object.keys(module).length > 0){
            Object.keys(module).forEach(filename => {
                let queriesModel = new module[filename](DatabaseMan);
                DBManModels[queriesModel.constructor.name] = queriesModel;
            });
        };
    }

        
    Object.keys(DBManModels).forEach(queriesModelName => {
        if (DBManModels[queriesModelName].associate) {
        DBManModels[queriesModelName].associate(DBManModels);
        }
    });


    return DBManModels;

}

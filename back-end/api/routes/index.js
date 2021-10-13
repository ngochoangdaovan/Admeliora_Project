'use strict'

module.exports = async () => {

    const ActualUserControl = require('./ActualUser');
    const AnonOrdersControl = require('./AnonOrders');
    const OrdersAndCartControl = require('./Orders&Cart');
    const ProductControl = require('./Product');

    const Controller = await require('../controller')();


    const Routes = {};
    for (let module of [ProductControl, ActualUserControl, AnonOrdersControl, OrdersAndCartControl]) {

        if (Object.keys(module).length > 0){
            Object.keys(module).forEach(filename => {
                let queriesModel = new module[filename](DatabaseMan);
                Routes[queriesModel.constructor.name] = queriesModel;
            });
        };
    }

        
    Object.keys(Routes).forEach(queriesModelName => {
        if (Routes[queriesModelName].associate) {
        Routes[queriesModelName].associate(Routes);
        }
    });


    return Routes;

}

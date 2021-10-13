'use strict';



module.exports =  () => {

    const Sequelize = require('sequelize');
    const product_models = require('./Product')();
    const Order_cart =  require('./Orders&Cart')();
    const user = require('./ActualUsers')();
    const AnonOrders = require('./AnonUsersOrders')();
    const env = process.env.NODE_ENV || 'development';
    const config = require(__dirname + '/../config/config.json')[env];


    const db = {};
    let sequelize;
    if (config.use_env_variable) {
      sequelize = new Sequelize(process.env[config.use_env_variable], config);
    } else {
      sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect : config.dialect,
        pool : {
          max: 100,
          min: 0,
          acquire: 30000,
          idle: 1000
        }
      });
      
    }



    for (let model of [product_models, Order_cart, user, AnonOrders]) {
      Object.keys(model).forEach(filename => {
        let Model = model[filename](sequelize, Sequelize);
        db[Model.name] = Model;
      })
    }
    
    // console.log(db)
      
    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
       db[modelName].associate(db);
      }
    });

    // console.log(db)

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;


    return db;
}
'use strict';



module.exports =  () => {

    const Sequelize = require('sequelize');
    const product_models = require('./Product')();
    const ActualUsers = require('./ActualUsers')();
    const AnonOrders = require('./AnonUsersOrders')();
    const env = process.env.NODE_ENV || 'development';
    const config = require(__dirname + '/../config/config.json')[env];




    const db = {};

    let sequelize;
    if (config.use_env_variable) {
      sequelize = new Sequelize(process.env[config.use_env_variable], config);
    } else {
      sequelize = new Sequelize(config.database, config.username, config.password, {
        dialect: config.dialect,
        pool : {
          max: 100,
          min: 0,
          acquire: 30000,
          idle: 1000,
          handleDisconnects: true
        },
        dialectOptions: {
          dateStrings: true,
          typeCast: true
        },
        timezone: '+07:00', //for writing to database,
        logging: false
      });
    }


    for (let model of [product_models, ActualUsers , AnonOrders]) {
      Object.keys(model).forEach(filename => {
        let Model = model[filename](sequelize, Sequelize);
        db[Model.name] = Model;
      })
    }
    
      
    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
       db[modelName].associate(db);
      }
    });


    db.sequelize = sequelize;
    db.Sequelize = Sequelize;


    return db;
}
'use strict';



module.exports = async () => {

    const Sequelize = require('sequelize');
    const product_models = await require('./Product')();
    const Order_cart = await require('./Orders&Cart')();
    const user = await require('./ActualUsers')();
    const env = process.env.NODE_ENV || 'development';
    const config = require(__dirname + '/../config/config.json')[env];


    const db = {};
    let sequelize;
    if (config.use_env_variable) {
      sequelize = new Sequelize(process.env[config.use_env_variable], config);
    } else {
      sequelize = new Sequelize(config.database, config.username, config.password, config);
    }

    for (let model of [product_models, Order_cart, user]) {
      Object.keys(model).forEach(filename => {
        let Model = model[filename](sequelize, Sequelize);
        db[Model.name] = Model;
      })
    }
    
    console.log(db)
      
    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
       db[modelName].associate(db);
      }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;


    return db;
}
'use strict';



module.exports =  () => {

    const Sequelize = require('sequelize');
    const product_models = require('./Product')();
    const ActualUsers = require('./ActualUsers')();
    const AnonOrders = require('./AnonUsersOrders')();
    const env = process.env.NODE_ENV || 'development';
    const config = require(__dirname + '/../config/config.json')[env];
    const createTables = require('./createData/index');



    const db = {};

    let sequelize;
    if (config.use_env_variable) {
      sequelize = new Sequelize(process.env[config.use_env_variable], config);
    } else {
      sequelize = new Sequelize(config.database, config.username, config.password, {
        dialect: config.dialect,
        host: config.host,
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
    db.createTestDB = async () => {
      await createTables(db);
    }

    // check connection to database
    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      
      console.log('config', config);
      console.error('Unable to connect to the database:', err.message);

    });

    // createTables(db);
   

    return db;
}
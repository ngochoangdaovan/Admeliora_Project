const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();



module.exports = async () => {

    console.log(
      process.env.DB_NAME,
      process.env.DB_USER
      ,process.env.DB_PASS
      ,process.env.DB_HOST
      ,typeof Number(process.env.pool_max_connection),
      typeof Number(process.env.pool_min_connection),
      typeof Number(process.env.acquire_timeout),
         
      typeof Number(process.env.idle_timeout)
             )

    const connector = new Sequelize (

        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PASS, 
        {
            host              : process.env.DB_HOST,
            dialect           : "mysql",
            pool              : {
                max           : Number(process.env.pool_max_connection),
                min           : Number(process.env.pool_min_connection),
                acquire       : Number(process.env.acquire_timeout),
                idle          : Number(process.env.idle_timeout)
            }
        }
    );

             


    connector
    .authenticate()
    .then(() => {
      console.log("database successfully connected");
    })
    .catch((err) => {
      console.log("Unable to connect to the database:", err.messase);
    });



    const db = {};

    // db.module_db = Sequelize;
    db.connector = connector;
    db.ActivityLogs = require('../models/activitylogs')(connector, DataTypes)
    
    // db.Customer = require('../models/Customer.model')(db.connector, db.module_db);
    // db.Product_lines = require('../models/Product_lines.model')(db.connector, db.module_db);
    // db.Address = require('../models/Address.model')(db.connector, db.module_db);


    
    return db;

}




const Sequelize = require('sequelize');
require('dotenv').config();



module.exports = async () => {
    const connector = new Sequelize (

        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PASS, 
        {
            host              : process.env.DB_HOST,
            dialect           : "mysql",
            pool              : {
                max           : process.env.pool_max_connection,
                min           : process.env.pool_min_connection,
                acquire       : process.env.acquire_timeout,
                idle          : process.env.idle_timeout
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

    db.module_db = Sequelize;
    db.connector = connector;
    
    
    db.Customer = require('../models/Customer.model')(db.connector, db.module_db);
    db.Product_lines = require('../models/Product_lines.model')(db.connector, db.module_db);
    db.Address = require('../models/Address.model')(db.connector, db.module_db);


    
    return db;

}




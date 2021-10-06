

module.exports = (connector, module_db) => {
    const Orders = connector.define('Orders', {
        order_id : {
            type        : module_db.UUID,
            allowNull : false
        },
        user_id : {
            type : module_db.UUID,
            allowNull : false
        },
        order_name : {
            type : module_db.STRING,
            allowNull : false
        },
        total_price : {
            type : module_db.FLOAT,
            allowNull : false
        },
        date_time : {
            type : module_db.DATE,
            defaultValue : module_db.NOW,
            allowNull : false
        },
        status : {
            type : module_db.INTEGER,
            allowNull : false
        },
        address : { 
            type : module_db.UUID,
            allowNull : false
        },
        phone : {
            type : module_db.STRING(15),
            allowNull : false
        }

    });

    return Orders;

};




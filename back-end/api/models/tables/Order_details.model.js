

module.exports = (connector, module_db) => {
    const Order_details = connector.define('Order_details', {
        order_id : {
            type : module_db.UUID,
            allowNull : false
        },
        product_details_id : {
            type : module_db.UUID,
            allowNull : false
        },
        quantity : {
            type : module_db.INTEGER,
            allowNull : false
        },
        price : {
            type : module_db.FLOAT,
            allowNull : false
        }
    });

    return Order_details;
}




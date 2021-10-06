
module.exports = (connector, module_db) => {

    const Cart = connector.define('Cart', {

        user_id : {
            type : module_db.UUID,
            allowNull   : false,
        },
        product_detail_id : {
            type : module_db.UUID,
            allowNull : false,
        },
        quantity : {
            type : module_db.INTEGER,
            allowNull   : false,
        },
        discount : {
            type : module_db.FLOAT,
            allowNull   : false,
        },
        price : {
            type : module_db.FLOAT,
            allowNull : false,
        }
    });

    return Cart;

}




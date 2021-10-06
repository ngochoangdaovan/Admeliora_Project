

module.exports = (connector, module_db) => {

    const ProductColors = connector.define('ProductColors', {
        products_color_id : {
            type        : module_db.UUID,
            allowNull   : false
        },
        product_id : {
            type : module_db.UUID,
            allowNull : false
        },
        color_name : {
            type : module_db.STRING,
            allowNull : false
        }
    });

    return ProductColors;

}





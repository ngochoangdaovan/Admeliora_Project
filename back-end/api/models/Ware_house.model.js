

module.exports = (connector, module_db) => {
    const Warehouse = connector.define('Warehouse', {

        product_detail_id : {
            type : module_db.UUID,
            allowNull   : false
        },
        product_id : { 
            type : module_db.UUID,
            allowNull : false
        },
        product_color_id : {
            type : module_db.UUID,
            allowNull : false
        },
        sizes_id : {
            type : module_db.UUID,
            allowNull : false
        },
        quantity : {
            type : module_db.INTEGER,
            allowNull : false
        }

    });

    return Warehouse;
}


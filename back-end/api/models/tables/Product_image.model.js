

module.exports = (connector, module_db) => {
    const ProductImages = connector.define('ProductImages', {

        product_color_id  : {
            type : module_db.UUID,
            allowNull   : false
        },
        image : {
            type : module_db.STRING(400),
            allowNull : false
        }

    });

    return ProductImages;
}




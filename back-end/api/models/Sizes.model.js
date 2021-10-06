

module.exports = (connector, module_db) => {

    const Sizes = connector.define('Sizes', {

        sizes_id : {
            type        : module_db.UUID,
            allowNull   : false
        },
        category_id : {
            type        : module_db.UUID,
            allowNull   : false
        },
        size_name : {
            type        : module_db.STRING(10),
            allowNull   : false
        },
        size_info : { 
            type        : module_db.STRING(500),
            allowNull   : false
        },
        price : {
            type        : module_db.FLOAT,
            allowNull   : false
        }

    });

    return Sizes;

}








module.exports = (connector, module_db) => {


    const product_lines = connector.define('product_lines', {
        product_line_id : {
            type        : module_db.UUID,
            allowNull   : false,
            primaryKey  : true,
            
        },
        name : {
            type : module_db.STRING(300),
            allowNull : false,
        },
        category_id : {
            type        : module_db.UUID,
            allowNull   : false,
        },
        material : {
            type : module_db.STRING(1000),
            allowNull : false,
        },
        
        information : {
            type : module_db.STRING(1000),
            allowNull : false,
        },

        rate : {
            type : module_db.FLOAT(5),
            allowNull : false,
        },

    });

    return product_lines;
};





module.exports = (connector, module_db) => {

    const Address = connector.define('Address', {

        user_id : {
            type        : module_db.UUID,
            allowNull   : false,
        },
        province : {
            type      : module_db.STRING(20),
            allowNull : false,
        },
        distric : {
            type      : module_db.STRING(20),
            allowNull : false,
        },
        street : {
            type      : module_db.STRING(50),
            allowNull : false
        },
        detail_address : {
            type      : module_db.STRING(200),
            allowNull : false
        },
        default : {
            type      : module_db.BOOLEAN,
            allowNull : false
        },

    });


    return Address;



}
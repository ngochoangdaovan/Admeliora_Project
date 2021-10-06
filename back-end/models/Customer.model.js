
module.exports = (connector, module_db) => {

    const Customer = connector.define('Customer', {

        user_id : {
            type : module_db.UUID,
            allowNull : false,
            primaryKey : true,
            defaultValue: module_db.UUIDV4
        },
        user_name : {
            type : module_db.STRING(45),
            allowNull : false,
        },
        password : {
            type : module_db.STRING(100),
            allowNull : false,
        }, 
        full_name : {
            type : module_db.STRING(200),
            allowNull : false,
        },
        email : {
            type : module_db.STRING(200),
            allowNull : false,
        }, 
        phone : {
            type : module_db.STRING(15),
            allowNull : false,
        }, 
        address : { 
            type : module_db.STRING(500),
            allowNull : false,
        },  
        level : { 
            type : module_db.INTEGER,
            allowNull : false,
        }, 
        DoB : {
            type : module_db.STRING(20),
            allowNull : false,
        },
        gender : {
            type : module_db.STRING(10),
            allowNull : false,
        },



    });


    return Customer;
};





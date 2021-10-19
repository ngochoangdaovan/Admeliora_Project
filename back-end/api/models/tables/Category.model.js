

module.exports = (connector, module_db) => {

    const Categories = connector.define('Categories', {

        id : {
            type : module_db.UUID,
            allowNull   : false,
        },
        name : {
            type : module_db.STRING(100),
            allowNull : false,
        }
    });

    return Categories;

}


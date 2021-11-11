const  { v4 } = require ('uuid');
// const Addresses = require ('../models')().Addresses

const ID_Generator = {};


ID_Generator.generate = async function (model) {
    

    let ID 
    primName = model.primaryKeys.fieldName;

    while (true) {
        ID = v4();
        let isExist = await model.findByPk(ID)

        if (isExist === null) {
            break;
        }
    };

    return ID;

}



module.exports = ID_Generator;

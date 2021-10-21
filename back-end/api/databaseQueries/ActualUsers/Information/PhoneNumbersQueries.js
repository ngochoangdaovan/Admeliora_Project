const db = require('../../../models')();
const phoneModel = db.PhoneNumbers


module.exports = PhoneNumbersQueries = {

}


/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/


PhoneNumbersQueries.isExist = async function (user_id){
    const result = await phoneModel.findOne({
        where: {user_id : user_id}
    });
    return !(result === null)
}



PhoneNumbersQueries.addPhoneNumber = async function(user_id, phone){ 

    let defaultValue = false;
    let exist = await PhoneNumbersQueries.isExist(user_id);
    
    if (!exist) {
        defaultValue = true;
    };

    await phoneModel.create({
        phoneNumbers: phone,
        default : defaultValue,
        user_id : user_id
    });
};




/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/

PhoneNumbersQueries.getPhoneNumbers = async function (id){
    

    const phones = await phoneModel.findAll(
        {
            attributes : ['phoneNumbers', 'default'],
            where : {user_id : id},
            required: true
        }
    );
    return phones;

};












/* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/
PhoneNumbersQueries.updateStatus = async function(user_id, phone, newPhone){

    // delete the last status
    await phoneModel.update(
        {default : false},
        {where: {user_id : user_id, default: true},}
    );
    // update status for new one
    await phoneModel.update(
        {phone : newPhone},
        {where : {phoneNumbers:phone}}
    )

}



/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/


// function to delete specific phone number of a user 
PhoneNumbersQueries.deletePhoneNumber = async function(phone, user_id){ 
    await phoneModel.delete(
        {
            where: {
                phoneNumbers: phone,
                user_id: user_id
            },
        }
    );
};


PhoneNumbersQueries.deleteAll = async function (user_id){
    await phoneModel.destroy({
        where: {user_id : user_id}
    })
}



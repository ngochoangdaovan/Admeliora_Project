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



PhoneNumbersQueries.add = async function(user_id, phone){ 

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

PhoneNumbersQueries.getDefault = async function (user_id, phone){
    return await phoneModel.findOne({
        where: {user_id : user_id, phoneNumbers: phone},
        attributes: {exclude: ['user_id']}
    })
}







/* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/
PhoneNumbersQueries.updateStatus = async function(user_id, newDefaultPhone){

    // delete the last status
    await phoneModel.update(
        {default : false},
        {where: {user_id : user_id, default: true},}
    );
    // update status for new one
    await phoneModel.update(
        {default : true},
        {where : {phoneNumbers:newDefaultPhone}}
    )
}




PhoneNumbersQueries.updatePhoneNumbers = async function (user_id, old_phoneNumbers,newPhone){
    await phoneModel.update(
        {phoneNumbers:newPhone},
        {where: {
            phoneNumbers: old_phoneNumbers,
            user_id:user_id
        }
    })
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



const db = require('../../../models')();
const phoneModel = db.PhoneNumbers


module.exports = PhoneNumbersQueries = {

}



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



PhoneNumbersQueries.getPhoneNumbers = async function (id){
    

    return await phoneModel.findAll(
        {
            attributes : ['phoneNumbers', 'default'],
            where : {user_id : id},
            required: true,
            plain : true,

        }
    );

};


PhoneNumbersQueries.addPhoneNumber = async function(user_id, phone){ 

    let defaultValue = false;
    let exist = await PhoneNumbersQueries.getPhoneNumbers(user_id);

    if (exist === null) {
        defaultValue = true;
    };

    await phoneModel.create({
        phoneNumbers: phone,
        default : defaultValue,
        user_id : user_id
    });
};


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



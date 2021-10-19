
const PhoneNumbersQueries = require('../../../databaseManipulations').ActualUsersQueries.PhoneNumbersQueries;


const PhoneNumberController = {};

PhoneNumberController.getAllPhoneNumbersByID = async function(req, res) {

    let user_id = req.params.user_id;

    let phoneNumbers = await PhoneNumbersQueries.getPhoneNumbers(user_id)
    .catch(err => res.send(err.message));
    res.send(phoneNumbers);

};



PhoneNumberController.delete = async function(req, res){
    await phoneNumbers.deletePhoneNumber(req.params.user_id)
    .then(() => res.send('successfully delete'))
    .catch(err => res.send(err.message));
};



PhoneNumberController.addPhone = async function(req, res) {

    await PhoneNumbersQueries.addPhoneNumber(req.user.user_id, req.body.phone)
    .then(()=> res.send('phone number successfully added'))
    .catch(err => res.send(err.message));
}




module.exports = PhoneNumberController;
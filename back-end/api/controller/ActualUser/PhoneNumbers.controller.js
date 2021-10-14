
const PhoneNumbersQueries = require('../../databaseManipulations').ActualUsersQueries.PhoneNumbersQueries;


const PhoneNumberController = {};

PhoneNumberController.getAllPhoneNumbersByID = async function(req, res) {

    let user_id = req.params.user_id;

    let phoneNumbers = await PhoneNumbersQueries.getPhoneNumbers(user_id)
    .catch(err => res.send(err.message));
    res.send(phoneNumbers);

};



PhoneNumberController.delete = async (req, res) => {
    await phoneNumbers.deletePhoneNumber(req.params.user_id)
    .then(() => res.send('successfully delete'))
    .catch(err => res.send(err.message));
};



const PhoneNumbersQueries = require('../../../databaseQueries').ActualUsersQueries.PhoneNumbersQueries;
const ActivityLogs = require('../../../databaseQueries').ActualUsersQueries.ActivityLogsQueries


const PhoneNumberController = {};

PhoneNumberController.getAllPhoneNumbersByID = async function(req, res) {

    let user_id = req.user.user_id;

    let phoneNumbers = await PhoneNumbersQueries.getPhoneNumbers(user_id)
    .catch(err => res.send(err.message));
    res.send(phoneNumbers);

};



PhoneNumberController.delete = async function(req, res){
    await PhoneNumbersQueries.delete(req.params.user_id)
    .then(() => {
        const Log = {message: 'Phone number deleted successfully'}
        ActivityLogs.addLog(Log.message)
        res.send(Log)
    })
    .catch(err => res.send(err.message));
};


PhoneNumberController.deleteAll = async function(req, res) {
    await PhoneNumbersQueries.deleteAll (req.user.user_id)
    .then(() => res.send ('delete all'));
}



PhoneNumberController.addPhone = async function(req, res) {

    await PhoneNumbersQueries.addPhoneNumber(req.user.user_id, req.body.phone)
    .then(async ()=> {
        const Log = {message: `phone number ${req.body.phone} successfully added`}
        await ActivityLogs.addLog(req.user.user_id, Log.message)
        res.send(Log)
    })
    .catch(err => res.send(err.message));
}




module.exports = PhoneNumberController;
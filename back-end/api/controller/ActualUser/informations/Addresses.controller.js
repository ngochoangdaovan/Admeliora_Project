const AddressesQueries = require('../../../databaseQueries').ActualUsersQueries.AddressesQueries
const ActivityLogs = require('../../../databaseQueries').ActualUsersQueries.ActivityLogsQueries







const AddressController = {};


AddressController.addAddress = async function (req, res, next) {
    
    const user = req.user;
    await AddressesQueries.createAddresses(
        user.user_id, req.body.province,
        req.body.district, req.body.street,
        req.body.detail_address
        )

    .then(async() => {
            const Log = {message: `address successfully added`}
            await ActivityLogs.addLog(req.user.user_id, Log.message)
            res.send({logs : 'address successfully added'})

        })
    .catch (err => res.send(err.message))
    next();

}


AddressController.get = async function(req, res){
    const addresses = await AddressesQueries.getAllAddress(req.user.user_id)

    // .then((address) => {
        res.send(addresses)
    // })


}



module.exports = AddressController;


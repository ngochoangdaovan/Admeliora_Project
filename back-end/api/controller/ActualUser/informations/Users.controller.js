const UsersQueries = require('../../../databaseQueries').ActualUsersQueries.UsersQueries




const UsersController = {};



UsersController.showAllUsers = async function(req, res) {
    
    await UsersQueries.getUsers()
    .then((data) => {
        res.status(200).send({
            ok : true,
            data: data
        });
    })
    .catch( err => res.status(500).send({
        ok: false,
        message : err.message}))
    

};





UsersController.getInformation= async (req, res) => {

    await UsersQueries.getUserInfoByID(req.user.user_id)
    .then(info => {
        // if authentication success we can get user information
        if (info !== null) {
            res.status(200).send({
                ok: true,
                data: info
            })
        }else{
            // if user authentication failed then there is no information available
            res.status(404).send ({
                ok : false,
                message : 'authentication failed'
            })
        }
    })
    .catch(err => res.send({
        ok: false,
        message: err.message}));

}

UsersController.addPhone = async (req, res) => {

    await PhoneNumbersQueries.addPhoneNumber(req.body.user_id, req.body.phone)
    .then(()=>{res.status(201).send({
        ok: true,
        message: 'phone inserted!'
    })})
    .catch(err => res.status(500).send({
        ok: false,
        message: err.message}));
}


module.exports = UsersController 


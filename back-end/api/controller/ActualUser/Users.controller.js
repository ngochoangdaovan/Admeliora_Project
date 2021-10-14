const UsersQueries = require('../../databaseManipulations').ActualUsersQueries.UsersQueries



const UsersController = {};



UsersController.showAllUsers = async function(req, res) {
    
    let users = await UsersQueries.getUsers();
    
    res.send(users);
};





UsersController.getInformationByID= async (req, res) => {

    let userInfo = await UsersQueries.getAllInfoByID(req.params.user_id)
    .then(info => {res.send(info)})
    .catch(err => res.send(err.message));


}


UsersController.addPhone = async (req, res) => {

    await PhoneNumbersQueries.addPhoneNumber(req.body.user_id, req.body.phone)
    .then(()=>{res.send('phone inserted!')})
    .catch(err => res.send(err.message));
}





UsersController.addUser = async function(req, res) {
    

    await UsersQueries.createUser(
        req.body.user_name, 
        req.body.password,
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.dob,
        req.body.gender
    )
    .then(()=>{res.send('successfully created users');})
    .catch(err => res.send(err.message));
};


module.exports = UsersController 


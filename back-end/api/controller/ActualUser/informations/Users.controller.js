const UsersQueries = require('../../../databaseQueries').ActualUsersQueries.UsersQueries
const bcrypt = require('bcrypt');
const {userValidation} = require('../../../utils/schemaValidation')



const UsersController = {};



UsersController.showAllUsers = async function(req, res) {
    
    let users = await UsersQueries.getUsers();
    
    res.send(users);
};





UsersController.getInformation= async (req, res) => {

    await UsersQueries.getUserInfoByID(req.user.user_id)
    .then(info => {res.send(info)})
    .catch(err => res.send(err.message));


}


UsersController.addPhone = async (req, res) => {

    await PhoneNumbersQueries.addPhoneNumber(req.body.user_id, req.body.phone)
    .then(()=>{res.send('phone inserted!')})
    .catch(err => res.send(err.message));
}





UsersController.registerUser = async (req, res) => {
    
    try {

        const isValid = await userValidation.validateAsync(req.body);

        const salt =  await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


        await UsersQueries.createUser(
            req.body.user_name, 
            hashedPassword,
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.dob,
            req.body.gender
        )
        .then(()=>{res.send('successfully created users');})
        .catch(err => res.send({
            message : err.message
        }));

    }catch(e){
        res.status(500).send({message: e.message})
    }

};


module.exports = UsersController 


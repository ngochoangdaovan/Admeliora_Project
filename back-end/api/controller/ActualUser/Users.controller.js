
module.exports = UsersController = function(DatabaseManipulations) {
    this.db = DatabaseManipulations;
    this.UsersQueries = DatabaseManipulations.UsersQueries
}


UsersController.prototype.addUser = async function(req, res){

    await this.UsersQueries.createUser(
        req.body.user_name, 
        req.body.password,
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.dob,
        req.body.gender
    )  
    .then(() => {
        res.send('successfully create user!')
    })
    .catch(err=>res.send(err.message))
};



UsersController.prototype.showAllUser = async function (req, res){

}



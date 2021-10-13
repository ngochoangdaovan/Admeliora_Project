
const sequelize = require('sequelize');



module.exports = UsersQueries = function(db) {

    this.db = db;
    this.UserModel = db.Users;

}


UsersQueries.prototype.getUsers = async function(){
    return await this.UserModel.findAll(
        {   
            include: [{
                model: this.db.PhoneNumbers,
                attributes: ['phoneNumbers'],
            }]
        });
};



UsersQueries.prototype.getUsersById = async function (id){
    return await this.UserModel.findAll({
        raw: true,
        where : {
            user_id : id
        }
    })
};



UsersQueries.prototype.getAllInfoById = async function (id){

    let PhoneNumbers = this.db.PhoneNumbers;
    // console.log(PhoneNumbers)

    return await this.UserModel.findAll({
        include : [{
            model: PhoneNumbers,
            attributes: 'phoneNumbers'
        }],
        raw: true,
        where : {
            user_id : id
        }
    })
};


UsersQueries.prototype.createManyUsers = async function(users){
    await this.UserModel.bulkCreate(users);
}


UsersQueries.prototype.createUser = async function(user_name, password, first_name, last_name,email, dob, gender) {
    await this.UserModel.create({
        user_name: user_name,
        password: password,
        first_name: first_name, 
        last_name: last_name, 
        email : email,
        level: 0,
        dob : dob,
        gender: gender
    })


};


UsersQueries.prototype.UpdateInfo = async function(fields,id) {
    await this.UserModel.update(fields,
        {
            where : { 
                user_id : id 
            }
    })
    .then(()=>console.log(''))
    .catch(err=>console.log(err.message))

}

UsersQueries.prototype.UpdatePassword = async function(newPassword ,id){
    await this.UpdateInfo({password:newPassword}, id);
};

UsersQueries.prototype.UpdateEmail = async function(newEmail ,id){
    await this.UpdateInfo({email : newEmail}, id);
};

UsersQueries.prototype.UpdatePhone = async function(newPhone ,id){
    await this.UpdateInfo({phone : newPhone}, id);
};

UsersQueries.prototype.UpdateFirstName = async function(newFName ,id){
    await this.UpdateInfo({first_name : newFName}, id);
};

UsersQueries.prototype.UpdateLastName = async function(newLName ,id){
    await this.UpdateInfo({last_name : newLName}, id);
};

UsersQueries.prototype.UpdateEmail = async function(newEmail ,id){
    await this.UpdateInfo({email : newEmail}, id);
};








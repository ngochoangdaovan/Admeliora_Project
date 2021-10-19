const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../../../models')();
const UserModel = db.Users


const UsersQueries = {


};


UsersQueries.getUsers = async function(){
    let users = await UserModel.findAll();
    return JSON.parse(JSON.stringify(users))
};


UsersQueries.getUsersByUserName = async function(user_name) {
    return await UserModel.findOne({
        where: {user_name},
        attributes: ['user_id','user_name', 'password'],
        required: true,
        plain : true
    });
}


UsersQueries.getAllInfoByID = async function(user_id){
    const user =  await UserModel.findAll(
        {
            where: {user_id : user_id},
            attributes : {exclude : ['user_id', 'password']},
            include : [
                {
                    model: db.PhoneNumbers,
                    attributes: ['phoneNumbers', 'default'],
                    where : {
                        default: false,
                    },
                },
            ]

        }
            
    );
    return user;

}


// UsersQueries.getAllInfoByID = async function(user_id){
//     return await UserModel.findAll(
//         {
            // where : {user_id},
            // exclude : ['user_id', 'password']
//             include : [
//                 {
//                     model: db.PhoneNumbers,
//                     attributes: ['phoneNumbers', 'default'],
//                     where : {
//                         default: true
//                     }
//                 },
//                 {
//                     model: db.Addresses,
//                     attributes: ['province', 'district', 'street', 'detail_address', 'default'],
//                     where : {
//                         default: true
//                     }
//                 },
//                 {
//                     model: db.Cart
//                 },
//                 {
//                     model: db.ActivityLogs
//                 },
//                 {
//                     model: db.Orders,
//                     include: [{
//                         model: db.OrderDetails
//                     }]
//                 }
//             ]}
//     );

// }


UsersQueries.getUserByID = async function (id){

    return await UserModel.findAll(
        {
    
        include : [
            {
                model: db.PhoneNumbers,
                attributes: ['phoneNumbers', 'default'],
                where : {
                    default: true
                }
            },
            {
                model: db.Addresses,
                attributes: ['province', 'district', 'street', 'detail_address', 'default'],
                where : {
                    default: true
                }
            }
        ],
        where : {
            user_id : id
        }, 
    })
};





UsersQueries.createManyUsers = async function(usersList){
    await UserModel.bulkCreate(usersList);
}


UsersQueries.createUser = async function(user_name, password, first_name, last_name,email, dob, gender) {
    await UserModel.create({
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


UsersQueries.UpdateInfo = async function(fields,id) {
    await UserModel.update(fields,
        {
            where : { 
                user_id : id 
            }
        });
}

UsersQueries.UpdatePassword = async function(newPassword ,id){
    await UpdateInfo({password:newPassword}, id);
    return await getUsersById(id);
};

UsersQueries.UpdateEmail = async function(newEmail ,id){
    await UpdateInfo({email : newEmail}, id);
    return await getUsersById(id);
};

UsersQueries.UpdatePhone = async function(newPhone ,id){
    await UpdateInfo({phone : newPhone}, id);
    return await getUsersById(id);
};

UsersQueries.UpdateFirstName = async function(newFName ,id){
    await UpdateInfo({first_name : newFName}, id);
    return await getUsersById(id);
};

UsersQueries.UpdateLastName = async function(newLName ,id){
    await UpdateInfo({last_name : newLName}, id);
    return await getUsersById(id)
};

UsersQueries.UpdateEmail = async function(newEmail ,id){
    await UpdateInfo({email : newEmail}, id);
    return await getUsersById(id);
};

UsersQueries.UpdateAddress = async function(newAddress, id){
    await UpdateInfo({address : newAddress}, id);
    return await getUsersById(id);
}



module.exports = UsersQueries;




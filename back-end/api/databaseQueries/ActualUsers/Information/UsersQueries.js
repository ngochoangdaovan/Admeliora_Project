const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../../../models')();
const UserModel = db.Users


const UsersQueries = {};


/* ----------------------------------------------CREATE FUNCTIONS--------------------------------------*/


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





/* -------------------------------------------------GET FUNCTIONS--------------------------------------------*/


UsersQueries.getUsersByUserName = async function(user_name) {
    return await UserModel.findOne({
        where: {user_name},
        attributes: ['user_id', 'user_name', 'password'],
        required: true,
        plain : true
    });
}

UsersQueries.getLevel = async function (user_id) {
    return await UserModel.findOne ({
        where: {user_id},
        attributes: ['Level']
    })
}


UsersQueries.getUserInfoByID = async function(user_id){
    const user =  await UserModel.findAll(
        {
            where: {user_id : user_id},
            attributes : {exclude : ['user_id', 'password']},
            include : [
                {
                    model: db.PhoneNumbers,
                    attributes: ['phoneNumbers', 'default'],
                    where : {
                        default: true,
                    },
                    required: false,
                },
                {
                    model: db.Addresses,
                    attributes: ['province', 'district', 'street', 'detail_address', 'default'],
                    where : {
                        default: true
                    },
                    required: false,
                },
            ],
        }
            
    );
    return user;
}


// UsersQueries.getUserInfoByID = async function(user_id){
//     return await UserModel.findAll(
//         {
//             where : {user_id},
//             attributes : {exclude : ['user_id', 'password']},
            
//             include : [
//                 {
//                     model: db.PhoneNumbers,
//                     attributes: ['phoneNumbers', 'default', ],
//                     where : {
//                         default: true
//                     },
//                     required: false,
//                 },
//                 {
//                     model: db.Addresses,
//                     attributes: ['province', 'district', 'street', 'detail_address', 'default'],
//                     where : {
//                         default: true
//                     },
//                     required: false,
//                 },
//                 {
//                     model: db.Cart,
//                     required: false
//                 },
//                 {
//                     model: db.ActivityLogs,
//                     required: false,
//                 },
//                 {
//                     model: db.Orders,
//                     required: false,
                    
//                     include: [{
//                         model: db.OrderDetails
//                     }]
//                 },
                
//             ]}
//     );

// }


UsersQueries.getAllUserByAdmin = async function (id, user_role){

    if (user_role == 'admin'){
        return await UserModel.findAll(
            {
            attributes : {exclude : ['user_id', 'password']}
            ,
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
    }
    else {
        return {
            status : 'error',
            message: 'this is not a valid connection, must be user'
        }
    }

};






/* -------------------------------------------UPDATE FUNCTIONS--------------------------------------------------*/


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

UsersQueries.increaseLevel = async function(point, id){
    const curLevel = UsersQueries.getLevel (id);
    await UsersQueries.UpdateInfo({Level : curLevel + point}, id)
    
}

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






/* ----------------------------------------------DELETE FUNCTIONS----------------------------------------------------*/










module.exports = UsersQueries;




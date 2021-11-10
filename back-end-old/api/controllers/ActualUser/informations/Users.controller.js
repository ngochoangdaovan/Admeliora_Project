'use strict';


const db = require('../../../models')(); 
const UserModel = db.Users
const responseHandler = require('../../../utils/responseHandler')


const fs = require('fs');
const path = require('path')




module.exports = new class UsersController {





/*--------------------------------------------GET----------------------------------------------------*/ 

    // get all user and send to admin
    async showAllUsers(req, res) {
    
        if (req.user.isAdmin === 'admin'){
            await UserModel.findAll(
                {
                    attributes : ['user_id','user_name', 'first_name', 
                    'last_name', 'email', 'level','gender']
                    
            })
       
            .then(data => responseHandler.sendSuccess(req, res, 200, data))
            .catch( err => responseHandler.sendFailure(req, res, 400, err))
        }else{
            responseHandler.sendFailure(req, res, 403, 'U dont have the authorization to do this bitch!')
        }
    
    };
    
    
    
    
    
    async getInformation(req, res) {

        try {
    
            // get user detail information 
            const user = await UserModel.findOne(
                {
                    where: {user_id : req.user.user_id},
                    attributes : {exclude : ['user_id', 'password', 'isAdmin', 'refreshToken']},
                    include : [
                        {
                            model: db.PhoneNumbers,
                            attributes: ['phone_number'],
                            where : {
                                default: true,
                            },
                            required: false,
                        },
                        {
                            model: db.Addresses,
                            attributes: ['address_id','province', 'district', 'street', 'detail_address'],
                            where : {
                                default: true
                            },
                            required: false,
                        },
                    ],
                }
            )
            // if authentication success we can get user information
            if (user !== null) {

                let phone = null;
                let address = null;

                // if PhoneNumbers and Address not null we assign it to the user info, else it will be null
                if (user.PhoneNumbers[0] !== (null || undefined)){
                    phone = user.PhoneNumbers[0].phone_number
                }
                if (user.Addresses[0] !== (null || undefined)){
                    address = user.Addresses[0]
                }
                
                // rearrange the result 
                const user_info = {
                    user_name: user.user_name,
                    first_name: user.first_name,
                    last_name : user.last_name,
                    email: user.email,
                    level: user.level,
                    dob: user.dob,
                    gender: user.gender,
                    avatar: user.avatar,
                    PhoneNumbers: phone,
                    Address: address,
                };

                // send the result if success
                responseHandler.sendSuccess(req, res, 200, user_info)
            }else{
                // if user authentication failed then there is no information available
                responseHandler.sendFailure(req, res, 404, 'authentication failed')
            }
        }
        catch(err){ 

            responseHandler.sendFailure(req, res, 500, err)
        }
    
    }
    




    

/*--------------------------------------------UPDATE-------------------------------------------------*/ 




    async updateInfo(req, res) {
        
        // update info based on the field
        try{
            await UserModel.update(req.body,
                {
                    where : { 
                        user_id : req.user.user_id
                    }
                }
            );

            responseHandler.sendSuccess(req, res, 200, 'successfully updated user')

        }catch(err){
            responseHandler.sendFailure(req, res, 500, err)
        }
    }


    async updateAvatar(req, res){
    
        if (req.file !== undefined){ // if file not null

            let newToken = null;
            if(req.newAuthorization !== (null || undefined || '')){
                newToken = req.newAuthorization;
            }

            let newPath = req.file.filename;
            let user_id = req.user.user_id;
            let oldPath = req.body.avatar_path;
            console.log(user_id)
            
            await UserModel.update({avatar: newPath}, {where : {user_id : user_id}})
            .then(() => {
                if(oldPath !== (null || undefined || '')){
                    fs.unlinkSync(path.join(path.resolve(''), 'data/user_images', oldPath)
                )}
                
                responseHandler.sendSuccess(req, res, 200, "avatar updated successfully")
            })
            .catch(async err => {
                await UserModel.update({avatar: oldPath}, {where: {user_id : user_id}});
                responseHandler.sendFailure(req, res, 500, err)
            })

        }else {
            responseHandler.sendFailure(req, res, 404, 'no new avatar found')
        }

        
    }

    
/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete(req, res) {



        try{
            fs.unlinkSync(path.join(path.resolve(), 'data/user_images', req.body.avatar))

            await UserModel.delete({where: {user_id: req.user.user_id}})
            .then(()=>{
                responseHandler.sendSuccess(req, res, 200, "Deleted successfully")
            })

        }catch(err) {

            await UserModel.create(user);
            responseHandler.sendFailure(req, res, 400, err)

        }
        
    }
    

};



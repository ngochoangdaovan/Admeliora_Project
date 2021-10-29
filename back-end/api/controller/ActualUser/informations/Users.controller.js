'use strict';


const db = require('../../../models')(); 
const UserModel = db.Users
const CartModel = db.Cart
const phoneModel = db.PhoneNumbers
const AddressesModel = db.Addresses;


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
       
            .then((data) => {
                res.status(200).send({
                    success : true,
                    data: data
                });
            })
            .catch( err => res.status(500).send({
                success: false,
                message : err.message
            }))
        }else{
            res.status(400).send({
                success: false, 
                message : 'use dont have the authorization to do this!'
            });
        }
    
    };
    
    
    
    
    
    async getInformation(req, res) {

        try {
    
            // get user detail information 
            const user = await UserModel.findOne(
                {
                    where: {user_id : req.user.user_id},
                    attributes : {exclude : ['user_id', 'password', 'isAdmin']},
                    include : [
                        {
                            model: db.PhoneNumbers,
                            attributes: ['phoneNumbers'],
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
                    phone = user.PhoneNumbers[0].phoneNumbers 
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

                res.status(200).send({
                    success: true,
                    data: user_info
                })
            }else{
                // if user authentication failed then there is no information available
                res.status(404).send ({
                    success : false,
                    message : 'authentication failed'
                })
            }
        }
        catch(err){ 
            res.send({
                success: false,
                message: err.message
            });
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
            res.status(200).send({
                success: true,
                message: 'successfully updated user', 
            })          

        }catch(err){
            res.status(500).send({
                success: false,
                message: err.message
            })
        }
    }


    async updateAvatar(req, res){
    
        if (req.file !== undefined){ // if file not null

            let newPath = req.file.filename;
            let user_id = req.user.user_id;

            let oldPath = await UserModel.findOne({
                attributes: ['avatar'],
                where: {user_id}
            })
            
            await UserModel.update({avatar: newPath}, user_id)
            .then(() => {
                fs.unlinkSync(path.join(path.resolve(), 'data/user_images', oldPath.avatar))
            
                    res.status(200).send({
                        success: true,
                        message: 'Avatar updated successfully'
                    })
                })
            .catch(async err => {
                await this.UpdateInfo({avatar: oldPath.avatar}, user_id);
                res.status(500).send({
                    success : false,
                    message : err.message
                })
            })

        }else {
            res.status(500).send({
                success: false,
                message: 'no avatar found'
            })
        }

        
    }

    
/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete(req, res) {

        // del user 
        await UserModel.delete(
            {
                where: {user_id: req.user.user_id}
            }
        )
        .then(()=>{
            res.status(200).send({
                success: true,
                message: 'Deleted successfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                success: false,
                message: err.message
            })
        })
    }
    

};



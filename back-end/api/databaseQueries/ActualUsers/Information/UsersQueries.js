'use strict'



const db = require('../../../models')();
const UserModel = db.Users
const CartModel = db.Cart
const image_converter = require('../../../utils/imageConverter')
const fs = require('fs');
const path = require('path')





module.exports = new class UsersQueries {


/* ----------------------------------------------CREATE FUNCTIONS--------------------------------------*/

    async createManyUsers(usersList){
        await UserModel.bulkCreate(usersList);
    }




    async createUser(user_name, password, first_name, last_name,email, dob, gender, isAdmin) {

        let Admin = false;
        if (isAdmin !== (null || undefined)) {
            Admin = true;
        }

        await UserModel.create({
            user_name: user_name,
            password: password,
            first_name: first_name, 
            last_name: last_name, 
            email : email,
            level: 0,
            dob : dob,
            gender: gender,
            is_admin: Admin,
        })

    };





    /* -------------------------------------------------GET FUNCTIONS--------------------------------------------*/


    async getUsersByUserName(user_name) {
        return await UserModel.findOne({
            where: {user_name},
            attributes: ['user_id', 'user_name', 'password'],
            required: true,
            plain : true
        });
    }




    async getUserInfoByID(user_id){
        const user =  await UserModel.findOne(
            {
                where: {user_id : user_id},
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
                
        );
        
        let phone = null;
        if (user.PhoneNumbers[0] !== (null || undefined)){
            phone = user.PhoneNumbers[0].phoneNumbers 
        }
        let address = null;
        if (user.Addresses[0] !== (null || undefined)){
            address = user.Addresses[0]
        }

        return {
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
    }



    async getAllUserByAdmin(user_role){

        if (user_role === 'admin'){
            let users =  await UserModel.findAll(
                {
                    attributes : ['user_id','user_name', 'first_name', 'last_name', 'email', 'level','gender']
                    
            })
            return users
        }
        else {
            return null
        }

    };









    /* -------------------------------------------UPDATE FUNCTIONS--------------------------------------------------*/


    async UpdateInfo(fields, id) {
        console.log(fields)
        await UserModel.update(fields,
            {
                where : { 
                    user_id : id 
                }
            });
    }



    async increaseLevel(point, user_id){
        const curLevel =  UserModel.findOne ({
            where: {user_id},
            attributes: ['Level']
        });

        await UpdateInfo({Level : curLevel + point}, id)
        
    }



    async updateAvatar(newPath, user_id){


        if(newPath !== (null || undefined)){
            let oldPath = await UserModel.findOne({
                attributes: ['avatar'],
                where: {user_id}
            })
            
            await this.UpdateInfo({avatar: newPath}, user_id)
            .then(() => {
                fs.unlinkSync(path.join(path.resolve(), 'data/user_images', oldPath.avatar))
            })
            .catch(async err => {
                await this.UpdateInfo({avatar: oldPath.avatar}, user_id);
                res.status(500).send({
                    success : false,
                    message : err.message
                })
            })
   
        }



    }





    /* ----------------------------------------------DELETE FUNCTIONS----------------------------------------------------*/


    async delete(user_id){
        await UserModel.delete(
            {
                where: {user_id: user_id}
            }
        )
    }









};





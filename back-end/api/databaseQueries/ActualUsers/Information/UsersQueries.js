'use strict'



const db = require('../../../models')();
const UserModel = db.Users
const CartModel = db.Cart
const image_converter = require('../../../utils/imageConverter')
const fs = require('fs');





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

        
        return {
            user_name: user.user_name,
            first_name: user.first_name,
            last_name : user.last_name,
            email: user.email,
            level: user.level,
            dob: user.dob,
            gender: user.gender,
            avatar: user.avatar,
            PhoneNumbers: user.PhoneNumbers[0].phoneNumbers || null,
            Address: user.Addresses[0] || null,
        };
    }



    async getAllUserByAdmin(user_role){

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
            })
        }
        else {
            return {
                success: false,
                message: 'this is not a valid connection, must be user'
            }
        }

    };









    /* -------------------------------------------UPDATE FUNCTIONS--------------------------------------------------*/


    async UpdateInfo(fields,id) {
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



    async updateAvatar(newAvatar, user_id){

        try {

            //back up the old image path
            var oldPath = await UserModel.findOne({
                attributes: ['avatar'],
                where: [user_id]
            })
            var updatePath = null
            if(newAvatar !== (null || undefined || '')){
                // write new img
                updatePath = image_converter.writeImage(user_id, 'user', newAvatar)
            }


        }catch(err){
            fs.unlinkSync(updatePath)
            return { 
                success: false,
                message: err.message
            }
        }
        // update to db
        await this.UpdateInfo({avatar: updatePath}, user_id)
        // delete old img
        fs.unlinkSync(oldPath)

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





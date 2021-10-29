'use strict';

const db = require('../../../models')();
const AddressesModel = db.Addresses;





module.exports = new class AddressController {



/*--------------------------------------------CREATE-------------------------------------------------*/ 

    async addAddress(req, res, next) {
    
        const user = req.user;
        let de = false;

        // get user's addresses from the database
        const result = await AddressesModel.findOne({
            where: {user_id : user_id, default: true},
        });

        // if there is no address in the database, then the new one is default
        if (result === null){
            de = true;
        }

        // add to database
        await AddressesModel.create(
            {
                province: req.body.province,
                district: req.body.district,
                street: req.body.street,
                detail_address: req.body.detail_address,
                default:de,
                user_id : user.user_id
            }
        )
        // send back the response
        .then(async() => {
                res.status(201).send({
                    success : true,
                    message : 'address successfully added'
                })
    
            })
        .catch (err => res.send({
            ok: false,
            message:  err.message
        }))
    }


/*--------------------------------------------GET----------------------------------------------------*/ 
    
    async get(req, res){

        try {
            //  get detail addresses information
            const address = await AddressesModel.findOne({
                where : {
                    user_id : req.user.user_id, 
                    address_id : req.params.address_id
                },
                attributes: {exclude : ['user_id', 'address_id']}
            })
            res.send({
                success : true,
                data: address
            })

        }catch (err) {

            res.status(400).send({
                success : false,
                message: err.message
            })
        }
    }



    async getAllAddress (req, res) {

        try {
        
            //  get all addresses that's related to user
            const addresses = await AddressesModel.findAll(
                {
                    where: {user_id: req.user.user_id},
                    attributes : {exclude : ['address_id', 'user_id']},
                    required: true,
                }
            )
            res.status(200).send({
                success : true,
                data: addresses
            })

        }catch(err) {
            res.status(400).send({
                success : false,
                message: err.message
            })
        }
    }







/*--------------------------------------------UPDATE-------------------------------------------------*/

    async updateAddresses(req, res){
        /*
        - this api require a request that has the parameter of address id
        - request's body contain new info of address
        */

        try{

            let newInfo = req.body;
            // update info based on address id and user id 
            await AddressesModel.update( newInfo,
                {
                    where : { 
                        user_id     :   req.user.user_id,
                        address_id  :   req.params.address_id
                    }
                });

            res.status(200).send({
                success : true,
                data    : 'successfully updated address'
            })
          
        }catch(err){
            res.status(400).send({
                success: false,
                message: err.message
            })
        }

    }


    async updateStatus(req, res) {

        // set the old default to be false
        await AddressesModel.update({
            default: false,
        },{where: {
            user_id     : req.user.user_id, 
            default     :true
        }})

        //  set new default
        await AddressesModel.update({
            default: true,
        },{where: {
            address_id  :req.body.address_id, 
            user_id     :req.body.user_id,
        }})

    }


   


/*--------------------------------------------DELETE-------------------------------------------------*/ 

    async delete(req, res) {
        await AddressesModel.destroy({
            where: {
                address_id: req.params.address_id, 
                user_id: req.user.user_id
        }})
        .then(()=>{res.status(200).send({success: true, message: 'Deleted successfully'});})
        .catch(err =>{res.status(400).send({success: false, message : err.message})})
    }
    
        
};


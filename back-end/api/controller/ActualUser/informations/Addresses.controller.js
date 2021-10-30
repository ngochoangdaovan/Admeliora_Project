'use strict';

const db = require('../../../models')();
const AddressesModel = db.Addresses;
const responseHandler = require('../../../utils/responseHandler')






module.exports = new class AddressController {



/*--------------------------------------------CREATE-------------------------------------------------*/ 

    async addAddress(req, res, next) {
    
        const user = req.user;
        let de = false;

        // get user's addresses from the database
        const result = await AddressesModel.findOne({
            where: {user_id : user.user_id, default: true},
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
        .then(() => {responseHandler.sendSuccess(req, res, 200, 'address successfully added')})
        .catch (err => responseHandler.sendFailure(req, res, 400, err))
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

            // send response
            responseHandler.sendSuccess(req, res, 200, address)

        }catch (err) {

            responseHandler.sendFailure(req, res, 400, err)
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
            // send back the response 
            responseHandler.sendSuccess(req, res, 200, addresses)

        }catch(err) {
            // send back the failure
            responseHandler.sendFailure(req, res, 400, err)
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

            responseHandler.sendSuccess(req, res, 200, 'successfully updated address')
          
        }catch(err){
            responseHandler.sendFailure(req, res, 400, err)
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
            address_id  :req.body.address_id
        }})

        .then( ()=> responseHandler.sendSuccess(req, res, 200, "updated successfully"))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))

    }


   


/*--------------------------------------------DELETE-------------------------------------------------*/ 

    async delete(req, res) {
        await AddressesModel.destroy({
            where: {
                address_id: req.params.address_id
        }})
        .then(() => responseHandler.sendSuccess(req, res, 200, 'Deleted successfully'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))

    }
    
        
};


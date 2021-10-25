'use strict';

const ActualUsersQueries = require('../../../databaseQueries').ActualUsersQueries
const AddressesQueries = ActualUsersQueries.AddressesQueries





module.exports = new class AddressController {



/*--------------------------------------------CREATE-------------------------------------------------*/ 

    async addAddress(req, res, next) {
    
        const user = req.user;
        await AddressesQueries.createAddress(
            user.user_id, req.body.province,
            req.body.district, req.body.street,
            req.body.detail_address
            )
    
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
        next();
    }


/*--------------------------------------------GET----------------------------------------------------*/ 
    
    async get(req, res){
        try {
            await AddressesQueries.getOne(req.user.user_id, req.params.address_id)
            .then((address) => {
                res.send({
                    ok : true,
                    data: address
                })})

        }catch (err) {

            res.status(500).send({
                ok : false,
                message: err.message
            })
        }
    }



    async getAllAddress (req, res) {
        await AddressesQueries.getAllAddress(req.user.user_id)
        .then(data => {
            res.status(200).send({
                ok : true,
                data: data
            })
        })
        .catch(err => {
            res.status(500).send({
                ok : false,
                message: err.message
            })
        })
    }







/*--------------------------------------------UPDATE-------------------------------------------------*/

    async updateAddresses(req, res){
        /*
        - this api require a request that has the parameter of address id
        - request's body contain new info of address
        */

        try{

            let newInfo = req.body;
            await AddressesQueries.Update(newInfo, req.user.user_id, req.params.address_id)

            res.status(200).send({
                success: true,
                data : 'successfully updated address'
            })
          
        }catch(err){
            res.status(500).send({
                success: false,
                message: err.message
            })
        }

    }


   


/*--------------------------------------------DELETE-------------------------------------------------*/ 

    async delete(req, res) {
        await AddressesQueries.delete(req.user.user_id, req.params.address_id)
        .then(()=>{res.status(200).send({success: true});})
        // .catch(err =>{res.status(500).send({success: false})})
    }
    
        
};


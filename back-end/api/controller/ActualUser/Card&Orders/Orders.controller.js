'use strict';

const db = require('../../../models')();
const OrderModel = db.Orders
const {v4: uuidv4} = require('uuid')



module.exports = new class OrderController{



    



/* ----------------------------------------------CREATE---------------------------------------*/
    async createOrder(req, res){
        
        let order_id = uuidv4();
        let order = OrderModel.findByPk(order_id);
        while(order !== null){
            order_id = uuidv4();
            order = OrderModel.findByPk(order_id);
        }

        // add order to db

        // move selected products from cart to order detail

        // delete those selected products in cart

        





    }
/* ----------------------------------------------GET------------------------------------------*/
    async getAll(req, res){
        await OrderModel.findAll({
            where: {
                user_id : req.user.user_id
            }
        })
        .then((orders) => {
            res.status(200).send({
                success: true,
                data: orders
            })
        })
        .catch((err) => {
            res.status(400).send({
                success: false,
                message: err.message
            })
        })
    }


/* ----------------------------------------------UPDATE---------------------------------------*/
    async update(req, res) {

    }
/* ----------------------------------------------DELETE---------------------------------------*/    
    async delete(req, res) {
        
    }

/*---------------------------------------ORDER FUNCTIONS--------------------------------------*/ 
    async pay(req, res){

    }



}







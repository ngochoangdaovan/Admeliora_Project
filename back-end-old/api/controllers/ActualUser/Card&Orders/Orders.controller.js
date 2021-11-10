'use strict';

const db = require('../../../models')();
const OrderModel = db.Orders
const OrderDetailModel = db.OrderDetails
const ActivityLogsModel = db.ActivityLogs
const CartModel = db.Cart
const WarehouseModel = db.Warehouse
const {v4: uuidv4} = require('uuid');
const responseHandler = require('../../../utils/responseHandler')



module.exports = new class OrderController{



/* ----------------------------------------------CREATE---------------------------------------*/
    async Pay(req, res){


        try{
            //  list of chosen products from cart to buy
            const products = req.body.products
            
            // create the id for the order
            let order_id = uuidv4();
            let order = OrderModel.findByPk(order_id);
            while(order !== null){
                order_id = uuidv4();
                order = OrderModel.findByPk(order_id);
            }

            for (let product of products){
                product.order_id = order_id;
            }


            const order_name = Date.now().toString() + req.user.user_id 

            // add order to db
            await OrderModel.create({
                order_id : order_id,
                order_name : order_name,
                total_price : req.body.total_price,
                status : false,
                address_id : req.body.address_id,
                phone_number : req.body.phone_number,
                user_id : req.user.user_id,

            })

            await OrderDetailModel.bulkCreate(products)


            //  update quantity and delete those selected products in cart
            for (let item of products) {

                //  get old value
                let old_quantity = await WarehouseModel.findOne({
                    where: {product_line_id: item.product_line_id},
                    attributes : ['quantity']
                })

                // update quantity = old_quantity - buy_quantity
                await WarehouseModel.update(
                    {quantity: old_quantity - item.quantity},
                    {where : {product_line_id: item.product_line_id}}
                )

                await CartModel.destroy({
                    where: {
                        id : item.id,
                    }
                })
            }

            await ActivityLogsModel.create({
                user_id: req.user.user_id,
                message: `${order_name} created successfully at ${Date.now()}`
            })
            // send response
            responseHandler.sendSuccess(req, res, 200, 'Success!')

        }catch (error){
            responseHandler.sendFailure(req, res, 400, error)
        }

        





    }
/* ----------------------------------------------GET------------------------------------------*/
    async getAll(req, res){
        // get all user's orders 
        await OrderModel.findAll({
            where: {
                user_id : req.user.user_id,
            },
            include : [
                {
                    model: db.PhoneNumbers,
                    attributes : ['phone_number']
                },
                {
                    model: db.Addresses,
                    attributes : {exclude : ['address_id']}
                }
            ]
        })
        .then(orders => responseHandler.sendSuccess(req, res, 200, orders))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }



    async getDetails(req, res) {
        await OrderDetailModel.findAll({
            where: {
                order_id: req.params.order_id
            }
        })
        .then(details => responseHandler.sendSuccess(req, res, 200, details))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }



/* ----------------------------------------------UPDATE---------------------------------------*/
    async update(req, res) {
        await OrderModel.update(req.body, {
            where: {
                order_id: req.params.order_id,
            }
        })
        .then(() => responseHandler.sendSuccess(req, res, 200, 'successfully updated'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))

    }
/* ----------------------------------------------DELETE---------------------------------------*/    
    async delete(req, res) {
        
        await OrderModel.destroy({where: {
            order_id: req.params.order_id,
        }})
        .then(() => responseHandler.sendSuccess(req, res, 200, 'successfully deleted'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }



}







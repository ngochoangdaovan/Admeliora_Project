
const db = require('../../../models')();
const CartModel = db.Cart;
const ImageModel = db.ProductImages



module.exports = new class CartController{





/* ----------------------------------------------CREATE---------------------------------------*/
    async addToCart (req, res) {
        let image = await ImageModel.findOne({
            where : {

            }
        })
        await CartModel.create({
            user_id : req.user.user_id,
            product_detail_id: req.body.product_detail_id,
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            discount: req.body.discount,
            image: req.body.image          

        })
        .then(() => {
            res.status(200).send({
                success: true,
                message: 'product added to cart successfully'
            })
        })
        .catch(err => {
            res.status(400).send({
                success: false,
                message: err.message
            })
        })


    }

/* ----------------------------------------------GET------------------------------------------*/
    async getAll(req, res) {

        await CartModel.findAll({
            where: {
                user_id: req.user.user_id
            },
            attributes : ['product_detail_id', 'name', 'quantity', 'price', 'discount', 'image']
        })
        .then((data) => {
            res.status(200).send({
                success: true,
                data : data
            })
        })
        .catch((error) => {
            res.status(400).send({
                success : false,
                message : error.message
            })
        })

    }



/* ----------------------------------------------UPDATE---------------------------------------*/
    async update (req, res){
        await CartModel.update(req.body ,{
            where : {
                id : req.body.id
            }
        })
        .then(() => {
            res.status(200).send({
                success : true,
                message : 'Updated successfully'
            })
        })
        .catch(err => {
            res.status(400).send({
                success : false,
                message : err.message
            })
        })
    }

/* ----------------------------------------------DELETE---------------------------------------*/
    async delete (req, res) {
        await CartModel.destroy({
            where : {
                id : req.body.id
            }
        })
        .then(() => {
            res.status(200).send({
                success : true,
                message : 'deleted successfully'
            })
        })
        .catch(err => {
            res.status(400).send({
                success : false,
                message : err.message
            })
        })
    }

};






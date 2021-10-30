'use strict';


const db = require('../../models')();
const WarehouseModel = db.Warehouse;
const ProductImagesModel = db.ProductImages;
const responseHandler = require('../../utils/responseHandler')


module.exports = new class WarehouseController {




/*--------------------------------------------CREATE-------------------------------------------------*/ 
    async add (req, res) {
        let input = req.body;

        await WarehouseModel.create ({
            product_line_id: input.product_line_id,
            size_id: input.size_id,
            color_id: input.color_id,
            quantity: input.quantity,
            discount: 0,
            rate : 0
        })
        .then(() => responseHandler.sendSuccess(req, res, 201, 'Product line added successfully'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))

    }
    

/*--------------------------------------------GET----------------------------------------------------*/ 
    async getAll (req, res) {
        // try{
            // get all product and necessary info form database
            // group them by product_line_id, color_id 
            let product = await WarehouseModel.findAll({
                attributes : ['product_line_id', 'color_id'],
                include : [
                    {
                        model: db.ProductLines,
                        attributes : ['name', 'price'],
                        include : {
                            model: db.Categories,
                            attributes : ['name']
                        }
                    },
                    {
                        model: db.ProductColors,
                        attributes : ['color_id','color_name'],
                    }
                ],
                group : ['product_line_id', 'color_id'],
                   
            })
    
    
            // console.log(item)
            const products = []
            // rearrange properties and add to an array
            for (let item of product) {
                
                console.log(item)
                const info = {}
                info.product_line_id = item.product_line_id;
                info.color_id = item.ProductColor.color_id;
                info.product_line = item.ProductLine.name
                info.category = item.ProductLine.Category.name
                info.price = item.ProductLine.price
                info.color_name = item.ProductColor.color_name
                info.name = info.category + ' ' + info.product_line +' '+ info.color_name
                info.images = []
                // get 3 image relate to the product
                let paths =  await ProductImagesModel.findAll({
                    where: {
                        color_id : info.color_id},
                        attributes: ['image_path', 'default'],
                        limit: 3
                    }
                );
                for (let path of paths) {
                    info.images.push(path);
                }

                products.push(info)
            }

            responseHandler.sendSuccess(req, res, 200, products)
            
        // }catch(err) {
        //     responseHandler.sendFailure(req, res, 400, err)    
        // }
    }





    async get(req, res){
        
        await WarehouseModel.findOne({
            where: {
                product_detail_id : req.params.product_line_id
            },
            attributes : ['product_detail_id', 'quantity', 'discount', 'rate'],
            include: [
                {
                    model: db.ProductLines,
                    attributes : ['product_line_id', 'name', 'price'],
                },
                {
                    model: db.ProductColors,
                    attributes : ['color_id', 'color_name'],
                    include : {
                        model: db.ProductImages,
                        attributes : ['image_path'],
                    }
                },
                {
                    model: db.Sizes,
                    attributes : ['size_id', 'size_name', 'size_info'],
                    
                }
            ]
        })
        .then(data => responseHandler.sendSuccess(req, res, 200, data))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }
    




    async getByColorAndLine (req, res){    
        
        try{

            // get all product that has the same color and product line and it's related information
            let product_info = await WarehouseModel.findAll({
                where: {
                    product_line_id: req.params.product_line_id,
                    color_id: req.params.color_id
                },
                attributes : ['product_detail_id', 'quantity', 'discount', 'rate'],
                include: [
                    {
                        model: db.ProductLines,
                        attributes : ['name', 'price'],
                        include :{
                            model: db.Categories,
                            attributes : ['name']
                        }
                    },
                    {
                        model: db.ProductColors,
                        attributes : ['color_id','color_name'],
                    },
                    {
                        model: db.Sizes,
                        attributes : ['size_name', 'size_info'],
                        
                    }
                ]
            })

            const Sizes = []
            const images = []
            const info = {}

            // because these product share the same properties, then we rearrange them in to a object
            
            info.product_line = product_info[0].ProductLine.name;
            info.category = product_info[0].ProductLine.Category[0].name;
            info.price = product_info[0].ProductLine.price;
            info.color = product_info[0].ProductColor.color_name;
            info.discount = product_info[0].discount;
            info.rate = product_info[0].rate;
            info.name = info.category + ' ' + info.product_line + ' ' + info.color

            info.Sizes = Sizes;
            info.images = images;
            info.defaultImage = await ProductImagesModel.findOne({
                where: {
                    color_id : req.params.color_id,
                    default : true
                }
            })


            // because a product line with a specific color has different sizes, then we put it to an array 
            // which contain info about quantity, size's info
            for (let item of product_info){
                let product = {}
                product.product_detail_id = item.product_detail_id
                product.size_name = item.Size.size_name
                product.size_info = item.Size.size_info
                product.quantity = item.quantity
                info.Sizes.push(product)

            }

            // because a color share the same image for every size, then images will contain in a array.
            // we get images from database
            const image_paths = await ProductImagesModel.findAll({
                where: {
                    color_id : req.params.color_id
                }, 
                    attributes: ['image_path']
                }
            );
            // get only the paths
            for (let img of image_paths) {
                info.images.push(img.image_path);
            }

            responseHandler.sendSuccess(req, res, 200, info)

        // if error then send the error message
        }catch(error) {
            responseHandler.sendFailure(req, res, 400, error)
        }
    };





/*--------------------------------------------UPDATE-------------------------------------------------*/ 
    async update (req, res) {

        await WarehouseModel.update(req.body, {where: {product_line_id: req.params.product_line_id}})
        .then(() => responseHandler.sendSuccess(req, res, 200, 'Updated successfully!'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }

/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete (req, res) {
        await WarehouseModel.delete({where: {product_line_id: req.params.product_line_id}})
        .then(() => responseHandler.sendSuccess(req, res, 200, 'Deleted successfully'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }











}

















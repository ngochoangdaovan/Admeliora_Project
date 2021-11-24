'use strict';


const db = require('../../models')();
const WarehouseModel = db.Warehouse;
const ProductImagesModel = db.ProductImages;
const responseHandler = require('../../utils/responseHandler')
const Op = db.Sequelize.Op;

module.exports = new class WarehouseController {

    constructor() {
        this.filterBy = this.filterBy.bind(this)
        this.getAll = this.getAll.bind(this)
    }


    /*--------------------------------------------CREATE-------------------------------------------------*/
    async add(req, res) {
        let input = req.body;

        try {



            // check if product_line_id and color is exist
            let item = await WarehouseModel.findOne({
                where: {
                    product_line_id: input.product_line_id,
                    color_id: input.color_id,
                    size_id: input.size_id
                },
                attributes: ['product_detail_id', 'quantity']
            })

            if (item !== null && item > 0) {
                // update quantity 
                await WarehouseModel.update({
                    quantity: item.quantity + input.quantity
                },
                    {
                        where: {
                            product_detail_id: item.product_detail_id
                        }
                    })
            } else {
                // create new product line
                await WarehouseModel.create({
                    product_line_id: input.product_line_id,
                    size_id: input.size_id,
                    color_id: input.color_id,
                    quantity: input.quantity,
                    discount: 0,
                    rate: 0
                })
            }
            responseHandler.sendSuccess(req, res, 201, 'Product line added successfully')
        } catch (err) {
            responseHandler.sendFailure(req, res, 400, err.message)
        }

    }


    /*--------------------------------------------GET----------------------------------------------------*/
    async getAll(req, res) {
        try {
            // get all product and necessary info form database
            // group them by product_line_id, color_id 
            let product = await WarehouseModel.findAll({
                attributes: ['product_line_id', 'color_id'],
                include: [
                    {
                        model: db.ProductLines,
                        attributes: ['name', 'price'],
                        include: {
                            model: db.Categories,
                            attributes: ['name']
                        }
                    },
                    {
                        model: db.ProductColors,
                        attributes: ['color_id', 'color_name'],
                    }
                ],
                group: ['product_line_id', 'color_id'],

            })

            const final_data = await this.PreProcessing(product)
            responseHandler.sendSuccess(req, res, 200, final_data)

        } catch (err) {
            responseHandler.sendFailure(req, res, 400, err)
        }
    }


    async getToSearch(req, res) {
        try {
            let data = await WarehouseModel.findAll({
                attributes: ['product_line_id', 'color_id'],
                include: [
                    {
                        model: db.ProductLines,
                        attributes: ['name', 'price'],
                        include: {
                            model: db.Categories,
                            attributes: ['name']
                        }
                    },
                    {
                        model: db.ProductColors,
                        attributes: ['color_id', 'color_name'],
                    }
                ],
                group: ['product_line_id', 'color_id'],
            })

            const final_data = await this.PreProcessing(data, { for: 'search' })
            responseHandler.sendSuccess(req, res, 200, final_data)
        } catch (err) {
            responseHandler.sendFailure(req, res, 400, err)
        }
    }

    async PreProcessing(data, options) {
        const products = []
        // rearrange properties and add to an array
        for (let item of data) {

            const info = {}
            let slug = ''
            info.product_line_id = item.product_line_id;
            info.color_id = item.ProductColor.color_id;
            info.product_line = item.ProductLine.name
            info.category = item.ProductLine.Category.name
            info.price = item.ProductLine.price
            info.color_name = item.ProductColor.color_name
            info.name = info.category + ' ' + info.product_line + ' ' + info.color_name
            for (let i of info.name) {
                if (i === ' ') {
                    slug += '-';
                } else {
                    slug += i;
                }
            }

            info.slug = slug;

            if ( options !== undefined && options.for == 'search') {
                // get 1 image relate to the product
                let path = await ProductImagesModel.findOne({
                    where: {
                        default: true,
                        color_id: info.color_id
                    },
                    attributes: ['image_path'],
                });

                info.images = path.image_path;

            } else {
                // get 3 image relate to the product
                info.images = []
                let paths = await ProductImagesModel.findAll({
                    where: {
                        color_id: info.color_id
                    },
                    attributes: ['image_path'],
                    limit: 3
                });

                for (let path of paths) {
                    info.images.push(path.image_path);
                }

                products.push(info)
            }
        }

        return products
    }



    async filterBy(req, res) {

        const price_from = req.query.price_from === (null || undefined) ? 0 : req.query.price_from;
        const price_to = req.query.price_to === (null || undefined) ? Number.POSITIVE_INFINITY : req.query.price_to;
        const product_line_id = req.query.product_line_id === (null || undefined) ? {} : { product_line_id: req.query.product_line_id };


        await WarehouseModel.findAll({
            where: product_line_id,
            attributes: ['product_line_id', 'color_id'],
            include: [
                {
                    model: db.ProductLines,
                    attributes: ['name', 'price'],
                    where: {
                        price: {
                            [Op.gte]: price_from,
                            [Op.lte]: price_to

                        }
                    },
                    include: {
                        model: db.Categories,
                        attributes: ['name']
                    }
                },
                {
                    model: db.ProductColors,
                    attributes: ['color_id', 'color_name'],
                }
            ],
            group: ['product_line_id', 'color_id']
        })

            .then(async data => {

                const final_data = await this.PreProcessing(data)
                responseHandler.sendSuccess(req, res, 200, final_data)
            })
            .catch(err => responseHandler.sendFailure(req, res, 400, err))
    }



    async filterByPrice(req, res) {

    }


    async getByColorAndLine(req, res) {

        try {

            // get all product that has the same color and product line and it's related information
            let product_info = await WarehouseModel.findAll({
                where: {
                    product_line_id: req.params.product_line_id,
                    color_id: req.params.color_id
                },
                attributes: ['product_detail_id', 'quantity', 'discount', 'rate'],
                include: [
                    {
                        model: db.ProductLines,
                        attributes: ['name', 'price'],
                        include: {
                            model: db.Categories,
                            attributes: ['name']
                        }
                    },
                    {
                        model: db.ProductColors,
                        attributes: ['color_id', 'color_name'],
                    },
                    {
                        model: db.Sizes,
                        attributes: ['size_name', 'size_info'],

                    }
                ]
            })

            if (product_info.length !== 0) {
                const Sizes = []
                const images = []
                const info = {}

                // because these product share the same properties, then we rearrange them in to a object
                let slug = ''
                info.product_line = product_info[0].ProductLine.name;
                info.category = product_info[0].ProductLine.Category.name;
                info.price = product_info[0].ProductLine.price;
                info.color = product_info[0].ProductColor.color_name;
                info.discount = product_info[0].discount;
                info.rate = product_info[0].rate;
                info.name = info.category + ' ' + info.product_line + ' ' + info.color
                for (let i of info.name) {
                    if (i === ' ') {
                        slug += '-';
                    } else {
                        slug += i;
                    }
                }

                info.slug = slug;

                info.Sizes = Sizes;
                info.images = images;
                info.defaultImage = {}


                // because a product line with a specific color has different sizes, then we put it to an array 
                // which contain info about quantity, size's info
                for (let item of product_info) {
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
                        color_id: req.params.color_id
                    },
                    attributes: ['image_path', 'default']
                }
                );
                // get only the paths
                for (let img of image_paths) {
                    if (img.default !== true) {
                        info.images.push(img.image_path);
                    } else {
                        info.defaultImage = img.image_path
                    }
                }

                responseHandler.sendSuccess(req, res, 200, info)
            } else {
                responseHandler.sendSuccess(req, res, 200, 'no product found')
            }


            // if error then send the error message
        } catch (error) {
            // responseHandler.sendFailure(req, res, 400, error)
            res.send("jkl")
        }
    };





    /*--------------------------------------------UPDATE-------------------------------------------------*/
    async update(req, res) {

        await WarehouseModel.update(req.body, { where: { product_line_id: req.params.product_line_id } })
            .then(() => responseHandler.sendSuccess(req, res, 200, 'Updated successfully!'))
            .catch(err => responseHandler.sendFailure(req, res, 400, err))
    }

    /*--------------------------------------------DELETE-------------------------------------------------*/
    async delete(req, res) {
        await WarehouseModel.delete({ where: { product_line_id: req.params.product_line_id } })
            .then(() => responseHandler.sendSuccess(req, res, 200, 'Deleted successfully'))
            .catch(err => responseHandler.sendFailure(req, res, 400, err))
    }











}



















const db = require('../../models')();
const WarehouseModel = db.Warehouse;
const ProductImagesQueries = require('./ProductImagesQueries')
const ProductLinesQueries = require('./ProductLinesQueries')


module.exports = new class WarehouseQueries {




/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
    async add (product_line_id, size_id, color_id, quantity, price){
        await WarehouseModel.create ({
            product_line_id: product_line_id,
            size_id: size_id,
            color_id: color_id,
            quantity: quantity,
            discount: 0,
            rate : 0,
            price : price
        })
    }



/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
    async get (product_detail_id){
        let product_info = await WarehouseModel.findOne({
            where: {
                product_detail_id : product_detail_id
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
                        model: db.ProductImages
                    }
                },
                {
                    model: db.Sizes,
                    attributes : ['size_id', 'size_name', 'size_info'],
                    
                }
            ]
        })

        // let images = await ProductImagesQueries.getAll(product_info.color_id);

        return  product_info
    }


    async getByColorAndLine (line_id, color_id){
        let product_info = await WarehouseModel.findAll({
            where: {
                product_line_id: line_id,
                color_id: color_id
            },
            attributes : ['product_detail_id', 'quantity', 'discount', 'rate'],
            include: [
                {
                    model: db.ProductLines,
                    attributes : ['name', 'price'],
                },
                {
                    model: db.ProductColors,
                    attributes : ['color_id','color_name'],
                    include : {
                        model: db.ProductImages
                    }
                },
                {
                    model: db.Sizes,
                    attributes : ['size_name', 'size_info'],
                    
                }
            ]
        })

        const Sizes = []
        const info = {}
        info.name = product_info[0].ProductLine.name;
        info.price = product_info[0].ProductLine.price;
        info.color = product_info[0].ProductColor.color_name;
        info.discount = product_info[0].discount;
        info.rate = product_info[0].rate;
        info.images = await ProductImagesQueries.getAll(product_info[0].ProductColor.color_id);
        info.Sizes = Sizes
    

        for (let item of product_info){
            let product = {}
            product.product_detail_id = item.product_detail_id
            product.size_name = item.Size.size_name
            product.size_info = item.Size.size_info
            product.quantity = item.quantity
            info.Sizes.push(product)

        }


        return info
    }




    async getAll (){
        let product =  await WarehouseModel.findAll({
            attributes : ['product_line_id', 'color_id'],
            include : [
                {
                    model: db.ProductLines,
                    attributes : ['name', 'price']
                },
                {
                    model: db.ProductColors,
                    attributes : ['color_name'],
                }
            ],
            group : ['product_line_id', 'color_id'],
               
        })

     
        

        const products = []
        for (let item of product) {
            let info = {}
            info.product_line_id = item.product_line_id;
            info.color_id = item.color_id;
            info.name = item.ProductLine.name
            info.price = item.ProductLine.price
            info.color = item.ProductLine.color
            info.images = await ProductImagesQueries.getLimit(item.color_id)
            products.push(info)
        }

        return products;
    }


/* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/
    
    async update (product_line_id, newInfo){
        await WarehouseModel.update(newInfo, {where: {product_line_id: product_line_id}})
    }

    async updateDiscount (product_line_id, newDiscount) {
        await WarehouseModel.update ({discount: newDiscount}, {where : {product_line_id: product_line_id}})
    }

    async updateRate (product_line_id, newRate) {
        await WarehouseModel.update ({rate: newRate}, {where : {product_line_id: product_line_id}})
    }

    async updateQuantity (product_line_id, newQuantity) {
        await WarehouseModel.update ({quantity: newQuantity}, {where : {product_line_id: product_line_id}})
    }

    async increaseRate (product_line_id, rateAmount) {
        let oldRate = await findOne({where: {product_line_id: product_line_id}});
        await update({rate: oldRate + rateAmount}, product_line_id)
    }


/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

    async delete (product_line_id){
        await WarehouseModel.delete({where: {product_line_id: product_line_id}})
    }

};

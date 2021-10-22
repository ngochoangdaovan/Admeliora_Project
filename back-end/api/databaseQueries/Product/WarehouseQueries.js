

const db = require('../../models')();
const WarehouseModel = db.Warehouse;
const ProductImagesQueries = require('./ProductImagesQueries')
const ProductLinesQueries = require('./ProductLinesQueries')


const WarehouseQueries = {};

/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
WarehouseQueries.add = async function (product_line_id, size_id, color_id, quantity, price){
    await WarehouseModel.create ({
        product_line_id: product_line_id,
        size_id: size_id,
        color_id: color_id,
        quantity: quantity,
        discount: 0,
        price : price
    })
}



/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
WarehouseQueries.get = async function (product_detail_id){
    let product_info = await WarehouseModel.findOne({
        where: {
            product_detail_id : product_detail_id
        },
        include:{
            model : ProductLines,
            include: {
                model: Categories
            }
        }, 
        include: {
            model : ProductSizes
        }, 
        include: {
            model : ProductColors
        },
    })

    let image = await ProductImagesQueries.getAll(product_info.color_id);
    product_info.images = image;

    return  product_info
}


WarehouseQueries.getProduct = async function (product_line_id, size_id){
    await WarehouseModel.findAll ({
        where: {
            product_line_id: product_line_id,
            size_id: size_id
        }
    })
}


WarehouseQueries.getAll = async function (){
    let product =  await WarehouseModel.findAll({
        attributes: ['product_lines.product_line_id', 'product_lines.name', 'price', 'discount', 'product_colors.color_id', 'color_name'],
        group: ['product_colors.color_id'],
        include: {
            model: ProductLines
        },
        include: {
            model: ProductColors
        }
    })

    let image = await ProductImagesQueries.getAll(product.color_id)
    result.images = image;
    return result;
}


/* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/
WarehouseQueries.updateDiscount = async function (product_line_id, newDiscount) {
    await WarehouseModel.update ({discount: newDiscount}, {where : {product_line_id: product_line_id}})
}

WarehouseQueries.updateRate = async function (product_line_id, newRate) {
    await WarehouseModel.update ({rate: newRate}, {where : {product_line_id: product_line_id}})
}

WarehouseQueries.updateQuantity = async function (product_line_id, newQuantity) {
    await WarehouseModel.update ({quantity: newQuantity}, {where : {product_line_id: product_line_id}})
}

WarehouseQueries.increaseRate = async function (product_line_id, rateAmount) {
    let oldRate = await WarehouseQueries.findOne({where: {product_line_id: product_line_id}});
    await WarehouseQueries.update({rate: oldRate + rateAmount}, product_line_id)
}


/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

WarehouseQueries.delete = async function (product_line_id){
    await WarehouseModel.delete({where: {product_line_id: product_line_id}})
}
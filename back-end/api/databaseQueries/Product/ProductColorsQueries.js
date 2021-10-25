const db = require('../../models')();
const ColorModel = db.ProductColors;

module.exports = new class ColorQueries {


/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
    async add(product_line_id, color_name){
        await ColorModel.create({product_line_id, color_name})
    }


    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
    async getAll(product_line_id){
        return await ColorModel.findAll({where: {product_line_id:product_line_id}});
    }

    async get (product_line_id, color_id){
        return await ColorModel.findOne({where: {product_line_id: product_line_id, color_id: color_id}});
    }


    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

    async delete(color_id){
        await ColorModel.destroy({where: {color_id : color_id}})
    }

    async deleteAll(){
        await ColorModel.destroy({where: {product_line_id : product_line_id}})
    }




};









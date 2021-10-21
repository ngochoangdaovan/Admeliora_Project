const db = require('../../models')();
const ColorModel = db.ProductColors;

const ColorQueries = {};

/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
ColorQueries.add = async function (product_line_id, color_name){
    await ColorModel.create({product_line_id, color_name})
}


/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
ColorQueries.getAll = async function (){
    await ColorModel.findAll({where: {product_line_id:product_line_id}});
}


/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

ColorQueries.delete = async function (color_id){
    await ColorModel.delete({where: {color_id : color_id}})
}

ColorQueries.deleteAll = async function(){
    await ColorModel.destroy({where: {product_line_id : product_line_id}})
}






module.exports = ColorQueries;




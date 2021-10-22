const db = require('../../models')();
const ProductImagesModel = db.ProductImages;


const ImagesQueries = {};



/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
ImagesQueries.add = async function (color_id, image_path){
    ProductImagesModel.create({color_id : color_id, image_path : image_path});
}


/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
ImagesQueries.getAll = async function (color_id){
    return ProductImagesModel.find({where: {color_id : color_id}});
}

/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

ImagesQueries.delete = async function(id){
    await ProductImagesModel.delete({where: {id: id}})
}


ImagesQueries.deleteAll = async function(color_id){
    await ProductImagesModel.destroy({where: {color_id: color_id}})
}




module.exports = ImagesQueries;




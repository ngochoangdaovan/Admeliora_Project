const db = require('../../models')();
const ProductImagesModel = db.ProductImages;


module.exports = new class ImagesQueries {


    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
    async add (image_paths){
        ProductImagesModel.bulkCreate(image_paths);
    }


    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
    async getAll (color_id){
        return ProductImagesModel.find({where: {color_id : color_id}});
    }

    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

    async delete(id){
        await ProductImagesModel.delete({where: {id: id}})
    }


    async deleteAll(color_id){
        await ProductImagesModel.destroy({where: {color_id: color_id}})
    }


};



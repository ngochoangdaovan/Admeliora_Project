const db = require('../../models')();
const ProductImagesModel = db.ProductImages;
const fs = require('fs');


module.exports = new class ImagesQueries {


    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
    async add (image_paths){
        await ProductImagesModel.bulkCreate(image_paths);
    }


    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
    async getAll (color_id){
        let paths =  await ProductImagesModel.findAll({where: {color_id : color_id}, attributes: ['id','image_path']});
        return paths;
    }


    async getLimit (color_id){
        let paths =  await ProductImagesModel.findAll({where: {color_id : color_id}, attributes: ['id','image_path'], limit: 3});
        return paths;
    }
    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

    async delete(id){
        const images = await ProductImagesModel.findOne({id:id});
        fs.unlinkSync(images.image_path)
        await ProductImagesModel.delete({where: {id: id}})
    }


    async deleteAll(color_id){
        await ProductImagesModel.destroy({where: {color_id: color_id}})
    }


};



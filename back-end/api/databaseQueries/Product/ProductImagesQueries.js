const db = require('../../models')();
const ProductImagesModel = db.ProductImages;
const ImageConvert = require('../../utils/imageConverter')


module.exports = new class ImagesQueries {


    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
    async add (image_paths){
        await ProductImagesModel.bulkCreate(image_paths);
    }


    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
    async getAll (color_id){
        let paths =  await ProductImagesModel.findAll({where: {color_id : color_id}, attributes: ['image_path']});
        if (paths.length > 0){
            const image_list = [];

            for (let i = 0; i < images.length; i++) {
                let img = await ImageConvert.readImage(paths[i])
                image_list.push(img);
            }
            return image_list;
        }else {
            return []
        }
    }


    async getLimit (color_id){
        let paths =  await ProductImagesModel.findAll({where: {color_id : color_id}, attributes: ['image_path'], limit: 3});
        if (paths.length > 0){
            const image_list = [];

            for (let i = 0; i < images.length; i++) {
                let img = await ImageConvert.readImage(paths[i])
                image_list.push(img);
            }
            return image_list;
        }else {
            return []
        }
    }
    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

    async delete(id){
        await ProductImagesModel.delete({where: {id: id}})
    }


    async deleteAll(color_id){
        await ProductImagesModel.destroy({where: {color_id: color_id}})
    }


};



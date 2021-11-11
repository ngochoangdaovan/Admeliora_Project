'use strict';

const db = require('../../models')();
const ProductImagesModel = db.ProductImages;
const fs = require('fs');
const path = require('path');
const responseHandler = require('../../utils/responseHandler')


module.exports = new class ImageController {



/* ----------------------------------------------CREATE---------------------------------------*/

    async add (req, res) {
        try {
            
            let files = req.files;
            let color_id = req.body.color_id;
            let im_paths = []

            // get the array of file object from request
            if (files.length > 0){
                for (let img of files){ // get only the filename from the file object
                    const object = {
                        image_path : img.filename,
                        default : false,
                        color_id : color_id
                    }
                    im_paths.push(object);
                };

                const exist = await ProductImagesModel.findOne({where: {
                    color_id: color_id,
                    default : true
                }})

                // if there is no default image in database then insert the first element as default
                if (exist === null) {
                    // set the first image to be default image 
                    im_paths[0].default = true;
                }
                

                await ProductImagesModel.bulkCreate(im_paths)
                .then(() => responseHandler.sendSuccess(req, res, 201, 'Image successfully added'))

        
            }else{
                throw new Error('no image sent to server')
            }
            
        }catch (err) {
            responseHandler.sendFailure(req, res, 400, err)

        }
    }
    
    
    
    
/* ----------------------------------------------GET------------------------------------------*/
  
    async getAll (req, res){
    
        try {
            const images = await ProductImagesModel.findAll({
                where: {
                    color_id : req.params.color_id
                }, 
                attributes: ['id','image_path']})
            if (images.length > 0){

                responseHandler.sendSuccess(req, res, 200, images)
    
            }else {
                responseHandler.sendFailure(req, res, 404, 'Image not found')

            }
    
        }catch (err) {
            responseHandler.sendFailure(req, res, 400, err)
        }
        
    }
    

    
/* ----------------------------------------------DELETE---------------------------------------*/
    
    async delete (req, res){
    
        await ProductImagesModel.destroy({where: {color_id: req.params.image_id}})
        .then(() => {

            fs.unlinkSync(path.join(path.resolve(), 'data/product_images', req.body.image_path));
            
            responseHandler.sendSuccess(req, res, 200, 'image deleted successfully')

        })
        .catch(err => {
            responseHandler.sendFailure(req, res, 400, err)
        })
    }
    
    
};












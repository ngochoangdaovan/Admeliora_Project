'use strict';

const db = require('../../models')();
const ProductImagesModel = db.ProductImages
const fs = require('fs');


module.exports = new class ImageController {



/* ----------------------------------------------CREATE---------------------------------------*/

    async add (req, res) {
        try {
            
            let files = req.files;
            let im_paths = []

            // get the array of file object from request
            if (files.length > 0){
                for (let img of files){ // get only the filename from the file object
                    const object = {
                        file_path : img.filename,
                        default : false,
                    }
                    im_paths.push(object);
                };

                // set the first image to be default image 
                im_paths[0].default = true;

                await ProductImagesModel.bulkCreate(im_paths)
                .then(()=>{
                    res.status(201).send({
                        success : true,
                        message : 'Image successfully added'
                    })
                })
        
            }else{
                throw new Error('no image sent to server')
            }
            
        }catch (err) {
            res.status(400).send({
                success : false,
                message : err.message
            })
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

                res.status(200).send({
                    success : true,
                    data : images
                })
    
            }else {
                res.status(404).send ({
                    success: false,
                    message: 'Image not found'
                })
            }
    
        }catch (err) {
            res.status(400).send({
                success : false,
                message : err.message
            })
        }
        
    }
    

    
/* ----------------------------------------------DELETE---------------------------------------*/
    
    async delete (req, res){
        await ProductImagesModel.destroy({where: {color_id: req.params.image_id}})
        .then(() => {
            res.status(200).send({
                success: true,
                message: 'image deleted successfully'
            })

        })
        .catch(err => {
            res.status(400).send({
                success: false,
                message: err.message
            })
        })
    }
    
    
};












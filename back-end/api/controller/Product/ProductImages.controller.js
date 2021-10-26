'use strict';

const {ImagesQueries} = require('../../databaseQueries').ProductQueries
const {ImageValidation} = require('../../utils/schemaValidation');
const ImageConvert = require('../../utils/imageConverter');
const { v4: uuidv4 } = require('uuid');


module.exports = new class ImageController {




    async add (req, res) {
        try {
            await ImageValidation.validate(req.body);
            
            // initial file name
            let file_name = req.body.color_id + '' +  uuidv4();
            // get image data array
            let imgs = req.body.images
            // initial image paths
            let im_paths = []

            // read image data and add to db
            for (let ig of imgs){
                
                // write image to file system and return its path
                let file_path = ImageConvert.writeImage(file_name, 'product', ig);
                // create an object that contain formation to add into the db
                let object = {color_id : req.body.color_id, image_path : file_path}
                // push each of them to array to add many 
                im_paths.push(object)
            }
    
            await ImagesQueries.add(im_paths)
            .then(()=>{
                res.status(201).send({
                    ok : true,
                    message : 'Image successfully added'
                })
            })
    
        }catch (err) {
            res.status(500).send({
                ok : false,
                message : err.message
            })
        }
    }
    
    
    
    
    
    async getAll (req, res){
    
        try {
            const images = await ImagesQueries.getAll(req.params.color_id);
            if (images.length > 0){

                res.status(200).send({
                    ok : true,
                    data : images
                })
    
            }else {
                res.status(404).send ({
                    ok: false,
                    message: 'Image not found'
                })
            }
    
        }catch (err) {
            res.status(500).send({
                ok : false,
                message : err.message
            })
        }
        
    }
    
    
    
    async delete (req, res){
        await ImagesQueries.delete(req.params.image_id)
    }
    
    
};












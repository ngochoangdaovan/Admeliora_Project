'use strict';

const {ImagesQueries} = require('../../databaseQueries').ProductQueries
const ImageConvert = require('../../utils/imageConverter');


module.exports = new class ImageController {




    async add (req, res) {
        try {
            
            let files = req.files;
            let im_paths = []
            if (files.length > 0){
                for (let img of files){
                    im_paths.push(img.filename);
                };

                await ImagesQueries.add(im_paths)
                .then(()=>{
                    res.status(201).send({
                        ok : true,
                        message : 'Image successfully added'
                    })
                })
        
            }else{
                throw new Error('no image sent to server')
            }
            
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












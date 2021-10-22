'use strict';

const {ImagesQueries} = require('../../databaseQueries').ProductQueries
const {ImageValidation} = require('../../utils/schemaValidation');
const ImageConvert = require('../../utils/imageConverter');
const { v4: uuidv4 } = require('uuid');


const ImageController = {};


ImageController.add = async function (req, res) {
    try {
        await ImageValidation.validate(req.body);

        let file_name = req.body.color_id + '' +  uuidv4();
        let file_path = ImageConvert.writeImage(file_name);

        await ImagesQueries.add(req.body.color_id, file_path)
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





ImageController.getAll = async function (req, res){

    try {
        const images = await ImagesQueries.getAll(req.params.color_id);
        if (images.length > 0){
            const image_list = [];

            for (let i = 0; i < images.length; i++) {
                image_list.push(ImageConvert.readImage(images[i].image_path));
            }

            res.status(200).send({
                ok : true,
                data : image_list
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



ImageController.delete = async function (req, res){
    await ImagesQueries.delete(req.params.)
}






module.exports = ImageController;





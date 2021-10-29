'use strict';



const db = require('../../models')();
const ColorModel = db.ProductColors;
const {ColorValidation} = require('../../utils/schemaValidation');


module.exports = new class ColorController {


/* ----------------------------------------------CREATE---------------------------------------*/
    

    async add(req, res) {
        try {
            
            // validate the input 
            await ColorValidation.validate(req.body)
            await ColorModel.create({
                product_line_id: req.body.product_line_id, 
                color_name: req.body.color_name})
            .then(()=>{
                res.status(201).send({
                    success: true,
                    message: 'color added successfully'
                })
            })
        }
        
        catch(err) {
            res.status(500).send({
                success: false,
                message: err.message
            })
        }
    };
    
    

/* ----------------------------------------------GET------------------------------------------*/

    async getAll(req, res){

        // get all color
        await ColorModel.findAll({where: {product_line_id:req.params.product_line_id}})
        .then((data) => {
            if (data.length > 0){
                res.status(200).send({
                    success: true,
                    data: data
                })
            }else{
                res.status(404).send({
                    success: false,
                    message: 'no Color is found'
                })
            }
            
        })
        .catch((err) => {
            res.status(500).send({
                success : false,
                message: err.message
            })
        })
    };



    async get(req, res){
        
        // get detail color
        await ColorModel.findOne({
            where: {
                product_line_id: req.params.product_line_id, 
                color_id: req.params.color_id
            }})

        .then((data) =>{
            if (data !== (null || undefined)){
                res.status(200).send({
                    success: true,
                    data: data
                })
            }else{
                throw new Error('no product found')
            }
        })
        .catch((err) => {
            res.status(400).send({
                success : false,
                message: err.message
            })
        })
        
    }
    

/* ----------------------------------------------DELETE---------------------------------------*/
    
    async delete(req, res) {

        await ColorModel.destroy({where: {color_id : req.params.color_id}})
        .then(() => res.status(200).send({
            success : true,
            message : 'color successfully deleted'
        }))
        .catch((err) => {
            res.status(400).send({
                success : false,
                message : err.message
            })
        })
    }
    
    

    
};











'use strict';



const db = require('../../models')();
const ColorModel = db.ProductColors;
const {ColorValidation} = require('../../utils/schemaValidation');
const responseHandler = require('../../utils/responseHandler')


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
                responseHandler.sendSuccess(req, res, 201, 'color added successfully')
            })
        }
        
        catch(err) {
            responseHandler.sendFailure(req, res, 400, err)
        }
    };
    
    

/* ----------------------------------------------GET------------------------------------------*/

    async getAll(req, res){

        // get all color
        await ColorModel.findAll({where: {product_line_id:req.params.product_line_id}, 
        attributes: ['color_id', 'color_name']})
        .then((data) => {
            if (data.length > 0){
                responseHandler.sendSuccess(req, res, 200, data)
                
            }else{
                responseHandler.sendFailure(req, res, 404, 'no Color is found')
            }
            
        })
        .catch((err) => {
            responseHandler.sendFailure(req, res, 400, err)
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
                responseHandler.sendSuccess(req, res, 200, data)
                
            }else{
                throw new Error('no product found')
            }
        })
        .catch((err) => {
            responseHandler.sendFailure(req, res, 400, err)
        })
        
    }
    

/* ----------------------------------------------DELETE---------------------------------------*/
    
    async delete(req, res) {

        await ColorModel.destroy({where: {color_id : req.params.color_id}})
        .then(() =>responseHandler.sendSuccess(req, res, 200, 'color successfully deleted'))
        .catch((err) => {responseHandler.sendFailure(req, res, 400, err)})
    }
    
    

    
};











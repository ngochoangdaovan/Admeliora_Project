'use strict';


const {ProductLineValidation} = require('../../utils/schemaValidation')
const db = require('../../models')();
const ProductLineModel = db.ProductLines
const responseHandler = require('../../utils/responseHandler')


module.exports = new class ProductLineController {


/*--------------------------------------------CREATE-------------------------------------------------*/ 

    async add(req, res){

        try {
            
            ProductLineValidation.validate(req.body);
            await ProductLineModel.create({
                category_id: req.body.category_id, 
                name: req.body.name,
                material: req.body.material, 
                information: req.body.information, 
                rate: 0,
                price: req.body.price
            })
            .then(() => responseHandler.sendSuccess(req, res, 201, 'product line successfully created'))
        }catch(err){
            responseHandler.sendFailure(req, res, 400, err)
        }
    
    }
    
    
    
    
    

/*--------------------------------------------GET----------------------------------------------------*/ 

    async get(req,res){
        
        await ProductLineModel.findOne({
            
            where : {
                product_line_id: req.params.product_line_id
            }, 
        })
        .then((product_line) => {
            if (product_line !== (null || undefined)){
                
                responseHandler.sendSuccess(req, res, 200, product_line)

            }else {
                responseHandler.sendFailure(req, res, 404, "product line not found")
            }
    
        })
        .catch( err => responseHandler.sendFailure(req, res, 400, err))

    }
    


    
    async getAll(req, res){

        await ProductLineModel.findAll({
            attributes: ['product_line_id', 'name', 'price', 'information', 'material'],
            include :{model: db.Categories, attributes: ['name']}
        })
        .then((product_lines) =>{
            if (product_lines.length > 0) {
                responseHandler.sendSuccess(req, res, 200, product_lines)
                
            }else {
                responseHandler.sendFailure(req, res, 404, 'not found any item')
                
            }
        })
        .catch (err => {
            responseHandler.sendFailure(req, res, 400, err)
        })
    }
    
    
    
/*--------------------------------------------UPDATE-------------------------------------------------*/ 
    
    async update(req, res) {
        
        // update information
        await ProductLineModel.update (
            req.body,
            {
                where: {product_line_id : req.params.product_line_id}
            }
        )
        .then(() => responseHandler.sendSuccess(req, res, 200, 'Updated information successfully'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))

    }
    
    
    
    
    
    
    
/*--------------------------------------------DELETE-------------------------------------------------*/     
    
    async delete(req, res) {

        await ProductLineModel.destroy({where: {product_line_id: req.params.product_line_id}})
        .then(() => responseHandler.sendSuccess(req, res, 200, 'Deleted successfully'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
        
    }
    
    

    
};



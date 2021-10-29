'use strict';


const ProductQueries = require('../../databaseQueries').ProductQueries;
const ProductLinesQueries = ProductQueries.ProductLinesQueries
const {ProductLineValidation} = require('../../utils/schemaValidation')

module.exports = new class ProductLineController {


    async refresh (req, res){
        await ProductLineModel.drop()
        await ProductLineModel.sync()
        .then(() => {
            res.status(200).send({
                success: true,
                message: 'refresh successfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                success: false,
                message: err.message
            })
        })
    }


/*--------------------------------------------CREATE-------------------------------------------------*/ 

    async add(req, res){

        try {

            await ProductLineValidation.validate(req.body);
            await ProductLineModel.create({
                category_id: req.body.category_id, 
                name: req.body.name,
                material: req.body.material, 
                information: req.body.information, 
                rate: 0,
                price: req.body.price
            })
            .then(()=> {
                res.status(201).send({
                    success : true,
                    message : 'product line successfully created'
                })
            })
        }catch(err){
            res.status(500).send({
                success : false,
                message : err.message
            })
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
                res.status(200).send({
                    success : true,
                    data : product_line
                })
            }else {
                res.status(404).send({
                    success : false,
                    message : 'product line not found'
                })
            }
    
        })
        .catch(err => {
            res.status(500).send({
                success : false,
                message : err.message
            })
        })
    }
    
    
    async getAll(req, res){

        await ProductLineModel.findAll({attributes: ['product_line_id', 'name'],})
        .then((product_lines) =>{
            if (product_lines.length > 0) {
                res.status(200).send({
                    success : true,
                    data : product_lines
                })
            }else {
                res.status(404).send({
                    success : false,
                    message : 'not found any item'
                })
            }
        })
        .catch (err => {
            res.status(500).send({
                success : true,
                message : err.message
            })
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
        .then(async () => {
            res.status(200).send({
                success : true,
                message : 'Updated information successfully'   
            })
        })
        .catch (err => {
            res.status(500).send({
                success : false,
                message : err.message
            })
        })
    }
    
    
    
    
    
    
    
/*--------------------------------------------DELETE-------------------------------------------------*/     
    
    async delete(req, res) {
        
        await ProductLineModel.destroy({where: {product_line_id: req.params.product_line_id}})
        .then (() => {
            res.status(200).send({
                success : true,
                message : 'successfully deleted!'
            })
        })
        .catch (err => {
            res.status(500).send({
                success : false,
                message : err.message
            })
        })
    }
    
    

    
};



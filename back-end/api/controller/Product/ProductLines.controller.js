'use strict';


const ProductQueries = require('../../databaseQueries').ProductQueries;
const ProductLinesQueries = ProductQueries.ProductLinesQueries
const {ProductLineValidation} = require('../../utils/schemaValidation')

module.exports = new class ProductLineController {


    async refresh (req, res){
        await ProductLinesQueries.refreshTables()
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
            await ProductLinesQueries.create(
                req.body.category_id, 
                req.body.name, 
                req.body.material, 
                req.body.information, 
                req.body.price, 

            )
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
        await ProductLinesQueries.getDetail(req.params.product_line_id)
        .then((product_line) => {
            if (product_line !== (null || undefined)){
                res.status(200).send({
                    success : true,
                    data : product_line
                })
            }else {
                res.status(404).send({
                    ok: false,
                    message : 'product line not found'
                })
            }
    
        })
        .catch(err => {
            res.status(500).send({
                ok: false,
                message : err.message
            })
        })
    }
    
    
    async getAll(req, res){
        await ProductLinesQueries.getAll()
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
        await ProductLinesQueries.update(req.body, req.params.product_line_id)
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
        await ProductLinesQueries.delete(req.params.product_line_id)
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



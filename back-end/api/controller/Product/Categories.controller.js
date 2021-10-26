'use strict';


const ProductQueries = require('../../databaseQueries').ProductQueries;
const CategoryQueries = ProductQueries.CategoryQueries 
const {CategoryValidation} = require('../../utils/schemaValidation')


module.exports = new class CategoryController {

    async  addNewCategory(req, res, next) {

        try {
            await CategoryValidation.validate(req.body);
            await CategoryQueries.add(req.body.category_name)
            .then(()=>{
                res.status(201).send({
                    success : true,
                    message : 'Category added successfully'
                })
            })
    
            next()
        }catch (err) {
            res.status(500).send({
                success : false,
                message : err.message
            })
        }
    
    }
    
    
    
    async getAll(req, res, next) {
        await CategoryQueries.getAll()
        .then(category => {
            res.status(200).send({
                success : true,
                data : category
            })
        })
        .catch(err => {
            res.status(500).send({
                success : false,
                message : err.message
            })
        })
    }
    
    
    async  delete(req, res, next) {
    
        await CategoryQueries.delete (req.body.category_name)
        .then(()=>{
            res.status(200).send({
                status : true,
                message : 'successfully deleted category'
            })
        })
        .catch((error)=>{
            res.status(500).send({
                success : false,
                message : error.message
            })
        })
    
    }


};














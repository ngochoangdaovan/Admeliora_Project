'use strict';


const {CategoryValidation} = require('../../utils/schemaValidation')
const db = require('../../models')();
const CategoriesModel = db.Categories;


module.exports = new class CategoryController {

    async  addNewCategory(req, res, next) {

        try {
            // await CategoryValidation.validate(req.body);
            await CategoriesModel.create({name: req.body.category_name})
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

        await CategoriesModel.findAll()
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
    
        await CategoriesModel.destroy({where: {category_id: req.body.category_id}})
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














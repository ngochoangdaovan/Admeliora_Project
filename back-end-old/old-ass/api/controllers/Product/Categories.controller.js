'use strict';


const {CategoryValidation} = require('../../utils/schemaValidation')
const db = require('../../models')();
const CategoriesModel = db.Categories;
const responseHandler = require('../../utils/responseHandler')


module.exports = new class CategoryController {

    async  addNewCategory(req, res, next) {

        try {
            // await CategoryValidation.validate(req.body);
            await CategoriesModel.create({name: req.body.category_name, category_id: req.body.id})

            .then(()=>{
                responseHandler.sendSuccess(req, res, 201, 'Category added successfully')
            })
    
        }catch (err) {
            responseHandler.sendFailure(req, res, 400, err)
        }
    
    }
    
    
    
    async getAll(req, res, next) {

        await CategoriesModel.findAll()
        .then(category => {
            responseHandler.sendSuccess(req, res, 200, category)
            
        })
        .catch(err => {
            responseHandler.sendFailure(req, res, 400, err)
            
        })
    }
    
    
    async  delete(req, res, next) {
    
        await CategoriesModel.destroy({where: {category_id: req.body.category_id}})
        .then(()=>{
            responseHandler.sendSuccess(req, res, 200, 'successfully deleted category')
            
        })
        .catch((error)=>{
            responseHandler.sendFailure(req, res, 400, error)
        })
    
    }


};














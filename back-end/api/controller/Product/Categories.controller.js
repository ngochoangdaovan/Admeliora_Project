'use strict';


const CategoryQueries = require('../../databaseQueries').ProductQueries.CategoryQueries;
const {CategoryValidation} = require('../../utils')


const CategoryController = {};



CategoryController.addNewCategory = async function (req, res, next) {

    try {
        await CategoryValidation.validate(req.body);
        await CategoryQueries.add(req.body.category_name)
        .then(()=>{
            res.status(201).send({
                ok : true,
                message : 'Category added successfully'
            })
        })

        next()
    }catch (err) {
        res.status(500).send({
            ok: false,
            message : err.message
        })
        next()
    }

}



CategoryController.getAll = async function (req, res, next) {
    await CategoryQueries.getAll()
    .then(category => {
        res.status(200).send({
            ok : true,
            data : category
        })
    })
    .catch(err => {
        res.status(500).send({
            ok : false,
            message : err.message
        })
    })
}


CategoryController.delete = async function (req, res, next) {

    await CategoryQueries.delete (req.body.category_name)
    .then(()=>{
        res.status(200).send({
            ok : true,
            message : 'successfully deleted category'
        })
    })

}







module.exports = CategoryController;




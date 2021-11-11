'use strict';


const db = require('../../models')();
const SizeModel = db.Sizes
const responseHandler = require('../../utils/responseHandler')




module.exports = new class SizeController {



/*--------------------------------------------CREATE-------------------------------------------------*/ 

    async add (req, res){

        let inputSize = req.body;

        // add to database
        await SizeModel.create ({
            category_id: inputSize.category_id,
            size_name : inputSize.size_name,
            size_info : inputSize.size_info
        })

        .then(() => responseHandler.sendSuccess(req, res, 200, "Size created successfully"))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }



/*--------------------------------------------GET----------------------------------------------------*/ 
    
    async getAll(req, res){
        await SizeModel.findAll ({
            include : {
                model : db.Categories, attributes : ['name']
        }})
        .then(Sizes => responseHandler.sendSuccess(req, res, 200, Sizes))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }

    async getAllByCategory(req, res) {
        await SizeModel.findAll ({
            where : {category_id : req.params.category_id},
            include : {
                model : db.Categories, attributes : ['name']
            }
        })
        .then(Sizes => responseHandler.sendSuccess(req, res, 200, Sizes))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }


    async get(req, res){
        
        await SizeModel.findOne ({ 
            where : {size_id : req.params.size_id}
        })
        .then(data => responseHandler.sendSuccess(req, res, 200, data))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }




/*--------------------------------------------UPDATE-------------------------------------------------*/ 
    async update(req, res){

        await SizeModel.update (req.body, {where : {size_id : req.params.size_id}})
        .then(() => responseHandler.sendSuccess(req, res, 200, 'Updated size successfully'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }


    


/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete(req, res){

        await SizeModel.destroy({where: {size_id: req.params.size_id}})
        .then(() => responseHandler.sendSuccess(req, res, 200, 'Deleted successfully'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }











}









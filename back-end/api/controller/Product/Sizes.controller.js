'use strict';


const db = require('../../models')();
const SizeModel = db.Sizes



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
        .then(() => res.status(200).send({
                success: true,
                message: 'Size added successfully'
            }
        ))
        .catch((err) => res.status(500).send({
            success: false,
            message: err.message
        }))
    }



/*--------------------------------------------GET----------------------------------------------------*/ 

    async getAll(req, res){
        await SizeModel.findAll ()
        .then((Sizes)=>{
            res.status(200).send({
                success: true,
                data: Sizes 
            })
        })
        .catch((err)=>{
            res.status(500).send({
                success: false,
                data: err.message
            })
        })
    }



    async get(req, res){
        
        await SizeModel.findOne ({ 
            where : {size_id : req.params.size_id}
        })
        .then((data)=>{
            res.status(200).send({
                success: true,
                data: data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                success: false,
                message: err.message
            })
        })
    }




/*--------------------------------------------UPDATE-------------------------------------------------*/ 
    async update(req, res){

        await SizeModel.update (req.body, {where : {size_id : req.params.size_id}})
        .then(()=> {res.status(200).send({
            success: true,
            message: 'Updated size successfully'
        })})
        .catch(err=> {
            res.status(500).send({
                success: false,
                message: err.message
            })
        })
    }


    


/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete(req, res){

        await SizeModel.destroy({where: {size_id: req.params.size_id}})
        .then(()=> {res.status(200).send({
            success: true, 
            message: 'Deleted successfully'
        });})
        .catch(err=>{res.status(500).send({
            success: false,
            message: err.message
        });})
    }











}









'use strict';



const ProductQueries = require('../../databaseQueries').ProductQueries;
const Sizes = ProductQueries.SizesQueries



module.exports = new class SizeController {



/*--------------------------------------------CREATE-------------------------------------------------*/ 

    async add (req, res){

        let inputSize = req.body;
        await Sizes.add(inputSize.size_name, inputSize.size_info, inputSize.category_id)
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
        await Sizes.getAll()
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
        await Sizes.getDetail(req.params.size_id)
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
        await Sizes.updateInfo(req.params.size_id, req.body)
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
        await Sizes.delete(req.params.size_id)
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









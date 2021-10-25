'use strict';



const ProductQueries = require('../../databaseQueries').ProductQueries;
const ColorQueries = ProductQueries.ColorQueries
const {ColorValidation} = require('../../utils/schemaValidation');


module.exports = new class ColorController {




    async add(req, res) {
        try {
            
            await ColorValidation.validate(req.body)
            await ColorQueries.add(req.body.product_line_id, req.body.color_name)
            .then(()=>{
                res.status(201).send({
                    ok: true,
                    message: 'color added successfully'
                })
            })
        }
        
        catch(err) {
            res.status(500).send({
                ok: false,
                message: err.message
            })
        }
    };
    
    
    async getAll(req, res){
        await ColorQueries.getAll(req.params.product_line_id)
        .then((data) => {
            if (data.length > 0){
                res.status(200).send({
                    ok: true,
                    data: data
                })
            }else{
                res.status(404).send({
                    ok: false,
                    message: 'no Color is found'
                })
            }
            
        })
        .catch((err) => {
            res.status(500).send({
                ok : false,
                message: err.message
            })
        })
    };



    async get(req, res){
        await ColorQueries.get(req.params.product_line_id, req.params.color_id)
        .then((data) =>{
            if (data !== (null || undefined)){
                res.status(200).send({
                    ok: true,
                    data: data
                })
            }else{
                res.status(404).send({
                    ok: false,
                    message: 'no Color is found'
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                ok : false,
                message: err.message
            })
        })
        
    }
    
    
    
    async delete(req, res) {
        console.log(req.params.color_id)
        await ColorQueries.delete(req.params.color_id)
        .then(() => res.status(200).send({
            ok : true,
            message : 'color successfully deleted'
        }))
        // .catch((err) => {
        //     res.status(500).send({
        //         ok : false,
        //         message : err.message
        //     })
        // })
    }
    
    

    
};











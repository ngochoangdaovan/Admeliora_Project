'use strict';



const {ColorQueries} = require('../../databaseQueries');
const {ColorValidation} = require('../../utils');


const ColorController = {};


ColorController.add = async function (req, res) {
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


ColorController.getAll = async function (req, res){
    await ColorQueries.getAll()
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



ColorController.delete = async function (req, res) {
    await ColorQueries.delete(req.params.color_id)
    .then(() => res.status(200).send({
        ok : true,
        message : 'color successfully deleted'
    }))
    .catch((err) => {
        res.status(500).send({
            ok : false,
            message : err.message
        })
    })
}










module.exports = ColorController;



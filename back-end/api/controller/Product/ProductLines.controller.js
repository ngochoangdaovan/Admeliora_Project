'use strict';


const ProductLinesQueries = require('../../databaseQueries').ProductQueries.ProductLinesQueries;
const {ProductLineValidation} = require('../../utils/schemaValidation')

const ProductLineController = {};






ProductLineController.add = async function (req, res){

    try {
        await ProductLineValidation.validate(req.body);
        await ProductLinesQueries.create(
            req.body.category_id, req.body.name, 
            req.body.material, req.body.information
        )
        .then(()=> {
            res.status(201).send({
                ok : true,
                message : 'product line successfully created'
            })
        })
    }catch(err){
        res.status(500).send({
            ok : false,
            message : err.message
        })
    }

}






ProductLineController.get = async function (req,res){
    await ProductLinesQueries.get (req.params.product_line_id)
    .then((product_line) => {
        if (product_line !== (null || undefined)){
            res.status(200).send({
                ok : true,
                data : product_line
            })
        }else {
            res.status(404).send({
                ok: false,
                message : 'product not found'
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


ProductLineController.getAll = async function (req, res){
    await ProductLinesQueries.getAll()
    .then((product_lines) =>{
        if (product_lines.length > 0) {
            res.status(200).send({
                ok : true,
                data : product_lines
            })
        }else {
            res.status(404).send({
                ok : false,
                message : 'not found any item'
            })
        }
    })
    .catch (err => {
        res.status(500).send({
            ok : true,
            message : err.message
        })
    })
}





ProductLineController.updateName = async function (req, res) {
    
    if (req.body.newName !== (null || undefined)) {
        
        // update information
        await ProductLinesQueries.updateName(req.body.product_line_id, req.body.newName)
        .then(async () => {
            await ProductLineController.get(req.body.product_line_id)
        })
        .catch (err => {
            res.status(500).send({
                ok : false,
                message : err.message
            })
        })
    }
}

ProductLineController.updateMaterials = async function (req, res) {
    
    if (req.body.newMaterials !== (null || undefined)) {
        
        // update information
        await ProductLinesQueries.updateMaterials(req.body.product_line_id, req.body.newMaterials)
        .then(async () => {
            await ProductLineController.get(req.body.product_line_id)
        })
        .catch (err => {
            res.status(500).send({
                ok : false,
                message : err.message
            })
        })
    }
}

ProductLineController.updateInformation = async function (req, res) {
    
    if (req.body.newInformation !== (null || undefined)) {
        
        // update information
        await ProductLinesQueries.updateInformation(req.body.product_line_id, req.body.newInformation)
        .then(async () => {
            await ProductLineController.get(req.body.product_line_id)
        })
        .catch (err => {
            res.status(500).send({
                ok : false,
                message : err.message
            })
        })
    }
}














module.exports = ProductLineController;







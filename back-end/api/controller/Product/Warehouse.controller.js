'use strict';

const ProductQueries = require('../../databaseQueries').ProductQueries
const WarehouseQueries = ProductQueries.WarehouseQueries



module.exports = new class WarehouseController {




/*--------------------------------------------CREATE-------------------------------------------------*/ 
    async add (req, res) {
        let input = req.body;
        await WarehouseQueries.add( 
            input.product_line_id, input.size_id, 
            input.color_id, input.quantity, input.price)
        .then(()=>{res.status(200).send({
            success: true,
            message: 'Product line added successfully'
        })})
        .catch((error)=>{
            res.status(200).send({
                success: false,
                message: error.message
            })
        })
    }

/*--------------------------------------------GET----------------------------------------------------*/ 
    async getAll (req, res) {
        await WarehouseQueries.getAll()
        .then(data => {res.status(200).send({
            success: true,
            data : data
        })})
        .catch(err => {res.status(500).send({
            success: false, 
            message: err.message
        })})
    }


    async get (req, res){
        await WarehouseQueries.get(req.params.product_line_id)
        .then((detailData) => {
            res.status(200).send({
                success: true, 
                message: detailData
            })
        })
        .catch((error) => {
            res.status(500).send({
                success: false, 
                message: error.message
            })
        })
    }
    



    async getByColorAndLine (req, res){
        await WarehouseQueries.getByColorAndLine(req.params.product_line_id, req.params.color_id)
        .then((detailData) => {
            res.status(200).send({
                success: true, 
                data: detailData
            })
        })
        .catch((error) => {
            res.status(500).send({
                success: false, 
                message: error.message
            })
        })
    }
/*--------------------------------------------UPDATE-------------------------------------------------*/ 
    async update (req, res) {
        await WarehouseQueries.update(req.body, req.params.product_line_id)
        .then(() =>{res.status(200).send({
            success: true,
            message: 'Updated successfully!'
        })})
        .catch(err =>{res.status(500).send({
            success: false, 
            message: err.message})})
    }

/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete (req, res) {
        await WarehouseQueries.delete(req.params.product_line_id)
        .then(() => {res.status(200).send({success: true, message: 'Deleted successfully'});})
        .catch(err => {res.status(500).send({success: false, message: err.message})})
    }











}

















const db = require('../../models')();
const ProductLineModel = db.ProductLines




module.exports = new class ProductLinesQueries {


    async refreshTables() {
        ProductLineModel.drop()
        ProductLineModel.sync()
    }

    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/

    async create(category_id, name, material, information, price){

        await ProductLineModel.create({
            category_id: category_id,
            name: name,
            material: material,
            information: information,
            rate: 0,
            price: price
        });
    }




    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
    async getDetail(product_line_id){
        return await ProductLineModel.findOne({
            
            where : {
                product_line_id: product_line_id
            }, 
        })
    }


    async getAll(){
        return await ProductLineModel.findAll({attributes: ['product_line_id', 'name'],})
    }




    /* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/
    async update(field, id){
        await ProductLineModel.update (
            field,
            {
                where: {product_line_id : id}
            }
        )
    }





    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

    async delete(product_line_id){
        await ProductLineModel.destroy({where: {product_line_id: product_line_id}})
    }







};


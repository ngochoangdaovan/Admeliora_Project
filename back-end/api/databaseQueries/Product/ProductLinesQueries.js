const db = require('../../models')();
const ProductLineModel = db.ProductLines




const ProductLinesQueries = {};



/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/

ProductLinesQueries.create = async function(category_id, name, material, information){

    await ProductLineModel.create({
        category_id: category_id,
        name: name,
        material: material,
        information: information,
        rate: 0
    });
}


/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
ProductLinesQueries.get = async function(product_line_id){
    return await ProductLineModel.findOne({
        where : {
            product_line_id: product_line_id
        }, 
    })
}


/* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/
ProductLinesQueries.update = async function(field, id){
    await ProductLineModel.update (
        field,
        {
            where: {product_line_id : id}
        }
    )
}



ProductLinesQueries.updateName = async function (product_line_id, newName){
    await ProductLinesQueries.update({name: newName}, product_line_id)
}


ProductLinesQueries.updateMaterials = async function (product_line_id, newMaterials){
    await ProductLinesQueries.update({material:newMaterials}, product_line_id);

}

ProductLinesQueries.updateInformation = async function (product_line_id, newInformation){
    await ProductLinesQueries.update({information : newInformation}, product_line_id)
}

ProductLinesQueries.increaseRate = async function (product_line_id, rateAmount) {
    let oldRate = await ProductLinesQueries.findOne({where: {product_line_id: product_line_id}});
    await ProductLinesQueries.update({rate: oldRate + rateAmount}, product_line_id)
}





/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

ProductLinesQueries.delete = async function (product_line_id){
    await ProductLineModel.delete({where: {product_line_id: product_line_id}})
}






module.exports = ProductLinesQueries;




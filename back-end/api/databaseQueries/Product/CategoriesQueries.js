const db = require('../../models')();
const CategoriesModel = db.Categories;


const CategoryQueries = {};


/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/

CategoryQueries.add = async function (cateName){
    await CategoriesModel.create({name: cateName});
}
/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/

CategoryQueries.getAll = async function(id){
    return await CategoriesModel.findAll({
        where: {category_id: id}
    });
}

/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/
CategoryQueries.delete = async function(id){
    await CategoriesModel.delete({where: {category_id: id}})
}


module.exports = CategoryQueries;




const db = require('../../models')();
const CategoriesModel = db.Categories;


module.exports = new class CategoryQueries {

    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/

    async add(cateName){
        await CategoriesModel.create({name: cateName});
    }
    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/

    async getAll(){
        return await CategoriesModel.findAll();
    }

    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/
    async delete(id){
        await CategoriesModel.destroy({where: {category_id: id}})
    }





};







'use strict';


const db = require('../../models')();
const SizeModel = db.Sizes



module.exports = new class SizesQueries {




    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/

    async  add(size_name, size_info, category_id){
        await SizeModel.create ({
            category_id: category_id,
            size_name : size_name,
            size_info : size_info
        })
    }




    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
    async get(){
        return await SizeModel.findAll ()
    }

    async getInfo(id){
        return await SizeModel.findOne ({ 
            where : {size_id : id}
        })
    }


    /* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/

    async updateInfo(id, newSizeInfo){
        await SizeModel.update ({size_info : newSizeInfo}, {where : {size_id : id}})

    }

    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/


    async delete(id) {
        await SizeModel.delete ({where: {size_id: id}})
    }




};
'use strict';


const db = require('../../models')();
const SizeModel = db.Sizes



const SizesQueries = {};
/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/

SizesQueries.add = async function (size_name, size_info, category_id){
    await SizeModel.create ({
        category_id: category_id,
        size_name : size_name,
        size_info : size_info
    })
}




/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
SizesQueries.get = async function (){
    return await SizeModel.findAll ()
}

SizesQueries.getInfo = async function (id){
    return await SizeModel.findOne ({ 
        where : {size_id : id}
    })
}


/* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/

SizesQueries.updateInfo = async function (id, newSizeInfo){
    await SizeModel.update ({size_info : newSizeInfo}, {where : {size_id : id}})

}

/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/


SizesQueries.delete = async function (id) {
    await SizeModel.delete ({where: {size_id: id}})
}





module.exports = SizesQueries;




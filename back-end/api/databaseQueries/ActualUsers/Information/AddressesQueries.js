
const db = require('../../../models')();
const AddressesModel = db.Addresses;



const AddressesQueries = {


}


/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/



AddressesQueries.isExist = async function (user_id){
    const result = await AddressesModel.findOne({
        where: {user_id : user_id}
    });

    return !(result === null)
}



AddressesQueries.createAddress = async function (user_id, province, district, street, detail_address) {

    let de = false;
    const isExist = await AddressesQueries.isExist(user_id);

    if (!isExist) {
        de = true;
    }

    await AddressesModel.create(
        {
            province: province,
            district: district,
            street: street,
            detail_address: detail_address,
            default:de,
            user_id : user_id
        }
    )

}







/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/

AddressesQueries.getAllAddress = async function(user_id){
    const address = AddressesModel.findAll(
        {
            where: {user_id: user_id},
            attributes : {exclude : ['address_id', 'user_id']},
            required: true,
        }
    )

    return address;
}





AddressesQueries.getOne = async function (user_id, address_id) {
    return await UserModel.findOne({
        where : {user_id : user_id, address_id : address_id},
        attributes: {exclude : ['user_id', 'address_id']}
    })
}









/* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/

AddressesQueries.Update = async function(fields, user_id, address_id) {
    await UserModel.update(fields,
        {
            where : { 
                user_id : user_id,
                address_id: address_id
            }
        });
}




AddressesQueries.updateProvince = async function (newProvince, user_id, address_id){
    await AddressesQueries.Update({province: newProvince}, user_id, address_id)
    return AddressesQueries.getOne(user_id, address_id)
}



AddressesQueries.updateDistrict = async function (newDistrict, user_id, address_id){
    await AddressesQueries.Update({district: newDistrict}, user_id, address_id)
    return AddressesQueries.getOne(user_id, address_id)
}




AddressesQueries.updateStreet = async function (newStreet, user_id, address_id) {
    await AddressesQueries.Update ({street: newStreet}, user_id, address_id)
    return AddressesQueries.getOne(user_id, address_id)
}



AddressesQueries.updateDetailAddress = async function (newDetailAddress, user_id, address_id){
    await AddressesQueries.Update({detail_address:newDetailAddress}, user_id, address_id)
    return AddressesQueries.getOne(user_id, address_id)
}







/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

AddressesQueries.delete = async function(user_id, address_id){
    await AddressesModel.delete ({where: {address_id, user_id}})
}



AddressesQueries.deleteAll = async function(user_id, address_id){
    await AddressesModel.destroy({where: {address_id, user_id}})
}


module.exports = AddressesQueries;
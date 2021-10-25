
const db = require('../../../models')();
const AddressesModel = db.Addresses;



module.exports = new class AddressesQueries {



    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
    async isExist(user_id){
        const result = await AddressesModel.findOne({
            where: {user_id : user_id, default: true},
        });

        return !(result === null)
    }



    async createAddress(user_id, province, district, street, detail_address) {

        let de = false;
        const exist = await this.isExist(user_id);

        if (!exist ) {
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

    async getAllAddress(user_id){
        const address = AddressesModel.findAll(
            {
                where: {user_id: user_id},
                attributes : {exclude : ['address_id', 'user_id']},
                required: true,
            }
        )
        return address;
    }




    async getOne(user_id, address_id) {
        return await AddressesModel.findOne({
            where : {user_id : user_id, address_id : address_id},
            attributes: {exclude : ['user_id', 'address_id']}
        })
    }




    /* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/

    async Update(fields, user_id, address_id) {
        await AddressesModel.update(fields,
            {
                where : { 
                    user_id : user_id,
                    address_id: address_id
                }
            });
    }



    async updateStatus(user_id, address_id, status) {
        await AddressesModel.update({
            default: false,
        },{where: {user_id, default:true}})


        await AddressesModel.update({
            default: true,
        },{where: {address_id, user_id}})
    }



    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

    async delete (user_id, address_id){
        await AddressesModel.destroy({where: {address_id, user_id}})
    }



    async deleteAll (user_id){
        await AddressesModel.destroy({where: {user_id}})
    }



};

const db = require('../../../models')();
const phoneModel = db.PhoneNumbers


module.exports = new class PhoneNumbersQueries {


    
    /* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/

    async isExist(user_id){
        const result = await phoneModel.findOne({
            where: {user_id : user_id, default : true}
        });
        return !(result === null)
    }



    async add(user_id, phone){ 

        let defaultValue = false;
        let exist = await this.isExist(user_id);
        
        if (!exist) {
            defaultValue = true;
        };

        await phoneModel.create({
            phoneNumbers: phone,
            default : defaultValue,
            user_id : user_id
        });
    };




    /* ----------------------------------------------GET FUNCTIONS------------------------------------------*/

    async getPhoneNumbers (id){
        

        const phones = await phoneModel.findAll(
            {
                attributes : ['phoneNumbers', 'default'],
                where : {user_id : id},
                required: true
            }
        );
        return phones;

    };

    async getDefault (user_id, phone){
        return await phoneModel.findOne({
            where: {user_id : user_id, phoneNumbers: phone},
            attributes: {exclude: ['user_id']}
        })
    }







    /* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/
    async updateStatus(user_id, newDefaultPhone){

        // delete the last status
        await phoneModel.update(
            {default : false},
            {where: {user_id : user_id, default: true},}
        );
        // update status for new one
        await phoneModel.update(
            {default : true},
            {where : {phoneNumbers:newDefaultPhone}}
        )
    }




    async updatePhoneNumbers (user_id, old_phoneNumbers, newPhone){
        await phoneModel.update(
            {phoneNumbers:newPhone},
            {where: {
                phoneNumbers: old_phoneNumbers,
                user_id:user_id
            }
        })
    }


    /* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/


    // function to delete specific phone number of a user 
    async delete(phone, user_id){ 
        await phoneModel.destroy(
            {
                where: {
                    phoneNumbers: phone,
                    user_id: user_id
                },
            }
        );
    };


    async deleteAll (user_id){
        await phoneModel.destroy({
            where: {user_id : user_id}
        })
    }







};


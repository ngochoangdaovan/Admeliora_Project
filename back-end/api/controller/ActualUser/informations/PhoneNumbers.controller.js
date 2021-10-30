const db = require('../../../models')();
const phoneModel = db.PhoneNumbers
const responseHandler = require('../../../utils/responseHandler')






module.exports = new class PhoneNumberController {

/*--------------------------------------------GET----------------------------------------------------*/ 

    async getAllPhoneNumbersByID(req, res) {

        let user_id = req.user.user_id;
    
        let phoneNumbers = await phoneModel.findAll(
            {
                attributes : ['phoneNumbers', 'default'],
                where : {user_id : user_id},
                required: true
            }
        )
        .catch(err => responseHandler.sendFailure(req, res, 400, err));
        responseHandler.sendSuccess(req, res, 200, phoneNumbers)
    
    };
    


/*--------------------------------------------CREATE-------------------------------------------------*/ 
    async addPhone(req, res) {

        // get user id, get phone number from body
        const user_id = req.user.user_id;
        const phone = req.body.phone;

        // check if that phone is the first => default : true, else default : false
        const result = await phoneModel.findOne({
            where: {
                user_id : user_id, 
                default : true}
        });


        let defaultValue = false;

        // if there is no user's phone in the database
        if ( result === null) {
            defaultValue = true;
        };

        // add to database
        await phoneModel.create({
            phone_number: phone,
            default : defaultValue,
            user_id : user_id
        })
        // send back the respond if successful create
        .then(()=> {responseHandler.sendSuccess(req, res, 200, `phone number ${phone} successfully added`)})
            // send the error message if it failed to add to database
        .catch(err => responseHandler.sendFailure(req, res, 400, err));
    }






/*--------------------------------------------UPDATE-------------------------------------------------*/ 
    async updateDefault(req, res) {

        

        const user_id = req.user.user_id
        const newDefaultPhone = req.body.phone
        
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

        .then(()=> responseHandler.sendSuccess(req, res, 200, "updated successful"))
        .catch(err => responseHandler.sendFailure(req, res, 400, err))

    }






/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete(req, res){

        // delete phone number form database
        await phoneModel.destroy(
            {
                where: {
                    phoneNumbers: req.params.phone,
                    user_id: req.user.user_id
                },
            }
        )
        .then(() => { responseHandler.sendSuccess(req, res, 200, 'deleted successfully')})
        .catch(err => responseHandler.sendFailure(req, res, 400, err));
    };


    
    
    async deleteAll(req, res) {
        await phoneModel.destroy({
            where: {user_id : req.user.user_id}
        })
        .then(() => { responseHandler.sendSuccess(req, res, 200, 'deleted all successfully')})
        .catch(err => responseHandler.sendFailure(req, res, 400, err));
    }
    
    
    

    
    
    
};

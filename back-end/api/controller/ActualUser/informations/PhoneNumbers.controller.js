const db = require('../../../models')();
const phoneModel = db.PhoneNumbers





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
        .catch(err => res.send(err.message));
        res.send(phoneNumbers);
    
    };
    


/*--------------------------------------------CREATE-------------------------------------------------*/ 
    async addPhone(req, res) {

        // get user id, get phone number from body
        const user_id = req.user.user_id;
        const phone = req.body.phone;

        // check if that phone is the first => default : true, else default : false
        const result = await phoneModel.findOne({
            where: {user_id : user_id, default : true}
        });


        let defaultValue = false;

        // if there is no user's phone in the database
        if ( result === null) {
            defaultValue = true;
        };

        // add to database
        await phoneModel.create({
            phoneNumbers: phone,
            default : defaultValue,
            user_id : user_id
        })
        .then(async ()=> {
            // send back the respond if successful create
            res.status(200).send ({
                status: true,
                message: `phone number ${phone} successfully added`
            })
        })
        // send the error message if it failed to add to database
        .catch(err => res.send({
            success: false,
            message: err.message,
        }));
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

        .then(() => res.status(200).send({success:true, message: "updated successful"}))
        .catch(err => res.status(500).send({success:false, message: err.message}))

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
        .then(() => {
            res.send({
                success: true,
                message: 'deleted successfully'
            })
        })
        .catch(err => res.send({
            success: false,
            message : err.message
        }));
    };


    
    
    async deleteAll(req, res) {
        await phoneModel.destroy({
            where: {user_id : req.user.user_id}
        })
        .then(() => res.send ('delete all'));
    }
    
    
    

    
    
    
};

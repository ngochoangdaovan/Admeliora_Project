const ActualUsersQueries = require('../../../databaseQueries').ActualUsersQueries

const PhoneNumbersQueries = ActualUsersQueries.PhoneNumbersQueries;
const ActivityLogs = ActualUsersQueries.ActivityLogsQueries;




module.exports = new class PhoneNumberController {

/*--------------------------------------------GET----------------------------------------------------*/ 

    async getAllPhoneNumbersByID(req, res) {

        let user_id = req.user.user_id;
    
        let phoneNumbers = await PhoneNumbersQueries.getPhoneNumbers(user_id)
        .catch(err => res.send(err.message));
        res.send(phoneNumbers);
    
    };
    


/*--------------------------------------------CREATE-------------------------------------------------*/ 
    async addPhone(req, res) {
        
        await PhoneNumbersQueries.add(req.user.user_id, req.body.phone)
        .then(async ()=> {
            res.status(200).send ({
                status: true,
                message: `phone number ${req.body.phone} successfully added`
            })
        })
        .catch(err => res.send({
            success: false,
            message: err.message,
        }));
    }


/*--------------------------------------------UPDATE-------------------------------------------------*/ 
    async updateDefault(req, res) {
        await PhoneNumbersQueries.updateStatus(req.user.user_id, req.body.phone)
        .then(() => res.status(200).send({success:true, message: "updated successful"}))
        .catch(err => res.status(500).send({success:false, message: err.message}))

    }



/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete(req, res){
        await PhoneNumbersQueries.delete(req.params.phone, req.user.user_id)
        .then(() => {
            res.send({
                success: true,
                message: 'deleted successfully'
            })
        })
        .catch(err => res.send(err.message));
    };
    
    
    async deleteAll(req, res) {
        await PhoneNumbersQueries.deleteAll (req.user.user_id)
        .then(() => res.send ('delete all'));
    }
    
    
    

    
    
    
};

const ActualUsersQueries = require('../../../databaseQueries').ActualUsersQueries
const UsersQueries = ActualUsersQueries.UsersQueries





module.exports = new class UsersController {




/*--------------------------------------------GET----------------------------------------------------*/ 
    async showAllUsers(req, res) {
    
        await UsersQueries.getUsers()
        .then((data) => {
            res.status(200).send({
                success : true,
                data: data
            });
        })
        .catch( err => res.status(500).send({
            success: false,
            message : err.message
        }))
    
    };
    
    
    
    
    
    async getInformation(req, res) {
    
        await UsersQueries.getUserInfoByID(req.user.user_id)

        .then(info => {
            // if authentication success we can get user information
            if (info !== null) {
                res.status(200).send({
                   success: true,
                    data: info
                })
            }else{
                // if user authentication failed then there is no information available
                res.status(404).send ({
                   success : false,
                    message : 'authentication failed'
                })
            }
        })
        .catch(err => res.send({
           success: false,
            message: err.message}));
    
    }
    




    

/*--------------------------------------------UPDATE-------------------------------------------------*/ 




    async updateInfo(req, res) {
        
        try{

            await UsersQueries.UpdateInfo(req.body, req.user.user_id)
            res.status(200).send({
                success: true,
                message: 'successfully updated user', 
            })          

        }catch(err){
            res.status(500).send({
                success: false,
                message: err.message
            })
        }
    }


    async updateAvatar(req, res){

        await UsersQueries.updateAvatar(req.body.avatar, req.user.user_id)
        .then((updatedAvatar) => {
            res.status(200).send({
                success: true,
                data: updatedAvatar
            })
        })
        .catch(err => {
            res.status(500).send({
                success: false,
                message: err.message
            })
        })

        
    }
/*--------------------------------------------DELETE-------------------------------------------------*/ 
    async delete(req, res) {
        await UsersQueries.delete(req.user.user_id)
        .then(()=>{
            res.status(200).send({
                success: true,
                message: 'Deleted successfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                success: false,
                message: err.message
            })
        })
    }
    

};



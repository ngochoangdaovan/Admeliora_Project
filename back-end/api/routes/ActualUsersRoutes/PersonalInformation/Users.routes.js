const express = require('express');
const router = express.Router()
const Controller = require('../../../controllers').ActualUserControl;
const UsersControl = Controller.UsersController;
const auth = require('../../../controllers/ActualUser/auth');
const userAvatarUpload = require('../../../middleWares/imageHandler/userImg')


/*------------------------------------------------------GET------------------------------------------------------------*/
// http://localhost:5000/api/user
// this api to get all user, used by admin
router.get('/', auth.AuthenticateToken, auth.AuthenticateAdminToken, UsersControl.showAllUsers)


router.use('/avatar', express.static('./data/user_images'))



// http://localhost:5000/api/user/profile
// this apt for getting user's detail profile
router.get('/profile', auth.AuthenticateToken, UsersControl.getInformation) 

/*------------------------------------------------------POST------------------------------------------------------------*/

// http://localhost:5000/api/user/register
/*
    required a req.body which contains as in the sample
    {
        "user_name" : "",
        "password"  : "",
        "first_name" : "",
        "last_name" : "",
        "email"     : "",
        "dob"       : "",
        "gender"    : ""
    }

*/
router.post('/register', auth.registerUser);

// http://localhost:5000/api/user/login
/*
    login required user_name, password
    {
        "user_name": "hoangdao",
        "password"  : "Hoangdao@236"
    }
}
*/ 
router.post('/login', auth.Login);



/*------------------------------------------------------PUT------------------------------------------------------------*/

// http://localhost:5000/api/user/profile/update
/*
    this api required a body that contains all info to be updated, for instance
    {
        "first_name" : "andreas",
        "last_name" :"alexander"
    }
*/
router.put('/profile/update', auth.AuthenticateToken, UsersControl.updateInfo) 


// http://localhost:5000/api/user/profile/avatar
// as the example above 
router.put('/profile/avatar', auth.AuthenticateToken, userAvatarUpload.single('avatar'), UsersControl.updateAvatar)

/*------------------------------------------------------DELETE------------------------------------------------------------*/

// http://localhost:5000/api/user/delete
router.delete('/delete', auth.AuthenticateToken, UsersControl.delete)

// http://localhost:5000/api/user/delete/avatar
router.delete('/delete/avatar', auth.AuthenticateToken, UsersControl.updateAvatar)





module.exports = router;


const express = require('express');
const router = express.Router()
const Controller = require('../../../controller').ActualUserControl;
const UsersControl = Controller.UsersController;
const auth = require('../../../controller/ActualUser/auth')


/*------------------------------------------------------GET------------------------------------------------------------*/
router.get('/profile', auth.AuthenticateToken, UsersControl.getInformation)



/*------------------------------------------------------POST------------------------------------------------------------*/

router.post('/register', auth.registerUser);
router.post('/login', auth.Login);

/*------------------------------------------------------PUT------------------------------------------------------------*/
/*------------------------------------------------------DELETE------------------------------------------------------------*/











module.exports = router;


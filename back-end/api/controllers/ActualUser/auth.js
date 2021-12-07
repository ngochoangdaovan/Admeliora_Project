'use strict';


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require('moment');
const {userValidation} = require('../../utils/schemaValidation')
const db = require('../../models')(); 
const UserModel = db.Users
const responseHandler = require('../../utils/responseHandler');


const auth = {};






/*----------------------------------REGISTRATION---------------------------------------------*/


auth.registerUser = async (req, res) => {
    
    try {
        // check schemaValidation before add to db
        await userValidation.validateAsync(req.body);

        // encrypt password
        const salt =  await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // add user to database
        await UserModel.create({
            user_name: req.body.user_name,
            password: hashedPassword,
            first_name: req.body.first_name, 
            last_name: req.body.last_name,
            email : req.body.email,
            level: 0,
            dob : req.body.dob,
            gender: req.body.gender,
            is_admin: false,
        })

        .then(() => responseHandler.sendSuccess(req, res, 201, 'successfully created user'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))


    }catch(e){
        responseHandler.sendFailure(req, res, 500, e)
    }

};





/*-------------------------------LOGIN------------------------------------------------*/

auth.Login = async function(req, res, next) {

    // get user by the user_name 
    const user = await UserModel.findOne({
        where: {user_name: req.body.user_name},
        attributes: ['user_id', 'user_name', 'password', 'is_admin'],
        required: true,
        plain : true
    });

    
    if (user === null) { // send error if user is not a valid/ exists
        res.status(400).send({
            success:false ,
            message: 'user name is not exist'
        });
    }else {

        const now = new Date().getTime()


        // get id and username to create tokens
        const UserInfo = {user_id: user.user_id, is_admin: user.is_admin, last_time : now}

        // compare the authentication token
        const isAuth = await bcrypt.compare( req.body.password, user.password)

        // if auth
        if (isAuth) {

            // combine user info in the token and send to user
            const token = jwt.sign(UserInfo, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30m'});

            res.json({
                success: true,
                accessToken : token
            });

        }else {

            // not auth => send error
            res.status(403).send({
                success:false ,
                message:"invalid password"
            })
        }
    }
    next();
};




/*------------------------------------AUTHENTICATION TOKEN-------------------------------------------*/

auth.AuthenticateAdminToken = async function(req, res, next){

    if ( req.user === (null || undefined) || !req.user.is_admin){
        return res.sendStatus(403)
    }

    next()

    

}



auth.ProductAccessAllow = async function(req, res, next){
    const authHeader = req.headers.authorization;
    if (!(authHeader === (null || undefined))){
        await auth.AuthenticateToken(req, res, next);
    }else{
        next()
    }
}

auth.AuthenticateToken = async function(req, res, next) {

    
    // get token from request header
    const authHeader = req.headers.authorization;

    // check if there is a header with authorization token
    if (!(authHeader === (null || undefined))) {


        // get the token from the splitting token from (token: uaieo0q9840....)
        const token = await authHeader.split(' ')[1]; // get the second part which is the token

        // if token part is empty then send status error
        if (token === (null || undefined)) {

            return res.status(403).send({
                status : false,
                message: 'no token, authentication failed'
            })
        }

        // verify token 
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, info) => {

            // if any thing wrong then raise error and asking for credentials again.
            if (err) {
                return res.sendStatus(403)
            };

            const last_time = info.last_time;
            const now = new Date().getTime()   
            const now_last_request = (now-last_time)/1000
            info.last_time = now;

            // if that user is using the token and that token will be expired then we refresh it for that use else
            // if that user not use that token in 5 min  before it expired then it will not be refresh
            if ((now_last_request < 300 && (info.exp * 1000 - now)/1000 < 300)){
                
                // get only the user info to create new token
                const user = {
                    user_id : info.user_id,
                    is_admin : info.is_admin
                };

                // 
                const newToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30m'});
                req.newAuthorization = newToken;

                info = jwt.verify(newToken, process.env.ACCESS_TOKEN_SECRET)
            }

            // put the user information to the request
            req.user = info;
            next()
        })
    }else {
        // if the authentication header is empty send error.
        return res.status(403).send({ 
            status : false,
            message: 'authentication failed, please try again!'
        })
    }

};
    












module.exports = auth
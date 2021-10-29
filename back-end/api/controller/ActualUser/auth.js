'use strict';


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {userValidation} = require('../../utils/schemaValidation')
const db = require('../../models')(); 
const UserModel = db.Users


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

        .then(()=>{res.status(201).send({
            ok: true,
            message: 'successfully created users'
        });})
        .catch(err => res.status(500).send({
            ok: false,
            message : err.message
        }));

    }catch(e){
        res.status(500).send({
            success: false,
            message: e.message
        })
    }

};





/*-------------------------------LOGIN------------------------------------------------*/

auth.Login = async function(req, res, next) {

    // get user by the user_name 
    const user = await UserModel.findOne({
        where: {user_name: req.body.user_name},
        attributes: ['user_id', 'user_name', 'password', 'isAdmin'],
        required: true,
        plain : true
    });

    
    if (user === null) { // send error if user is not a valid/ exists
        res.status(400).send({
            success:false ,
            message: 'user name is not exist'
        });
    }else {

        // get id and username to create tokens
        const UserInfo = {user_id: user.user_id, isAdmin: user.is_admin}

        // compare the authentication token
        const isAuth = await bcrypt.compare( req.body.password, user.password)

        // if auth
        if (isAuth) {

            // combine user info in the token and send to user
            const token = await jwt.sign(UserInfo, process.env.ACCESS_TOKEN_SECRET);
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
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

            // if any thing wrong then raise error and asking for credentials again.
            if (err) {return res.status(403).send({ 
                status : false,
                message: 'authentication failed, please try again!'
            })};

            

            // put the user information to the request
            req.user = user;
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
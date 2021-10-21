'use strict';


const UsersQueries = require('../../databaseManipulations').ActualUsersQueries.UsersQueries
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const auth = {};

/*-------------------------------LOGIN------------------------------------------------*/

auth.Login = async function(req, res, next) {

    // get user by the user_name 
    const user = await UsersQueries.getUsersByUserName( req.body.user_name);



    
    if (user === null) { // send error if user is not a valid/ exists
        res.status(400).send({
            status:false ,
            message: 'user name is not exist'
        });
    }else {

        // get id and username to create tokens
        const UserInfo = {user_id: user.user_id}

        // compare the authentication token
        const isAuth = await bcrypt.compare( req.body.password, user.password);

        // if auth
        if (isAuth) {

            // combine user info in the token and send to user
            const token = await jwt.sign(UserInfo, process.env.ACCESS_TOKEN_SECRET);
            res.json({
                status : true,
                accessToken : token
            });

        }else {

            // not auth => send error
            res.status(403).send({
                status:false ,
                message:'authentication failed'
            })
        }
    }
    next();
};




/*------------------------------------AUTHENTICATION-------------------------------------------*/


    
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
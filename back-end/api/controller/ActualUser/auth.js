'use strict';


const UsersQueries = require('../../databaseManipulations').ActualUsersQueries.UsersQueries
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const auth = {

};



auth.Login = async function(req, res, next) {

    // get user by the user_name 
    const user = await UsersQueries.getUsersByUserName( req.body.user_name);
    // get id and username to create tokens
    const UserInfo = {user_id: user.user_id, user_name : user.user_name}

    
    if (user === null) {
        res.status(400).send('user name is not exist');
    }else {
        const isAuth = await bcrypt.compare( req.body.password, user.password);
        if (isAuth) {
            const token = await jwt.sign(UserInfo, process.env.ACCESS_TOKEN_SECRET);
            res.json({
                auth : true,
                accessToken : token
            });

        }else {
            res.status(403).send('authentication failed')
        }
    }
};

    
auth.AuthenticateToken = async function(req, res, next) {
    const authHeader = req.headers.authorization;
    

    const token = await authHeader.split(' ')[1];
    if (token === null) {
        return res.status(403).send('no token')
    }

    // verify token 
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {return res.status(403).send('authentication failed')};
        req.user = user;
        next()
    })

};


auth.UserRegistration= async function(req, res, next) {
    UsersQueries.createUser(req)
}

    












module.exports = auth
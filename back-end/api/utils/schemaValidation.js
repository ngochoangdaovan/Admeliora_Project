const Joi = require('@hapi/joi');



const userValidation = Joi.object({
    user_name : Joi.string()
                .min(6)
                .max(50)
                .required()
                .alphanum(), 
    password : Joi.string()
                .required()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .min(8)
                .max(50),
    email : Joi.string()
                .email()
                .required(), 
    first_name : Joi.string(),
    last_name : Joi.string(),
    dob : Joi.date(),
    gender : Joi.string()


    
})













module.exports = {userValidation}
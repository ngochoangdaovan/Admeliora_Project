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
    first_name : Joi.string() || null,
    last_name : Joi.string() || null,
    dob : Joi.date() || null,
    gender : Joi.string() || null


    
})







module.exports = {userValidation}




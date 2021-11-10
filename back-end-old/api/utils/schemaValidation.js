const Joi = require('@hapi/joi');



const userValidation = Joi.object({
    user_name : Joi.string()
                .min(8)
                .max(50)
                .required()
                .alphanum(), 
    password : Joi.string()
                .required()
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


const CategoryValidation = Joi.object ({
    category_name : Joi.string()
                        .required()

})


const ColorValidation = Joi.object({
    product_line_id : Joi.required(), 
    color_name : Joi.string().required()

})



const ProductLineValidation = Joi.object({
    category_id : Joi.required(),
    name : Joi.string().required(),
    material : Joi.string(), 
    information : Joi.string()
})










module.exports = {
    userValidation,
    CategoryValidation,
    ColorValidation,
    ProductLineValidation
}




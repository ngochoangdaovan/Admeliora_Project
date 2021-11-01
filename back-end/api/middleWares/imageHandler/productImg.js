'use strict';

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination     : function(req, file, callbacks) {
        callbacks(null, './data/product_images')
    },
    filename        : function(req, file, callbacks) {
        callbacks(null, Date.now() + file.originalname );
    }
})




const ProductUpload = multer({
    storage     :   storage,
    fileFilter  : function(req, file, callbacks) {

        fileFilter(file, callbacks)
        req.file = file
    }
}) 


const fileFilter = (file, callbacks) =>{
    // console.log(file)

    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
    return callbacks(null,true);
    } else {
    callbacks('Error: Images Only!');
    }
}


module.exports = ProductUpload



















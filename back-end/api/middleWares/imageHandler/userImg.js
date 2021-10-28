'use strict';


const { date } = require('@hapi/joi');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage(
    {
        destination     :   function(req, file, callbacks) {
            callbacks(null, './data/user_images')
        },
        filename        :   function(req, file, callbacks) {
            const fileName = Date.now().toString() + file.originalname;
            callbacks(null, fileName)
        }
    }
);



const UserUpload = multer({
    storage     :   storage,
    fileFilter  : function(req, file, callbacks) {

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

        req.file = file
    }
})










module.exports = UserUpload











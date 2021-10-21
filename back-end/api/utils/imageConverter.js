const fs = require('fs');
const path = require('path');

let buff = new Buffer(data, 'base64');
fs.writeFileSync('stack-abuse-logo-out.png', buff);


module.exports = {


    readImage : function(file_name, to){

        let file_path = '';
        if (to === 'user'){
            file_path = 'back-end/ImageData/user_image';
        }
        if (to === 'product'){
            file_path = 'back-end/ImageData/product_image/';
        }
        return fs.readFileSync(path.join(file_path, file_name), 'base64');
    },


    writeImage : function() {

        let file_path = '';
        if (to === 'user'){
            file_path = 'back-end/ImageData/user_image';
        }
        if (to === 'product'){
            file_path = 'back-end/ImageData/product_image/';
        }
        let buff = new Buffer(data, 'base64');
        fs.writeFileSync(path.join(file_path, file_name), buff);
    }

}


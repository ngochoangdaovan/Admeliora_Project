const fs = require('fs');
const path = require('path');

// let buff = new Buffer(data, 'base64');
// fs.writeFileSync('stack-abuse-logo-out.png', buff);


module.exports = {


    readImage : function(file_path){
        return fs.readFileSync(file_path, 'base64');
    },


    writeImage : function(file_name, to, data) {

        let file_path = '';
        if (to === 'user'){
            file_path = 'back-end/ImageData/user_image';
        }
        if (to === 'product'){
            file_path = 'back-end/ImageData/product_image/';
        }
        let buff = new Buffer(data, 'base64');
        
        exact_path = path.join(file_path, file_name)
        fs.writeFileSync(exact_path, buff);

        return exact_path;
    }

}


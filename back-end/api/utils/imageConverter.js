const fs = require('fs');

const path = require('path');
const img2Bs64 = require('image-to-base64')



module.exports = {


    readImage : async function(file_path){
        let result = img2Bs64(file_path)
        return result;
    },


    writeImage : function(file_name, to, data) {

        let file_path = '';
        if (to === 'user'){
            file_path = path.resolve('../../ImageData/user_image');
        }
        if (to === 'product'){
            file_path = path.resolve('../../ImageData/product_image/');
        }
        
        exact_path = path.join(file_path, file_name)
        fs.writeFileSync(exact_path, data, 'base64');

        return exact_path;
    }

}


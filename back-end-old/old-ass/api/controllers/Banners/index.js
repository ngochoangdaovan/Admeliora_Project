

const fs = require('fs');   
const path = require('path');
const responseHandler = require('../../utils/responseHandler');
const upload = require('../../middleWares/imageHandler/bannerImg');






module.exports = new class PageImages {


    /**
     * Create a new page image.
     */
    async store(req, res) {

        upload(req, res, async (err) => {
            if (err) {
                return responseHandler.sendFailure(res, res, 400, err);
            }else{
                // Return the status.
                return responseHandler.sendSuccess(req, res, 200, 'Page image created.');
            }});

    }


    //  get functions to get all page images from ../../../data/homeSlideImages and send them to the client.

    async getAllPageImages(req, res) {

        try {
                                    
            // Get all page images from ../../../data/pageImages/
            const pageImages = fs.readdirSync(path.join(__dirname, '../../../data/banner_images/'));

            // Return the page images.
            return responseHandler.sendSuccess(req, res, 200, pageImages);
            
        }catch(err) {
            return responseHandler.sendFailure(req, res, 500, err.message);
        }

    }                 
    
    
    async deletePageImage(req, res) {

        try {

            // Delete the page image.
            fs.unlinkSync(path.join(__dirname, '../../../data/banner_images/' + req.params.image_name));

            // Return the page image.
            return responseHandler.sendSuccess(req, res, 200, 'Page image deleted.');
        }catch(err) {
            return responseHandler.sendFailure(req, res, 500, err.message);
        }
                                                                

    }                                               


}








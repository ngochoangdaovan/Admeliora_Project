'use strict';


module.exports = async() => {

    const path = require('path');
    const basename = path.basename(__filename);
    const model_search = require('../ReadAddModels')
        
    return model_search(__dirname, basename);
}


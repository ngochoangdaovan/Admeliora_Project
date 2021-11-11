'use strict';


module.exports = () => {

    const path = require('path');
    const basename = path.basename(__filename);
    const model_search = require('../../utils/indexConstruct')
        
    return model_search(__dirname, basename);
}


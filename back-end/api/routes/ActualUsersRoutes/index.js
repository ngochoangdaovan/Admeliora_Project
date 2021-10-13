'use strict';

const constructFolder = require('../../utils/indexConstruct');
const path = require('path');
const basename = path.basename(__filename);


const ActualUserRoutes = constructFolder(__dirname, basename);

console.log(ActualUserRoutes);

module.exports = {...ActualUserRoutes}
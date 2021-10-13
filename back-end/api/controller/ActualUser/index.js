'use strict';

const constructFolder = require('../../utils/indexConstruct');
const path = require('path');
const basename = path.basename(__filename);

const ActualUserControl = constructFolder(__dirname, basename);

// for (let i in ActualUserControl){
//     console.log(i);
// }
console.log(ActualUserControl);

module.exports = {...ActualUserControl}
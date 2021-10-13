'use strict';

const constructFolder = require('../../utils/indexConstruct');
const path = require('path');
const basename = path.basename(__filename);

const ActualUserMan = constructFolder(__dirname, basename);
// console.log(ActualUserMan)

// for (let i in ActualUserMan) {
//     console.log(ActualUserMan[i].name)
// }

module.exports = {...ActualUserMan}

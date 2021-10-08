'use strict';


module.exports = (LayerPath, basename) => {

    const fs = require('fs');
    const path = require('path');
    const models = {};

    if (typeof LayerPath !== 'string') {
      return models 
    }

    fs
      .readdirSync(LayerPath)
      .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
      .forEach(file => {
        const model = require(path.join(LayerPath, file));
        models[file] = model;
      });


    return models;
}
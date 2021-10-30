'use strict';
const {Model} = require('sequelize');
const {isUnique} = require('../validations');


module.exports = (sequelize, DataTypes) => {
  
  
  class ProductLines extends Model {
    
    static associate({Warehouse, Categories, ProductColors}) {

      this.hasMany (Warehouse, {
        foreignKey :{
          name : 'product_line_id',
          allowNull : false,
        }
      });

      this.hasMany(ProductColors, {
        foreignKey :{
          name : 'product_line_id',
          allowNull : false,
        }
      });

      this.belongsTo(Categories, {
        foreignKey :{
          name : 'category_id',
          allowNull : false,
        },
          onDelete : 'CASCADE',
          onUpdate : 'CASCADE'
      });
    }

  };

  // define table properties
  ProductLines.init(
    {
    
      product_line_id : {
        type        : DataTypes.INTEGER,
        allowNull   : false,
        primaryKey  : true,
        autoIncrement : true
      },

      name : {
          type : DataTypes.STRING(300),
          allowNull : false,
          validate : {
            checkUnique : function(value, next){isUnique(ProductLines, {name : value}, next)}
          }
      },

      material : DataTypes.STRING(1000),

      information : DataTypes.STRING(1000),      

      price : {
        type : DataTypes.FLOAT,
        allowNull : false
      }
      
  }, 


  // options and constraints
  {
    sequelize,
    modelName: 'ProductLines',
    tableName : 'product_lines',
    timestamps: false,
    indexes : [{fields : ['category_id', 'product_line_id']}],
    references : {
      model : 'Categories',
      key : 'category_id'
    }

  });

  return ProductLines;
};
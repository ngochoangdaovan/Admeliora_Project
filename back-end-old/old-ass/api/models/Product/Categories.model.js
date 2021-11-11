'use strict';

const {Model} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
   
    
    static associate({ProductLines, Sizes}) {

      // define association 
      this.hasMany(ProductLines, {
        foreignKey: {
          name: 'category_id',
          allowNull   : false,
        }
      });

      this.hasMany(Sizes, {
        foreignKey: {
          name: 'category_id',
          allowNull   : false,
        }
      });
    }
  };


  Categories.init(
    // attributes
    {
      category_id : {
        type : DataTypes.INTEGER,
        allowNull   : false,
        primaryKey: true,
        autoIncrement : true
      },
      name : {
          type : DataTypes.STRING(100),
          allowNull : false,
      }
    },
  
  
    //options and constraints
    {
      sequelize,
      modelName: 'Categories',
      tableName : 'categories',
      timestamps: false,
      underscored : true,
      indexes : [{fields : ['category_id']}]
    }
  );


  
  return Categories;
};
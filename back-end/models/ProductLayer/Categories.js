'use strict';

const {Model} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
   
    
    static associate({ProductLines, Sizes}) {
      console.log(typeof ProductLines);

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
        type : DataTypes.UUID,
        allowNull   : false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
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


  Categories.removeAttribute('id');
  
  return Categories;
};
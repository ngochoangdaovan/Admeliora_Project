'use strict';
const {
  Model
} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    


    // define association here

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
          foreignKeyConstraint : true,
          onDelete : 'CASCADE',
          onUpdate : 'CASCADE'
      });
    }
  };



  // define attributes
  Product.init({

      product_line_id : {
        type        : DataTypes.UUID,
        allowNull   : false,
        primaryKey  : true,
        defaultValue : DataTypes.UUIDV4
      },

      category_id : {
        type        : DataTypes.UUID,
        allowNull   : false,
      },

      name : {
          type : DataTypes.STRING(300),
          allowNull : false,
      },

      material : {
          type : DataTypes.STRING(1000),
          allowNull : false,
      },
      
      information : {
          type : DataTypes.STRING(1000),
          allowNull : false,
      },

      rate : {
          type : DataTypes.FLOAT(5),
          allowNull : false,
      }
  }, 
  
  
  // options and constraints
  {
    sequelize,
    modelName: 'Product',
    tableName : 'Product',
    timestamps: false,
    indexes : [{fields : ['category_id']}],
    references : {
      model : 'Categories',
      key : 'category_id'
    }
  });


  Product.removeAttribute('id');
  return Product;
};
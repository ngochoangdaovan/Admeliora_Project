'use strict';
const {Model} = require('sequelize');



module.exports = (sequelize, DataTypes) => {



  class ProductImages extends Model {


    
    static associate({ProductColors}) {
      // define association here

      this.belongsTo(ProductColors, 
        {
        
        foreignKey: { 
          name: 'color_id',
          allowNull : false
        }, 
        foreignKeyConstraint: true,
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'

      });
    }
  };



  //  define table columns
  ProductImages.init(
    {
      image_path: {
        type: DataTypes.STRING(350),
        allowNull : false
      }
    },

    // more options
    {
      sequelize,
      modelName: 'ProductImages',
      tableName : 'product_images',
      timestamps: false,
      references : {
        model: 'ProductColors',
        key: 'color_id'
      },
      indexes : [{fields : ['color_id']}],
    }
  );

  return ProductImages;
};
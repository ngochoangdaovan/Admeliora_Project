'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImages extends Model {
    /**
     CREATE TABLE IF NOT EXISTS `Admeliora`.`product_images` (
    `product_colors_id` INT NOT NULL,
    `image` VARCHAR(45) NULL,
      INDEX `fk_product_images_product_colors1_idx` (`product_colors_id` ASC) VISIBLE,
      CONSTRAINT `fk_product_images_product_colors1`
        FOREIGN KEY (`product_colors_id`)
        REFERENCES `Admeliora`.`product_colors` (`product_colors_id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE)
     */
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




  ProductImages.init({
    image_path: {
      type: DataTypes.STRING(350),
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'ProductImages',
    tableName : 'ProductImages',
    timestamps: false,
    references : {
      model: 'ProductImages',
      key: 'color_id'
    },
    indexes : [{fields : ['color_id']}],
  });
  return ProductImages;
};
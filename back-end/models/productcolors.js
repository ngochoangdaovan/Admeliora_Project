'use strict';
const {Sequelize, Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class ProductColors extends Model {
    
    /*
      CREATE TABLE IF NOT EXISTS `Admeliora`.`product_colors` (
      `product_colors_id` INT NOT NULL,
      `product_line_id` INT NOT NULL,
      `color_name` VARCHAR(45) NULL,
      PRIMARY KEY (`product_colors_id`),
      INDEX `fk_products_2_idx` (`product_line_id` ASC) VISIBLE,
      CONSTRAINT `fk_products_2`
          FOREIGN KEY (`product_line_id`)
          REFERENCES `Admeliora`.`product_lines` (`product_line_id`)
          ON DELETE CASCADE
          ON UPDATE CASCADE)

    */
     
    // associations define
    static associate({ProductLines, ProductImages, Warehouse}) {
      
      this.belongsTo(ProductLines, {
        foreignKey : {
          name : 'product_line_id',
          allowNull : false
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE',
        foreignKeyConstraint: true
      });


      this.hasMany(ProductImages, {
        foreignKey : {
          name : 'color_id',
          allowNull : false
        }
      });


      this.hasMany(Warehouse, {
        foreignKey : {
          name : 'color_id', 
          allowNull : false
        }
      });
    }

    toJSON(){
      return {...this.get()}
    }


  };

  // table define
  ProductColors.init(
    // attributes
    {
      color_id : {
        type        : DataTypes.UUID,
        allowNull   : false,
        primaryKey: true,
        defaultValue : Sequelize.UUIDV4
      },

      product_id : {
          type : DataTypes.UUID,
          allowNull : false,
          validate : {
            notNull :{message: 'product_id cannot be null'},
            notEmpty :{message: 'product_id cannot be empty'}
            
          }
      },

      color_name : {
          type : DataTypes.STRING,
          allowNull : false,
          validate :{
            notNull : {
              message : 'color name cannot be null'
            },

          }
      }
    },

    //options and constraints
    {
      sequelize,
      modelName: 'ProductColors',
      tableName : 'ProductColors',
      timestamps: false,
      references : {
        model: 'ProductLines',
        key: 'product_line_id'
      },
      indexes : [{fields : ['product_line_id']}],
      
    }
  );

  ProductColors.removeAttribute('id');
  return ProductColors;
};
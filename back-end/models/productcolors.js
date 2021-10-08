'use strict';
const {Sequelize, Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  
  
  class ProductColors extends Model {
    

     
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
      indexes : [{fields : ['product_line_id', 'color_id' ]}],
      
    }
  );

  ProductColors.removeAttribute('id');
  return ProductColors;
};

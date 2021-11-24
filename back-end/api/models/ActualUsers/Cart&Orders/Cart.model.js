'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  
  
  class Cart extends Model {


    toJSON(){return { ...this.get(), user_id: undefined }}

    static associate({Users, Warehouse}) {

      this.belongsTo(Warehouse, {
        foreignKey: {
          name: 'product_detail_id',
          allowNull   : false
        }
      });


      this.belongsTo(Users, {
        foreignKey :{
          name : 'user_id',
          allowNull : false,
        },
        foreignKeyConstraint : true,
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      });

    }
  };

  
  Cart.init(
    // tables attributes

      { 
        name : {
            type : DataTypes.STRING,
            allowNull   : false,
        },

        quantity : {
            type : DataTypes.INTEGER,
            allowNull   : false,
        },

        discount : {
            type : DataTypes.FLOAT,
            allowNull   : false,
        },

        price : {
            type : DataTypes.FLOAT,
            allowNull : false,
        },
        
        image : {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        size : {
            type : DataTypes.STRING(500),
            allowNull : false
        }
    },
    
    
    // options and constraints
    {
      sequelize,
      modelName: 'Cart',
      tableName : 'cart',
      timestamps: false,
      references : {
        model : 'Users',
        key : 'user_id' 
      },
      references : {
        model : 'Warehouse',
        key : 'product_detail_id'
      },
      indexes : [{fields: ['user_id', 'product_detail_id']}], 
    }
  );


  return Cart;
};
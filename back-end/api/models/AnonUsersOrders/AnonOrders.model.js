'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  
  
  class AnonOrders extends Model {

    // define associations
    static associate({OrderDetails}) {
  

      this.hasMany(OrderDetails, {
        foreignKey : {
          name : 'order_id',
          allowNull : false
        }
      });

    }
  };

  
  AnonOrders.init(
    // attributes
    {
      order_id : {
        type        : DataTypes.UUID,
        allowNull : false,
        defaultValue : DataTypes.UUIDV4,
        primaryKey : true
      },

      order_name : {
          type : DataTypes.DATE,
          allowNull : false, 
          defaultValue : DataTypes.NOW
      },

      total_price : {
          type : DataTypes.FLOAT,
          allowNull   : true
          
      },

      date_time : {
          type : DataTypes.DATE,
          defaultValue : DataTypes.NOW
      },

      status : {
          type : DataTypes.BOOLEAN,
          defaultValue : false
      },

      address : { 
          type : DataTypes.STRING(400),
          allowNull   : true
      },

      phone : {
          type : DataTypes.STRING(15),
          allowNull : true,
          validate : {
            isNumeric  : {message : "invalid phone number"}
          }
      }

    },
    
    // options
    {
      sequelize,
      modelName: 'AnonOrders',
      tableName : 'anonym_orders',
      timestamps: false,
      
      indexes: [{
        fields: ['order_id'],
      }]

    }
  );
  AnonOrders.removeAttribute('id');
  return AnonOrders;
};
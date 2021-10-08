'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnonymousOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({AnonymousOrderDetails}) {
      
      this.hasMany(AnonymousOrderDetails, {
        foreignKey: {
          name: 'order_id', 
          allowNull : false
        },
      });

    }
  };
  AnonymousOrders.init({

      order_id : {
        type        : DataTypes.UUID,
        allowNull : false,
        defaultValue : DataTypes.UUIDV4,
        primaryKey : true
      },

      order_name : {
          type : DataTypes.DATE,
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
          type : DataTypes.STRING,
          allowNull   : false
      },

      phone : {
          type : DataTypes.STRING(15),
          allowNull : true,
          validate : {
            isNumeric  : {message : "invalid phone number"}
          }
      }
  }, {
    sequelize,
    modelName: 'AnonymousOrders',
    tableName : 'AnonymousOrders',
    timestamps: false,
    indexes: [{fields: ['order_id']}]

  });

  AnonymousOrders.removeAttribute('id');
  return AnonymousOrders;
};
'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  
  
  class Orders extends Model {


    static associate({OrderDetails, Users}) {
  

      this.hasMany(OrderDetails, {
        foreignKey : {
          name : 'order_id',
          allowNull : false
        }
      });

      this.belongsTo(Users, {
        foreignKey : {
          name : 'user_id',
          allowNull : false
        }
      });
    }
  };

  
  Orders.init(
    // attributes
    {
      order_id : {
        type        : DataTypes.UUID,
        allowNull : false,
        defaultValue : DataTypes.UUIDV4,
        primaryKey : true
      },

      order_name : {
          type : DataTypes.STRING,
          allowNull : false
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

      address_id : { 
          type : DataTypes.UUID,
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
      modelName: 'Orders',
      tableName : 'Orders',
      timestamps: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }, 
      indexes: [{
        fields: ['user_id','order_id'],
      }]

    }
  );
  Orders.removeAttribute('id');
  return Orders;
};
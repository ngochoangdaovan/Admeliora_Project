'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  
  
  class Orders extends Model {

    toJSON(){return { ...this.get(), id: undefined }}


    // define associations
    static associate({OrderDetails, Users, PhoneNumbers, Addresses}) {
  

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



      this.belongsTo(Addresses,  {
        foreignKey : {
          name : 'address_id'
        }, 
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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

      address_id : { 
          type : DataTypes.UUID,
          allowNull   : true
      },

      phone_id : {
          type : DataTypes.UUID,
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
      tableName : 'orders',
      timestamps: false,
      references: {
        model: 'Users',
        key: 'user_id'
      }, 

      references: {
        model: 'Addresses',
        key: 'address_id'
      }, 

      indexes: [{
        fields: ['user_id','order_id', 'address_id'],
      }]

    }
  );
  return Orders;
};
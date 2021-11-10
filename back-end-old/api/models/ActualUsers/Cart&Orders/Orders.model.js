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


      this.belongsTo(PhoneNumbers, {
        foreignKey : {
          name : 'phone_number',
          allowNull : false,
          validate : {
            isNumeric  : {message : "invalid phone number"}
          }
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })

    }
  };

  
  Orders.init(
    // attributes
    {
      order_id : {
        type        : DataTypes.UUID,
        allowNull : false,
        primaryKey : true
      },

      order_name : {
        type : DataTypes.DATE,
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
'use strict';
const {Model} = require('sequelize');



module.exports = (sequelize, DataTypes) => {



  class OrderDetails extends Model {

    toJSON(){return { ...this.get(), id: undefined }}


    // define associations
    static associate({Orders, Warehouse}) {

      this.belongsTo(Orders, {
        foreignKey : {
          name : 'order_id',
          allowNull : false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      this.belongsTo(Warehouse, {
        foreignKey : {
          name : 'product_detail_id',
          allowNull : false
        }
      });
    }
  };



  OrderDetails.init(
    
    // attributes
    {

      quantity : {
          type : DataTypes.INTEGER,
          allowNull : false
      },

      price : {
          type : DataTypes.FLOAT,
          allowNull : false
      }
    },
    
    // options and constraints
    {
      sequelize,
      modelName: 'OrderDetails',
      tableName: 'order_details',
      timestamps: false,
      indexes: [{fields: ['order_id', 'product_detail_id']}],
      references: {
        model: 'Orders',
        key: 'order_id'
      },
      references: {
        model: 'Warehouse',
        key: 'product_detail_id'
      },


  });


  return OrderDetails;
};  
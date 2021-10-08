'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnonymousDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({AnonymousOrders, Warehouse}) {
      this.belongsTo(AnonymousOrders, {
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
  AnonymousDetails.init(
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
    {
      sequelize,
      modelName: 'AnonymousOrderDetails',
      tableName : 'anonymous_order_detail',
      indexes: [{fields: ['order_id', 'product_detail_id']}],
      references: {
        model: 'Orders',
        key: 'order_id'
      },
      references: {
        model: 'Warehouse',
        key: 'product_detail_id'
      },
    }
  );
  return AnonymousDetails;
};
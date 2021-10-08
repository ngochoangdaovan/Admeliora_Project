'use strict';
const {Model} = require('sequelize');




module.exports = (sequelize, DataTypes) => {



  class Warehouse extends Model {
   
    
    static associate({Cart, ProductLines, ProductColors, Sizes}) {

      
      this.hasMany(Cart, {
        foreignKey:{
          name: 'product_detail_id',
          allowNull: false
        }
      });

      this.belongsTo(ProductLines, {
        foreignKey : {
          name : 'product_line_id',
          allowNull : false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      this.belongsTo(ProductColors, 
        {
          foreignKey: {
            name : 'color_id',
            allowNull : false
          },
          onDelete : 'CASCADE', 
          onUpdate : 'CASCADE'
      });



      this.belongsTo(Sizes, 
        {
          foreignKey: {
            name : 'size_id',
            allowNull : false
          },
          onDelete : 'CASCADE', 
          onUpdate : 'CASCADE'
      });

    }
  };



  Warehouse.init(
    {
      product_detail_id :{
        type : DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
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
      modelName: 'Warehouse',
      tableName: 'warehouse',
      timestamps: false,
      indexes: [{fields: ['product_line_id', 'color_id', 'size_id']}],
      references: {
        model: 'ProductLines',
        key: 'product_line_id'
      }, 

    }
  );


  
  Warehouse.removeAttribute('id')
  return Warehouse;
};
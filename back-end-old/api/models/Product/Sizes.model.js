'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  
  class Sizes extends Model {
    
    // define association 
    static associate({Warehouse, Categories}) {
      
       this.belongsTo(Categories, {
         foreignKey : {
           name : 'category_id',
           allowNull : false
         }, 
         foreignKeyConstraint : true,
         onDelete : 'CASCADE',
         onUpdate : 'CASCADE'
       });


       this.hasMany(Warehouse, {
         foreignKey : {
           name : 'size_id',
           allowNull : false
         }
       })
    }
  };

  // define table properties
  Sizes.init(
    {
      size_id : {
        type        : DataTypes.INTEGER,
        allowNull   : false,
        primaryKey  : true,
        autoIncrement : true
      },

      size_name : {
          type        : DataTypes.STRING(10),
          allowNull   : false
      },

      size_info : { 
          type        : DataTypes.STRING(500),
          allowNull   : false
      }
    },
  
    // options and constraints
    {
      sequelize,
      modelName: 'Sizes',
      tableName : 'sizes',
      timestamps: false,
      indexes: [{fields: ['category_id', 'size_id']}],
      references: {model: 'Categories', key: 'category_id'},

    }
  );



  
  return Sizes;
};
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


  Sizes.init(
    {
      sizes_id : {
        type        : DataTypes.UUID,
        allowNull   : false,
        primaryKey  : true,
        defaultValue : DataTypes.UUIDV4
      },

      size_name : {
          type        : DataTypes.STRING(10),
          allowNull   : false
      },

      size_info : { 
          type        : DataTypes.STRING(500),
          allowNull   : false
      },

      price : {
          type        : DataTypes.FLOAT,
          allowNull   : false
      }
    },
  
    {
      sequelize,
      modelName: 'Sizes',
      tableName : 'Sizes',
      timestamps: false,
      indexes: [{fields: ['size_id', 'category_id']}],
      references: {model: 'Categories', key: 'category_id'},

    }
  );
  Sizes.removeAttribute('id');
  return Sizes;
};
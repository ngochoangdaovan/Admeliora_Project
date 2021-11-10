'use strict';
const {Model} = require('sequelize');




module.exports = (sequelize, DataTypes) => {


  
  class Addresses extends Model {

    static associate({Users, Orders}) {
      // define association here
      this.belongsTo(Users, {
        foreignKey : {
          name : 'user_id',
          allowNull : false
        }, 
        onDelete : 'CASCADE', 
        onDelete : 'CASCADE'
      });


      this.hasMany(Orders,{
        foreignKey : {
          name : 'address_id',
          allowNull : false
        }
      })

    }
  };

  // define table attributes
  Addresses.init(
    { 
      
      address_id: {
        type      : DataTypes.INTEGER,
        primaryKey: true,
        allowNull : false,
        autoIncrement : true,

      },
      province : {
          type      : DataTypes.STRING(20),
          allowNull : false,
      },
      district : {
          type      : DataTypes.STRING(20),
          allowNull : false,
      },
      street : {
          type      : DataTypes.STRING(50),
          allowNull : false
      },
      detail_address : {
          type      : DataTypes.STRING(200),
          allowNull : false
      },
      default : {
          type      : DataTypes.BOOLEAN,
          allowNull : false
      }

  }, {
    // options
    sequelize,
    modelName: 'Addresses',
    tableName: 'addresses',
    timestamps: false,
    underscored : true,
    indexes : [{fields: ['user_id', 'address_id']}], // create index for speed improvements
    references : { // create reference 
      model : 'User',
      key : 'user_id'
    }
  });

 

  return Addresses;
};
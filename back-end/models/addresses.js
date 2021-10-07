'use strict';
const {Model} = require('sequelize');




module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {

    static associate({Users}) {
      // define association here
      Addresses.belongsTo(Users, {
        foreignKey : {
          name : 'user_id',
          allowNull : false
        }, 
        onDelete : 'CASCADE', 
        onDelete : 'CASCADE'
      });
    }
  };

  // define table attributes
  Addresses.init(
    { 
      
      address_id: {
        type      : DataTypes.UUID,
        primaryKey: true,
        allowNull : false,
        defaultValue: DataTypes.UUIDV4,

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
    tableName: 'Addresses',
    timestamps: false,
    underscored : true,
    // indexes : [{fields: ['user_id']}], // create index for speed improvements
    references : { // create reference 
      model : 'User',
      key : 'user_id'
    }
  });

  // remove unnecessary attributes that sequelize created
  Addresses.removeAttribute('id')

  return Addresses;
};
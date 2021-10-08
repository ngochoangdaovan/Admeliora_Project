'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhoneNumbers extends Model {


    static associate({Users}) {
      
      this.belongsTo(Users, {
        foreignKey : {
          name : 'user_id',
          allowNull : false
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      })


    }
  };
  PhoneNumbers.init({

      phone_id : {
        type : DataTypes.UUID,
        primaryKey: true,
        defaultValue : DataTypes.UUIDV4
      },
      phoneNumbers : {
        type       :  DataTypes.STRING(15),
        allowNull : false
      }


  }, {
    sequelize,
    modelName: 'PhoneNumbers',
    tableName : 'phone_numbers',
    timestamps: false,
    indexes: [{fields: ['user_id']}],
    references: {
      model : 'Users',
      key : 'user_id'
    }

  });


  PhoneNumbers.removeAttribute('id'); 
  return PhoneNumbers;
};
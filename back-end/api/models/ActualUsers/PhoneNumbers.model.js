'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {




  class PhoneNumbers extends Model {

    // relations
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



  // table columns
  PhoneNumbers.init({

      phoneNumbers : {
        type       :  DataTypes.STRING(15),
        allowNull : false
      },
      default : {
        type : DataTypes.BOOLEAN
      }


  },
  
  //  options and constraints
  {
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
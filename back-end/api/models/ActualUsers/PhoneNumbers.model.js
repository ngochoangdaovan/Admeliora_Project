'use strict';
const {Model} = require('sequelize');
const {isUnique} = require('../validations');


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
        primaryKey : true,
        allowNull : false,
        unique : true, 
        validate : {
          notNull : {msg : 'enter your phone, please'},
          notEmpty : {msg : 'your phone can not be empty'},
          checkUnique : function(value, next){isUnique(PhoneNumbers, {phoneNumbers : value}, next)},
        }

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


  // PhoneNumbers.removeAttribute('id'); 
  return PhoneNumbers;
};
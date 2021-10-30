'use strict';
const {Model} = require('sequelize');
const {isUnique} = require('../../validations');


module.exports = (sequelize, DataTypes) => {




  class PhoneNumbers extends Model {

    
    // relations
    static associate({Users, Orders}) {
      
      this.belongsTo(Users, {
        foreignKey : {
          name : 'user_id',
          allowNull : false
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      })


      this.hasMany(Orders, {
        foreignKey : {
          name : 'phone_number',
          allowNull : false
        }
      })


    }
  };


  // table columns
  PhoneNumbers.init({

      phone_number : {
        type       :  DataTypes.STRING(15),
        primaryKey : true,
        allowNull : false,
        unique : true, 
        validate : {
          notNull : {msg : 'enter your phone, please'},
          notEmpty : {msg : 'your phone can not be empty'},
          checkUnique : function(value, next){
            isUnique(PhoneNumbers, {
              phone_number : value
            }, next)},
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


  return PhoneNumbers;
};
'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {


  class Users extends Model {

    static associate({ActivityLogs, Addresses, Cart, Orders}) {

      // define association here
      this.hasMany(ActivityLogs, {foreignKey: {
        name : 'user_id',
        allowNull : false
      }}),

      this.hasMany(Addresses, {
        foreignKey: {
          name : 'user_id',
          allowNull : false
        }
      });

      this.hasOne(Cart, {
        foreignKey :{
          name : 'user_id',
          allowNull : false
        }
      });

      this.hasMany(Orders, {
        foreignKey :{
          name : 'user_id',
          allowNull : false
        }
      });

    }
  };
  Users.init(
    {   
      user_id : {
          type : DataTypes.UUID,
          allowNull : false,
          primaryKey : true,
          defaultValue: DataTypes.UUIDV4, 
          unique : true,
      },
      user_name : {
          type : DataTypes.STRING(45),
          allowNull : false,
          validate : {
            notNull : {message : 'enter your name, please'},
            notEmpty : {message : 'your name is required'}
          }
      },
      password : {
          type : DataTypes.STRING(100),
          allowNull : false,
      }, 
      first_name : {
          type : DataTypes.STRING(200),
          allowNull : false,
          validate : {
            notNull : {message : 'enter your name, please'},
            notEmpty : {message : 'your name is required'},
          }
      },
      last_name : {
        type : DataTypes.STRING(50),
        allowNull : false,
        validate : {
          notNull : {message : 'enter your name, please'},
          notEmpty : {message : 'your name is required'},
        }
      },
      email : {
          type : DataTypes.STRING(200),
          allowNull : false,
          validate : {
            notNull : {message : 'enter your name, please'},
            notEmpty : {message : 'your name is required'},
            isEmail : {message : 'not a valid email address'},
          }
      }, 
      phone : {
          type : DataTypes.STRING(15),
          allowNull : false,
          validate : {
            notNull : {message : 'enter your name, please'},
            notEmpty : {message : 'your name is required'},
            isNumeric : {message : 'invalid phone number'}
          }
      }, 
      address_id : { 
          type : DataTypes.STRING(500),
          allowNull : false,
      },  
      level : { 
          type : DataTypes.FLOAT,
          allowNull : false,
      }, 
      DoB : {
          type : DataTypes.DATE,
          allowNull : false,
      },
      gender : {
          type : DataTypes.STRING(10),
          allowNull : false,
      },

  }, {
    sequelize,
    modelName: 'Users',
    tableName : 'Users',
    timestamps: false,
    underscored : true,
    // indexes: [{
    //   fields: ['user_id']
    // }]
  });

  Users.removeAttribute('id');
  return Users;
};
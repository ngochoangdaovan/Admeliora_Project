'use strict';
const {Sequelize, Model} = require('sequelize');
const {isUnique} = require('../validations');



module.exports = (sequelize, DataTypes) => {


  class Users extends Model {




    static associate({ActivityLogs, Addresses, Cart, Orders, PhoneNumbers}) {
      

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


      this.hasMany(PhoneNumbers, {
        foreignKey :{
          name : 'user_id',
          allowNull : false
        }
      });

    }
  };


  


  
  // define table columns
  Users.init(
    {   
      user_id : {
          type : DataTypes.UUID,
          allowNull : false,
          primaryKey : true,
          defaultValue: Sequelize.UUIDV4, 
        
      },
      user_name : {
          type : DataTypes.STRING(45),
          allowNull : false,
          validate : {
            notNull : {msg : 'enter your name, please'},
            notEmpty : {msg : 'your name is required'},
            checkUnique : function(value, next){isUnique(Users, {user_name : value}, next)},
            
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
            notNull : {msg : 'enter your name, please'},
            notEmpty : {msg : 'your name is required'},
          }
      },
      last_name : {
        type : DataTypes.STRING(50),
        allowNull : false,
        validate : {
          notNull : {msg : 'enter your name, please'},
          notEmpty : {msg : 'your name is required'},
        }
      },
      email : {
          type : DataTypes.STRING(200),
          allowNull : false,
          unique : {
            args : true,
            msg : 'email address already exist'
          },
          validate : {
            notNull : {msg : 'enter your name, please'},
            notEmpty : {msg : 'your name is required'},
            isEmail : {msg : 'not a valid email address'},
            checkUnique : function(value, next){isUnique(Users, {email : value}, next)},
          }
      }, 

      level : { 
          type : DataTypes.FLOAT,
      }, 
      dob : {
          type : DataTypes.STRING(30),
      },
      gender : {
          type : DataTypes.STRING(10),
      }

  }, 
  
  // options and constraints
  {
    sequelize,
    modelName: 'Users',
    tableName : 'users',
    timestamps: false,
    underscored : true,
    indexes: [{
      fields: ['user_id']
    }],
  });





  return Users;
};
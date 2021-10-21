'use strict';
const {Model} = require('sequelize');



module.exports = (sequelize, DataTypes) => {



  class ActivityLogs extends Model {


    toJSON() {
      return { ...this.get(), id: undefined }
    }

    // define the associations relationship between tables
    static associate({Users}) {

      ActivityLogs.belongsTo(Users,
        // define foreignKey and constraints
         {
           
          foreignKey :{
            allowNull   : false,
            name : 'user_id',
          },
          foreignKeyConstraint : true,
          onDelete : 'CASCADE',
          onUpdate : 'CASCADE'
          })
    }
  };

  //  define the model attributes
  ActivityLogs.init(
    {
      date_time : {
          type : DataTypes.DATE,
          defaultValue : DataTypes.NOW,
      },
      message : {
          type : DataTypes.STRING,
          allowNull : false
      }
    
    }, 
  {
    // options and constraints
    sequelize,
    modelName: 'ActivityLogs',
    tableName : 'activity_logs',
    timestamps: false,
    underscored : true,
    references: {
      model: 'Users',
      key: 'user_id'
    }, 
    indexes: [{
      fields: ['user_id']
    }]
    

  }); 



  return ActivityLogs;
};
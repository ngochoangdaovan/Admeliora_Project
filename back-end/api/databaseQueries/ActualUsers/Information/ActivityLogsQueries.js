const sequelize = require('sequelize');
const db = require('../../../models')();
const ActivityLogs = db.ActivityLogs;



const ActivitiesQueries =  {};


/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
ActivitiesQueries.addLog = async function(user_id, LogMessage) {
    await ActivityLogs.create(
        {
            message : LogMessage,
            user_id : user_id
        }
    );
}




/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
ActivitiesQueries.getLogs = async function (user_id){
    return await ActivityLogs.findAll(
        {
            where: {user_id: user_id},
            order: [["date_time", "DESC"]],
            attributes: {
                exclude : ['user_id', 'id'],
        }
        }
    );
}




/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/

ActivitiesQueries.deleteLog = async function(user_id, log_id) {
    await ActivityLogs.delete ({
        where : {user_id : user_id, id : log_id}
    })
}


ActivitiesQueries.deleteAll = async function (user_id) {
    await ActivityLogs.destroy ({where : {user_id : user_id}})
}


module.exports = ActivitiesQueries;
const sequelize = require('sequelize');
const db = require('../../../models')();
const ActivityLogs = db.ActivityLogs;



module.exports = new class ActivitiesQueries  {



/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
    async addLog(user_id, LogMessage) {
        await ActivityLogs.create(
            {
                message : LogMessage,
                user_id : user_id
            }
        );
    }




/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
    async getLogs(user_id){
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

    async deleteLog(user_id, log_id) {
        await ActivityLogs.delete ({
            where : {user_id : user_id, id : log_id}
        })
    }


    async deleteAll(user_id) {
        await ActivityLogs.destroy ({where : {user_id : user_id}})
        
    }



};


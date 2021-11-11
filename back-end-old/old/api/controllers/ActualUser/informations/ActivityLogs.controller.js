'use strict';

const db = require('../../../models')();
const ActivityLogModel = db.ActivityLogs;





module.exports = new class ActivityLogs {



    async getLogs(req, res) {
        
        await ActivityLogModel.findAll(
            {
                where: {user_id: req.user.user_id},
                order: [["date_time", "DESC"]],
                attributes: {
                    exclude : ['user_id', 'id'],
            }
            }
        )
        .then(data => responseHandler.sendSuccess(req, res, 200, data))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }


    async deleteLog(req, res) {

        
        await ActivityLogModel.destroy({
            where : {user_id : req.user.user_id, id : req.params.log_id}
        })
        .then(() => responseHandler.sendSuccess(req, res, 200, 'Log deleted successfully'))
        .catch( err => responseHandler.sendFailure(req, res, 400, err))
    }




};




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
        .then ((Logs)=>{
            res.send({
                success : true,
                data : Logs
            })
        })
        .catch (err => res.send({
            success: false,
            message: err.message,
        }))
    }


    async deleteLog(req, res) {

        
        await ActivityLogModel.destroy({
            where : {user_id : req.user.user_id, id : req.params.log_id}
        })
        .then(()=>{
            res.status(200).send({
                success: true,
                message : 'Log deleted successfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                success: false,
                message : err.message
            })

        })
    }




};




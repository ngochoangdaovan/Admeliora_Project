const ActualUsersQueries = require('../../../databaseQueries').ActualUsersQueries
const ActivityLogsQueries = ActualUsersQueries.ActivityLogsQueries




module.exports = new class ActivityLogs {



    async getLogs(req, res) {
        await ActivityLogsQueries.getLogs(req.user.user_id)
        .then ((Logs)=>{
            res.send(Logs)
        })
        .catch (err => res.send(err.message))
    }


    async deleteLog(req, res) {
        await ActivityLogsQueries.deleteLog(req.user.user_id, req.params.log_id)
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




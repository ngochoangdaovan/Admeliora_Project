const ActivityLogsQueries = require('../../../databaseQueries').ActualUsersQueries.ActivityLogsQueries






const ActivityLogs = {};

ActivityLogs.getActivityLogs = async function (req, res) {
    await ActivityLogsQueries.getLogs(req.user.user_id)
    .then ((Logs)=>{
        res.send(Logs)
    })
    .catch (err => res.send(err.message))
}


module.exports = ActivityLogs;
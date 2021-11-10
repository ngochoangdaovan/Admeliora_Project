const express = require('express');
const ActivityLogsRouter = express.Router();
const ActivityLogsController = require('../../../controllers').ActualUserControl.ActivityLogsController
const auth = require('../../../controllers/ActualUser/auth')

// require request log from middleWares
const requestLog = require('../../../middleWares/requestLog')




//http://localhost:5000/api/user/logs 
// get all user's logs
ActivityLogsRouter.get('/', requestLog,  auth.AuthenticateToken, ActivityLogsController.getLogs)

// delete specific log by logs id
// http://localhost:5000/api/user/logs/delete/1
ActivityLogsRouter.delete('/delete/:log_id', requestLog,  auth.AuthenticateToken, ActivityLogsController.deleteLog)



module.exports = ActivityLogsRouter;
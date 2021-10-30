const express = require('express');
const ActivityLogsRouter = express.Router();
const ActivityLogsController = require('../../../controller').ActualUserControl.ActivityLogsController
const auth = require('../../../controller/ActualUser/auth')





ActivityLogsRouter.get('/', auth.AuthenticateToken, ActivityLogsController.getLogs)

ActivityLogsRouter.delete('/delete/:log_id', auth.AuthenticateToken, ActivityLogsController.deleteLog)



module.exports = ActivityLogsRouter;
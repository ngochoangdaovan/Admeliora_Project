const express = require('express');
const ActivityLogsRouter = express.Router();
const ActivityLogsController = require('../../../controller').ActualUserControl.ActivityLogsController
const auth = require('../../../controller/ActualUser/auth')


ActivityLogsRouter.get('/', auth.AuthenticateToken, ActivityLogsController.getActivityLogs)

module.exports = ActivityLogsRouter;
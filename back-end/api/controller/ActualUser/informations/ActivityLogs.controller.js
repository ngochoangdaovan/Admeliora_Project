module.exports = ActivityLogsController = function(DatabaseManipulations) {
    this.db = DatabaseManipulations;
    this.ActivityLogsQueries = DatabaseManipulations.ActivityLogsQueries
}
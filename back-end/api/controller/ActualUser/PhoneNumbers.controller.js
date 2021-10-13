module.exports = PhoneNumbersController = function(DatabaseManipulations) {
    this.db = DatabaseManipulations;
    this.PhoneNumbersQueries = DatabaseManipulations.PhoneNumbersQueries;
}
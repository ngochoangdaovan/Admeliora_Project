module.exports = AddressesController = function(DatabaseManipulations) {
    this.db = DatabaseManipulations;
    this.AddressesQueries = DatabaseManipulations.AddressesQueries
}
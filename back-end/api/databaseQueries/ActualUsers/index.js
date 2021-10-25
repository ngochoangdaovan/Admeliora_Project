'use strict';



module.exports = new class ActualUsers {

    constructor (){
        this.UsersQueries = require('./Information/UsersQueries');
        this.PhoneNumbersQueries = require('./Information/PhoneNumbersQueries');
        this.AddressesQueries = require('./Information/AddressesQueries');
        this.ActivityLogsQueries = require('./Information/ActivityLogsQueries');
    }

}


/* ----------------------------------------------CREATE FUNCTIONS---------------------------------------*/
/* ----------------------------------------------GET FUNCTIONS------------------------------------------*/
/* ----------------------------------------------UPDATE FUNCTIONS---------------------------------------*/
/* ----------------------------------------------DELETE FUNCTIONS---------------------------------------*/




const Customer = require('../models/Customer_info_management')




class User_control {

    async find (req, res){
        var result = await Customer.findAll();
        res.send(result);
    }

    



}

module.exports = new User_control();



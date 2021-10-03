const connector = require('./databaseConnector')



class Customer {

    async getCustomerById(id, callback) {

        var sql = `select * from Customer_information where user_id = '${id}'`
    
        result = await connector(sql, values);
    
    }


    async find(params = {}) {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

};







module.exports = new Customer();

// getInformationsById('456uuyuylsdfa')




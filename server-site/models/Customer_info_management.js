const connector = require('./databaseConnector')



class Customer {

    async findAll (){
        let sql = 'SELECT * FROM  Customer_information';
        const result = await connector.query(sql);
        return result;
    }

    // async find(params = {}) {
    //     let sql = `SELECT * FROM ${this.tableName}`;

    //     if (!Object.keys(params).length) {
    //         return await query(sql);
    //     }

    //     const { columnSet, values } = multipleColumnSet(params)
    //     sql += ` WHERE ${columnSet}`;

    //     return await query(sql, [...values]);
    // }

};







module.exports = new Customer();

// getInformationsById('456uuyuylsdfa')




const mysql = require('mysql');
require('dotenv').config();


class DBConnection {
    constructor() {
        this.db = mysql.createPool(
               {
                   connectionLimit            : 100,
                   host                       : 5000,
                   user                       : "hoangdao",
                   password                   : "Hoangdao@236",
                   database                   : "admeliora"
               } 
            );

        this.checkConnection();
    }

    checkConnection() {
        this.db.getConnection((err, connection) => {
            if (err) {
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.error('Database connection was closed.');
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                    console.error('Database has too many connections.');
                }
                if (err.code === 'ECONNREFUSED') {
                    console.error('Database connection was refused.');
                }
                else{
                    console.log(err.message);
                }
            }
            if (connection) {
                console.log('Database connected')
                connection.release();
            }
            return
        });
    }


    async query(sql) {
        console.log(sql);

        return new Promise((resolve, reject) => {
            this.db.getConnection((err, connection)=>{
                connection.query(sql, (err, result)=>{
    
                    setTimeout(()=>{
                        if (err) {
                            console.log(err.message);
                            return reject(err);
    
                        }
                        return resolve(JSON.parse(JSON.stringify(result)));
                    }, 6000);
                    
                })
            })
        });

    }

}

    // like ENUM
const HttpStatusCodes = Object.freeze({
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
    ER_DUP_ENTRY: 409
});


const test = new DBConnection();


tableName = "users"
sql = `CREATE TABLE IF NOT EXISTS ${tableName} 
( 
       id         INT PRIMARY KEY auto_increment, 
       username   VARCHAR(25) UNIQUE NOT NULL, 
       password   CHAR(60) NOT NULL, 
       first_name VARCHAR(50) NOT NULL, 
       last_name  VARCHAR(50) NOT NULL, 
       email      VARCHAR(100) UNIQUE NOT NULL, 
       role       ENUM('Admin', 'SuperUser') DEFAULT 'SuperUser', 
       age        INT(11) DEFAULT 0 )`

test.query(sql)

module.exports = module.exports = DBConnection;








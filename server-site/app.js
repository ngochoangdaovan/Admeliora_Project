
const express = require('express');
const app = express();
const connectionPool = require('./models/databaseConnector')
const Customer_information = require('./models/Customer_info_management')




const testAsync = async (req, res)=>{
    result = await showout();
    console.log(result);
    res.end(result);
}

const showout = async ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello motherfucker =)))");
            console.log("shit")
        }, 5000)
        
    })
}


app.get ("/", (req, res) => {   

    testAsync(req, res);
    console.log("welcome to the home page")
    res.writeContinue("welcome to the home page");

    

});


app.listen(3000, ()=>{console.log('the server is listening on port 3000')})



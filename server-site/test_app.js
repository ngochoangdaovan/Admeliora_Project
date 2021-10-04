const express = require('express');
const app = express();
const home_router = require('./routes/home')



app.use("/" || "/home", home_router);


app.listen(5000, ()=>{console.log('the server is listening on port 5000')})


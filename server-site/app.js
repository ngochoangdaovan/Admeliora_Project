
const express = require('express');
const app = express();
const home_router = require('./routes/home')
require('dotenv').config()


app.use("/" || "/home", home_router);

port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`the server is listening on port ${port}`);});


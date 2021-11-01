const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');



const router = require('./api/routes')
const bodyParser = require('body-parser');



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())



app.use(router)


port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`the server is listening on port ${port}`);});



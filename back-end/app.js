
const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config()



const router = require('./api/routes')
const bodyParser = require('body-parser');
// console.log(bodyParser)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())



app.use(router)



port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`the server is listening on port ${port}`);});





















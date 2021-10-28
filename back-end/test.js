const express = require('express');
require('dotenv').config();
const productUpload = require('./api/middleWares/imageHandler/productImg')
const fs = require('fs');



// const router = require('./api/routes')
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())







app.post('/upload', productUpload.single('product'), (req, res) => {
    console.log(req.file.path.slice(5))
    res.send('sheet you made it')
})

// app.get('/images', async (req, res) => {

    

// })




port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`the server is listening on port ${port}`);});



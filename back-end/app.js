
const express = require('express');
const app = express();
const fs = require('fs');
// const home_router = require('./api/routes/home')
require('dotenv').config()



// count = 0;
// app.use("/" || "/home", home_router);



// const waiting = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello")
//     }, 10000)
//   })
  
// }


// const sum = async (length) => {
//   return new Promise((resolve) => {
//       let sum = 0;
//       for (let i = 0; i < length; i++) {
//         sum += i*10;
//       };
//       resolve(sum)})
// }

app.get('/phone/:phoneID&:userID', async (req, res) => {
//   console.log('home')
//   let a = await waiting();

  let phoneID = req.params.phoneID;
  let userID = req.params.userID;
  console.log(phoneID, userID);

  res.send(''+ phoneID +'    '+ userID);
//   console.log(a);
});

// app.get('/sum/:length', async (req, res) => {

//   console.log("sum"+ req.params.length)
//   let a = await sum(req.params.length);
//   res.send(""+a);
// });

// const read = (filename) => {

//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err.message)
//       };
//       resolve(data);

//     })
//   })
// }


// app.get('/api/:filename', async (req, res) =>{
//     console.log("reading ... "+ req.params.filename)
//     let restult = await read("/home/hoangdao/Web-Programming/Admeliora_Project/server-site/IOtest/" + req.params.filename);
//     res.send(restult);
// })




port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`the server is listening on port ${port}`);});





















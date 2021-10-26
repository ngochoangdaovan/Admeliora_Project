const fs = require('fs');
const path = require('path');
const test = require('./imageConverter');
const img2Bs64 = require('image-to-base64')

// const data = fs.readFileSync(path.join(__dirname, './237177702_134799922109620_6297715369243153163_n.jpg'), 'base64');

// let buff = new Buffer(data, 'base64');
// fs.writeFileSync('stack-abuse-logo-out.png', buff);

// fs.readFileSync('../Admeliora_Project/back-end/ImageData/product_image/161233812_2955776141316826_3999180324485542688_n.jpg')



// console.log(fs.readFileSync(path.resolve('../../ImageData/product_image/161233812_2955776141316826_3999180324485542688_n.jpg')))
let text = path.join(path.resolve('../../ImageData/product_image/'), '161233812_2955776141316826_3999180324485542688_n.jpg')
let bs64 = test.readImage(text);
bs64.then((img) => {
    test.writeImage('12345678912345.jpg','product', img);
})
// test.writeImage('123456789.jpg','product', bs64);

// let a = img2Bs64(text)
// .then((img) => {
//     return img
// })

// a.then((img)=>(console.log(img)))
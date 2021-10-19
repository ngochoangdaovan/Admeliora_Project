const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'ee3d4490bdfe42a01bef.jpg'), 'base64');

let buff = new Buffer(data, 'base64');
fs.writeFileSync('stack-abuse-logo-out.png', buff);





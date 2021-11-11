fs = require('fs');
fs.appendFile('./logs/access.log', '\n Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('/logs/access.log');
});
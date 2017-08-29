var fs = require("fs");

exports.printToFile = function(text) {

  fs.appendFile('log.csv', '"' + text + '",', function(err) {
    if (err) {
      return console.log(err);
    }
  })

  console.log(text);
}

exports.endCurrentCommand = function() {
  fs.appendFile("log.csv", "\r\n", function(err) {
    if(err) {
      return console.log(err);
    }
  })
}
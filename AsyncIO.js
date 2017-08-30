
//My Solution


var fs = require("fs");
var myNumber = undefined;
var count = 0;

fs.readFile(process.argv[2], readTheFile);

function readTheFile(err, data){
    if(err) return console.error(err);
    
    myNumber =(data);
    const buf = new Buffer(myNumber);
    for (var value of buf.values()) {
    
    if(value==10){
      count++;
    }
}

console.log(count);
    
}



/* //Official Solution
var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/

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

//learnyounode
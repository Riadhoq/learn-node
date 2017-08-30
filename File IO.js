
var fs = require("fs");

var count = 0;

var arr = fs.readFileSync(process.argv[2]);

const buf = new Buffer(arr);
for (var value of buf.values()) {
    
  if(value==10){
      count++;
  }
}

console.log(count);
//learnyounode

var fs = require("fs");

var myNumber;

fs.readdir(process.argv[2], readTheFile);

 process.argv[3]='.'+process.argv[3];

function readTheFile(err, data){
    if(err) return console.error(err);
    
    
    var  string = "" + data;
    for (var i = 0 ; i< data.length; i++) {
      
     
      
    if(data[i].substr(-3)==process.argv[3])
    console.log(data[i]);
    }
}

  

//learnyounode
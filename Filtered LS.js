//my solution;
var fs = require("fs");

fs.readdir(process.argv[2], readTheFile);

 process.argv[3]='.'+process.argv[3];

function readTheFile(err, data){
    if(err) return console.error(err);
    
    for (var i = 0 ; i< data.length; i++) {
    if(data[i].substr(-3)==process.argv[3])
    console.log(data[i]);
    }
}


/* official solution
    var fs = require('fs')
    var path = require('path')
    
    var folder = process.argv[2]
    var ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
    
    */
var express = require("express");
var fs = require("fs");

console.log("Hello World");

//Initial express app
var app = express();
app.engine('html', require('ejs').renderFile);

//Initial all the modules in the module directory
var files = fs.readdirSync("./modules/");
for(var i = 0; i < files.length; i++){
    if(files[i] != 'module_template'){
        var module = require('./modules/' + files[i]);
        module(app);
    }
}


var port = 3000;
app.listen(port);
console.log("Listening on port " + port);
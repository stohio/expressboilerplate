var express = require('express');
var router = require('./server/routes');


module.exports = function(app){
    app.core = {};
    app.core.dirname = __dirname;
    //Set routes for the HTML you want to server
    app.use('/core', express.static(__dirname + '/public/assets'));
    //Initialize the routes
    router(app);
    
    console.log("Core Module Initialized!");
}
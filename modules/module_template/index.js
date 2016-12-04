var express = require('express');
var router = require('./server/routes');


module.exports = function(app){
    app.core = {};
    app.core.dirname = __dirname;
    //Set routes for the HTML you want to server
    app.use('/template', express.static(__dirname + '/public/assets'));
    //Initialize the routes
    router(app);
    
    console.log("Template Module Initialized!");
}
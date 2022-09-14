/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Krish Harshadkumar patel Student ID: 123898215 Date: 2022/09/14
*
*  Cyclic Web App URL: https://purple-rhinoceros-tam.cyclic.app/
*
*  GitHub Repository URL: https://github.com/krishdoesit/Helloworld
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Krish Patel - 123898215");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
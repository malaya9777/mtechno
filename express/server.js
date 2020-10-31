'use strict';
var express = require('express');
const serverless = require('serverless-http');

const router = express.Router();

var app = express();
app.use(express.static(__dirname+'/public'));

app.use('/.netlify/functions/server', router)
app.get('*', function (req, res) {    
    res.sendFile(__dirname+'/public/index.html')
});
module.exports = app;
module.exports.handler = serverless(app);
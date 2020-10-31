'use strict';
const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const router = express.Router();

var app = express();
app.use(express.static(path.join(__dirname,'../public')));

app.use('/.netlify/functions/server', router)
app.get('*', function (req, res) {    
    res.sendFile(path.join(__dirname,'../public/index.html'));
});
module.exports = app;
module.exports.handler = serverless(app);
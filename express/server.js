'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname,'../public')));
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

module.exports = app;
module.exports.handler = serverless(app);

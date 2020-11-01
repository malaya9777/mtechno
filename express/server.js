'use strict';
const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const router = express.Router();
const app = express();


app.use('/.netlify/functions/server', router);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
module.exports = app;
module.exports.handler = serverless(app);
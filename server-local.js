'use strict';

const express = require('express');
const app = express();
const d_router = require('./express/server');

app.use('',d_router);




app.listen(3000, () => console.log('Local app listening on port 3000!'));

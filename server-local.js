const express = require('express');
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const app = express();
const path = require('path')

//set view
app.use(expressLayouts);
app.engine('html',ejs.renderFile);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'./views'))

const d_router = require('./express/server');

app.use('',d_router);




app.listen(3000, () => console.log('Local app listening on port 3000!'));

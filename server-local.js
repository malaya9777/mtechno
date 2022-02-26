const express = require('express');
const layouts = require('express-ejs-layouts');
const path = require('path');
const ejs = require('ejs')
const app = express();

app.engine('html', ejs.renderFile);
app.use(layouts);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'public/views'));
app.use('/css', express.static(__dirname+'public/css'));
app.use('/img', express.static(__dirname+'public/img'));
app.use('/assests', express.static(__dirname+'public/assests'));
app.use('/js', express.static(__dirname+'public/js'));

app.set('layout', 'layout/layout.ejs');

app.get('/', async(req, res)=>{
    res.render('home');
});

app.get('/about', async(req, res)=>{
    res.render('about');
});
app.get('/contact', async(req, res)=>{
    res.render('contact');
});

app.get('/services/website', async(req, res)=>{
    res.render('services_web');
});
app.get('/services/software', async(req, res)=>{
    res.render('services_software');
});
app.get('/services/pc', async(req, res)=>{
    res.render('services_pc');
});
app.get('/services/graphic', async(req, res)=>{
    res.render('services_graphic');
});
app.get('/services/advertisement', async(req, res)=>{
    res.render('services_advertisement');
});
app.get('/services/datadigitization', async(req, res)=>{
    res.render('services_data');
});
let p
let port = process.env.port || 3000;
app.listen(port, () => console.log(`Local app listening on port ${port}!`));
 
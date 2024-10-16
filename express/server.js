const express = require('express');
const path = require('path');
const router = express.Router();


router.use('/assests', express.static(path.join(__dirname,'../public/assests')));
router.use('/css', express.static(path.join(__dirname,'../public/css')));
router.use('/items', express.static(path.join(__dirname,'../public/items')));
router.use('/js', express.static(path.join(__dirname,'../public/js')));
router.use('/fonts', express.static(path.join(__dirname, "../public/fonts")))

router.get('/', async(req, res) => {
    res.render('home',{layout:'container/index',data:{active:'home'}})
});

router.get('/bio', async(req, res)=>{
    res.render('bio',{layout:'container/index',data:{active:'bio'}})
});

router.get('/contact', async(req, res)=>{
    res.render('contact',{layout:'container/index',data:{active:'contact'}})
});

module.exports = router;


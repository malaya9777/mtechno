'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();


router.use(express.static(path.join(__dirname,'../public')));
router.use('/', async(req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    console.log('test')

});
router.use('/bio', async(req, res)=>{
    res.send('bio');
    console.log('bio reached')

})
router.use('/contact', async(req, res)=>{res.send('contact')})

module.exports = router;


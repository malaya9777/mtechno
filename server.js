var express = require('express');

var app = express();
app.use(express.static(__dirname+'/public'));

app.get('*', function (req, res) {    
    res.sendFile(__dirname+'/public/index.html')
});
let envPort = 5000;
app.listen(envPort);
console.log(envPort)


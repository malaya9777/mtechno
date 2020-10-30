var express = require('express');

var app = express();
app.use(express.static(__dirname+'/public'));

app.get('*', function (req, res) {    
    res.sendFile(__dirname+'/public/index.html')
});
let envPort = process.env.PORT;
<<<<<<< HEAD
app.listen(5000);
=======
app.listen(3000);
>>>>>>> f66647a743dd6dda88bd8874884f89e2d126e8d7

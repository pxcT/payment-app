var express = require('express');
var app = express();

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/payment', function (req, res) {
    res.end(req.body);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

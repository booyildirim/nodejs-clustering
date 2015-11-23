var express = require('express');
var app = express();


app.get('/', function (req, res) {
    for(i=0; i< 5000000; i++) {
        // dummy loop to simulate real life connections
    }
    res.send('got response!');
});

// Bind to a port
app.listen(3000);
var cluster = require('cluster');

if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
} else {

    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
        for(i=0; i< 5000000; i++) {
            // dummy loop to simulate real life connections
        }
        res.send('got response!');
    });

    app.listen(3000);

}
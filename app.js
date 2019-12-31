let express = require('express');
let app = express();
let server = require('http').createServer(app);
let cpuStat = require('cpu-stat');
let bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));//
app.use(express.static(__dirname + '/static'));

app.all('*', function (req, res, next) {
    req.timeOrigin = new Date().getTime();
    // console.log(req);
    next();
});

/**
 * 启动服务：
 */
server.listen('9090', function () {
    console.log("server start:9090...");
    console.log(__dirname);
});

module.exports = app;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Welcome to spp custom app page" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Great!, It works! You are on will-page" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! You are on ready-page" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;

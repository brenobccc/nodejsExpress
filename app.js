
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;//Códig
    res.setHeader('Content-Type', 'application/json');
    res.end("It's working as usual");
})


app.get('/teste', (req, res) => {
    res.statusCode = 200;//Códig
    res.setHeader('Content-Type', 'application/json');
    res.end(" Testando aplicação");
})



var server = app.listen(3000, function () {
    var host = "127.0.0.1";
    var port = "3000";

    console.log("Example app listening at http://%s:%s", host, port)
 })



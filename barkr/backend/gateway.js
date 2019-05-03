const express = require('express');
const server = require('http');
const httpProxy = require('http-proxy');

const app = express();
const appServer = server.createServer(app);
const apiProxy = httpProxy.createProxyServer(app);

// backend micro-service
app.all(`/api*`, (req, res) => {
    apiProxy.web(req, res, {
        target: `http://localhost:5000`
    })
});

// frontend micro-service
app.all(`/*`, (req, res) => {
    apiProxy.web(req, res, {
        target: `http://localhost:3000`
    });
});

apiProxy.on(`error`, (err, req, res) => {
    console.error(err);
    res.status(500).send(`Proxy down...`);
});

appServer.listen(4000);
console.log(`Gateway running...`);

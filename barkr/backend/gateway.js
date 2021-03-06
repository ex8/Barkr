const express = require('express');
const server = require('http');
const httpProxy = require('http-proxy');

// PORTS
// FRONTEND -> 3000
// WEBSOCKET -> 3030
// GATEWAY -> 4000
// BACKEND -> 5000

const app = express();
const appServer = server.createServer(app);
const apiProxy = httpProxy.createProxyServer(app);

const wsProxy = httpProxy.createProxyServer({
    target: process.env.WEBSOCKET_HOST || `http://localhost:3030`,
    ws: true
});

// backend micro-service
app.all(`/api*`, (req, res) => {
    apiProxy.web(req, res, {
        target: process.env.BACKEND_HOST || `http://localhost:5000`
    })
});

// websocket micro-service
app.all(`/websocket*`, (req, res) => {
    apiProxy.web(req, res, {
        target: process.env.WEBSOCKET_HOST || `http://localhost:3030/websocket`
    });
});

appServer.on(`upgrade`, (req, socket, head) => {
    wsProxy.ws(req, socket, head);
});

// frontend micro-service
app.all(`/*`, (req, res) => {
    apiProxy.web(req, res, {
        target: process.env.FRONTEND_HOST || `http://localhost:3000`
    });
});

// error handling
apiProxy.on(`error`, (err, req, res) => {
    console.error(err);
    res.status(500).send(`Proxy down...`);
});

wsProxy.on(`error`, (err, req, socket) => {
    console.error(err);
    console.log(`Websocket down...`);
    socket.end();
});

appServer.listen(4000);
console.log(`Gateway running...`);

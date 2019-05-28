const WebSocket = require('ws');
const redis = require('redis');
const client = redis.createClient({host: process.env.REDIS_HOST || 'localhost'});

const wss = new WebSocket.Server({port: 3030});

wss.on(`connection`, ws => {
    ws.on(`message`, data => {
        wss.clients.forEach(c => {
            if (c !== ws && c.readyState === WebSocket.OPEN) {
                c.send(data);
            }
        });
    });
});

client.on(`message`, (channel, message) => {
    wss.clients.forEach(c => c.send(message));
});

client.subscribe(`publish`);
const WebSocket = require('ws');

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

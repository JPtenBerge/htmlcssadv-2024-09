import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

let clients = [];
wss.on("connection", (ws) => {
  clients.push(ws);
  ws.on("error", console.error);

  ws.on("message", (data) => {
    console.log('data:', data);
    clients.forEach((c) => c.send(data, { binary: false }));
  });
});
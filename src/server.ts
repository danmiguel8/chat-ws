import WebSocket = require("ws");

const wss = new WebSocket.WebSocketServer({ port: 8080 });
console.log("Serveur WebSocket sur ws://localhost:8080");

wss.on("connection", (socket, req) => {
  console.log("Client connecté :", req.socket.remoteAddress);

  socket.on("message", (data) => {
    const text = data.toString();
    console.log("Reçu :", text);
    socket.send(`écho : ${text}`);
  });

  socket.on("close", (code, reason) => {
    console.log("Client déconnecté", code, reason.toString());
  });

  socket.on("error", (err) => console.error("Erreur socket :", err));
});
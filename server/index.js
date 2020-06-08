const socketio = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const router = express.Router();
const server = http.createServer(app);
const io = socketio(server);
const PORT = 5000;

router.get("/", (req, res) => {
  res.send("Server");
});

app.use(router);

server.listen(PORT, () => {
  console.log("Server is running");
});

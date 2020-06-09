const socketio = require("socket.io");
const http = require("http");
const express = require("express");
const router = require("./router");
const {
  addUser,
  removeUser,
  getUsersInRoom,
  getUser,
} = require("./utils/users");
const PORT = 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback(error);
    }

    socket.emit("message", { user: "admin", text: "Welcome to this room" });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has just joined!`,
    });

    socket.join(user.room);
    io.to(user.room).emit("roomDetails", {
      room: user.room,
      members: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomDetails", {
      room: user.room,
      members: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.name).emit("message", {
        user: "admin",
        text: `${user.name} has left the room`,
      });
    }
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log("Server is running");
});

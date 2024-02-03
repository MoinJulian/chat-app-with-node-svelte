//setup express server
import express from "express";
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
});

// serve frontend
app.use(express.static("client/dist"));

// setup socket.io
import { Server } from "socket.io";
const io = new Server<
  client_to_server_events,
  server_to_client_events,
  inter_server_events,
  socket_data
>(server);

// list of users
let users: user[] = [];

// handle socket events
io.on("connection", (socket) => {
  //handle login
  socket.on("login", (name) => {
    socket.data.name = name;

    users.push({
      name: name,
      id: socket.id,
    });

    io.emit("users", users);
    socket.emit("message", {
      text: `Welcome, ${name}`,
      bot: true,
    });

    io.emit("message", {
      text: `${name} has entered the chat!`,
      bot: true,
    });
  });

  // forward messages
  socket.on("message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    users = users.filter((u) => u.id !== socket.id);
    io.emit("users", users);
    io.emit("message", {
      text: `${socket.data.name} has left the chat!`,
      bot: true,
    });
  });
});

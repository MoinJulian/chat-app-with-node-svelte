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

io.on("connection", (socket) => {
  socket.on("login", (name) => {
    socket.emit("message", {
      text: `Welcome, ${name}`,
      bot: true,
    });
    io.emit("message", {
      text: `${name} has entered the chat!`,
      bot: true,
    });
  });

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

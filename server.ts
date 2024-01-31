//setup express server
import express from "express";
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
});

// serve frontend
app.use(express.static("client/dist"));

type user_message = {
  user_name: string;
  text: string;
  bot: false;
};

type bot_message = {
  text: string;
  bot: true;
};

type message = user_message | bot_message;

type client_to_server_events = {
  message: (m: message) => void;
};

type server_to_client_events = {
  message: (m: message) => void;
};

type inter_server_events = {};

type socket_data = {};

// setup socket.io
import { Server } from "socket.io";
const io = new Server<
  client_to_server_events,
  server_to_client_events,
  inter_server_events,
  socket_data
>(server);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

import express from "express";
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log("Server is listening on PORT", PORT);
});
app.use(express.static("client/dist"));
import { Server } from "socket.io";
const io = new Server(server);
io.on("connection", (socket) => {
    socket.on("login", (name) => {
        socket.data.name = name;
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
    socket.on("disconnect", () => {
        io.emit("message", {
            text: `${socket.data.name} has left the chat!`,
            bot: true,
        });
    });
});

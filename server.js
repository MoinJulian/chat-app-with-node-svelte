import express from "express";
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log("Server is listening on PORT", PORT);
});
app.use(express.static("client/dist"));
import { Server } from "socket.io";
const io = new Server(server);
let users = [];
io.on("connection", (socket) => {
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
    socket.on("disconnect", () => {
        users = users.filter((u) => u.id !== socket.id);
        io.emit("users", users);
        io.emit("message", {
            text: `${socket.data.name} has left the chat!`,
            bot: true,
        });
    });
});

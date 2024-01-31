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
    console.log(socket.id);
    socket.on("message", (msg) => {
        io.emit("message", msg);
    });
});

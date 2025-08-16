import { Server } from "socket.io";

const io = new Server({ cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("message", (msg) => {
    console.log("Message received: " + msg);
    io.emit("message", msg); // Broadcast the message to all connected clients
  });
});

io.listen(3000);

console.log("Socket.IO server is running on port 3000");

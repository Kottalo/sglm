import { Server } from "socket.io";
import { PrismaClient } from "../generated/prisma/client"; // Adjust the import path as necessary

const prisma = new PrismaClient().$extends({
  query: {
    item: {
      async create({ args, query }) {
        const result = await query(args);
        console.log("📈 Item created");
        return result;
      },
      async update({ args, query }) {
        const result = await query(args);
        console.log("📈 Item created");
        return result;
      },
      async delete({ args, query }) {
        const result = await query(args);
        console.log("📈 Item created");
        return result;
      },
    },
  },
});

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

  socket.on("update-stocks", (data) => {
    console.log("Stocks updated: ", data);
    io.emit("stocks-updated", data); // Notify all clients about the stock update
  });
});

io.listen(3000);

console.log("Socket.IO server is running on port 3000");

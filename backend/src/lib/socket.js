import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

const allowedOrigins = [
  ENV.CLIENT_URL,
  "https://chatify-lovat-five.vercel.app",
  "https://chatify-namanindorias-projects.vercel.app"
].filter(Boolean);
const devOrigins = ["http://localhost:5173", "http://localhost:3000"];
const corsOrigins = [...new Set([...allowedOrigins, ...devOrigins])];

const io = new Server(server, {
  cors: {
    origin: corsOrigins,
    credentials: true,
  },
});

// we will use this function to check if the user is online or not
export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// apply authentication middleware to all socket connections
io.use(socketAuthMiddleware);

// this is for storig online users
const userSocketMap = {}; // {userId:socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.user.fullName);

  const userId = socket.userId;
  userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // with socket.on we listen for events from clients
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.user.fullName);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };

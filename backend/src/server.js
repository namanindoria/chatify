import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from "cors";


import messageRoutes from './routes/message.route.js';
import authRoutes from  './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';
import { app, server } from './lib/socket.js';
const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;


const allowedOrigins = [
  ENV.CLIENT_URL,
  "https://chatify-lovat-five.vercel.app",
  "https://chatify-namanindorias-projects.vercel.app"
].filter(Boolean);
const devOrigins = ["http://localhost:5173", "http://localhost:3000"];
const corsOrigins = [...new Set([...allowedOrigins, ...devOrigins])];

const checkCorsOrigin = (origin, callback) => {
  if (!origin) return callback(null, true);
  const isAllowed = corsOrigins.includes(origin) ||
    /^http:\/\/localhost(:\d+)?$/.test(origin) ||
    /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin) ||
    /^http:\/\/(192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)(:\d+)?$/.test(origin);
  if (isAllowed) {
    callback(null, true);
  } else {
    callback(new Error("Not allowed by CORS"));
  }
};

app.use(express.json({ limit: "5mb" }));
app.use(cors({ origin: checkCorsOrigin, credentials: true }));
app.use(cookieParser());

app.use("/api/auth",  authRoutes);
app.use("/api/messages", messageRoutes);

// API Health check / welcome route
app.get("/", (_, res) => {
  res.json({ status: "ok", message: "Chatify API is running" });
});

server.listen(PORT, () => {
  console.log('Server is running on port '  + PORT);
  connectDB();    
});

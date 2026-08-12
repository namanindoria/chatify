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


app.use(express.json({ limit: "5mb" }));
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
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

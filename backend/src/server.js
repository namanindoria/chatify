import express from 'express';  
import dotenv from 'dotenv';
import messageRoutes from './routes/message.route.js';
import authRoutes from  './routes/auth.route.js';

dotenv.config();
console.log(process.env.PORT);
const app = express();
// console.log(ProcessingInstruction.env.PORT);
const PORT = process.env.PORT || 3000;

app.use("/api/auth",  authRoutes);

app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port '  + PORT);
});
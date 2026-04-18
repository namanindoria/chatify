import express from "express";
const router = express.Router();
import { signup } from "../controllers/authcontroller.js";
router.post('/signup', signup);
router.get('/login', (req, res) => {
  res.send('Hello World!');
});
router.get('/logout', (req, res) => {
  res.send('Hello World!');
});
export default router;
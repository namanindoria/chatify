import express from "express";
const router = express.Router();
router.post("/send", (req, res) => {
  res.send("Message sent!");
});
router.get("/receive", (req, res) => {
  console.log("Message received!");
  res.send("Message received!");
});
export default router;
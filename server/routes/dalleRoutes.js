import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();
const openai = new OpenAI();

router.get("/", async (req, res) => {
  res.send("Hello dalle");
});

export default router;
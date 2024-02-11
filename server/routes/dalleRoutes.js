import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();
const openai = new OpenAI();

router.get("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      model: "dall-e-2", 
      prompt: prompt, 
      response_format: 'b64_json' 
    });
    const image = aiResponse.data[0].base64;

    res.status(200).json({ photo: image });

  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const OpenAI = require("openai");
require("dotenv").config();
app.listen(3000,()=>{
   console.log("Server is Listen On An Port 3000");
})

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OpenRouter_API_KEY
});

async function askAI() {

    const response = await client.chat.completions.create({
   model: "openrouter/free",
    messages: [
        {
            role: "user",
            content: "Advantages of Node.js"
        }
    ]
});

console.log(response.choices[0].message.content);
}

askAI();
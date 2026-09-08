const express = require("express");
const app = express();
const mongoose = require("mongoose");
const OpenAI = require("openai");
const threadModel = require("./models/thread");
const chatModel = require("./models/chat");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000,()=>{
   console.log("Server is Listen On An Port 3000");
})

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OpenRouter_API_KEY
});
app.post("/getReply",async(req,resp)=>{
   const response = await client.chat.completions.create({
   model: "openrouter/free",
    messages: [
        {
            role: "user",
            content: `${req.body.msg}`
        }
    ]
});
resp.send(response.choices[0].message.content);
})

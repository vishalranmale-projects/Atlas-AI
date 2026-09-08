const OpenAI = require("openai");
require("dotenv").config();
const openAiResponce = async(msg)=>{
    const client = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OpenRouter_API_KEY
    });
const response = await client.chat.completions.create({
   model: "openrouter/free",
    messages: [
        {
            role: "user",
            content: `${msg}`
        }
    ]
});
 return response.choices[0].message.content;
}

module.exports = openAiResponce;

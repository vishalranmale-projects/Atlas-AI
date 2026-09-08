const express = require("express");
const app = express();
const mongoose = require("mongoose");
const AiModel = require("./utils/OpenAi");
const threadModel = require("./models/thread");
const chatModel = require("./models/chat");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000,()=>{
   console.log("Server is Listen On An Port 3000");
})

async function test(){
  console.log( await AiModel("Thanks"));
}
test();


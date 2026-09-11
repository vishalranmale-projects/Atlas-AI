const express = require("express");
const app = express();
const mongoose = require("mongoose");
const AiModel = require("./utils/OpenAi");
const threadModel = require("./models/thread");
const chatModel = require("./models/chat");
const chatRoutes = require("./routes/chat");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.listen(3000,()=>{
   console.log("Server is Listen On An Port 3000");
})
mongoose.connect(`${process.env.MongoDBURL}`).then(()=>{
    console.log("Connected To An Databace");
})
app.use("/chats",chatRoutes);


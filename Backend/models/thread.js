const mongoose = require("mongoose");

let threadSchema =new  mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:"New Chat"
    },
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    },
    chats:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "chatModel",
            required:true
        }
    ]
});

let threadModel =  mongoose.model("threadModel",threadSchema);
module.exports = threadModel;

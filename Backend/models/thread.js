const mongoose = require("mongoose");

let threadSchema =new  mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:"New Chat"
    },
    createdAt:{
        type:Date,
       default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    chats:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "chatModel",
        }
    ]
});

let threadModel =  mongoose.model("threadModel",threadSchema);
module.exports = threadModel;

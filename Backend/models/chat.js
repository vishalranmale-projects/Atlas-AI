const mongoose = require("mongoose");

let chatSchema = new mongoose.Schema({
    role:{
        type:String,
        enum:["user","assistant"],
        required:true
    },
    content:{
        type:String,
        required:true

    },
    timestamp:{
        type:Date,
        default:Date.now
    }
});

let chatModel =  mongoose.model("chatmodel",chatSchema);
module.exports = chatModel;
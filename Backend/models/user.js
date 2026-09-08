const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    email_id:{
        type:String
    },
    threads:[{
         type: mongoose.Schema.Types.ObjectId,
         ref: "threadModel",
         required:true
    }]
})
const express = require("express");
const router = express.Router();
const threadModel = require("../models/thread");
// Route To Access An All the Threads
router.get("/threads",async(req,resp)=>{
    try{
   let allthreads = await threadModel.find({}).sort({updatedAt:-1});
   resp.send({allthreads});
    }
    catch(err){
        resp.send("Failed To fetch An Threads!");
    }
})
// Routes To Access An Particular Thread According To An id
router.get("/threads/:thread_id",async (req,resp)=>{
    let id = req.params.thread_id;
    try{
    let thread = await threadModel.findById(id);
    if(!thread){
        resp.status(404).send("Thread Was Not Found! Enter An Valid Thread_ID");
    }
     resp.send(thread);
    }
    catch(err){
        resp.send(err);
    }
})
// Route to delete An Particular Thread
router.delete("/threads/:thread_id",async(req,resp)=>{
    try{
   let id = req.params.thread_id;
   let thread=threadModel.findByIdAndDelete(id);
   if(!thread){
    resp.status(404).send("Thread To Be Delete Are Not Found Please Enter An Valid Thread!");
   }
    }
    catch(err){
        resp.send(err);
    }
    resp.send("Thread Was Deleted!");
})
    
module.exports = router;
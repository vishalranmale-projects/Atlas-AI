const express = require("express");
const router = express.Router();
const threadModel = require("../models/thread");
const chatModel = require("../models/chat");
const chatgpt = require("../utils/OpenAi");
// Route To Access An All the Threads
router.get("/threads", async (req, resp) => {
  try {
    let allthreads = await threadModel.find({}).sort({ updatedAt: -1 });
    resp.send({ allthreads });
  } catch (err) {
    resp.send("Failed To fetch An Threads!");
  }
});
// Routes To Access An Particular Thread According To An id
router.get("/threads/:thread_id", async (req, resp) => {
  let id = req.params.thread_id;
  try {
    let thread = await threadModel.findById(id).populate("chats");
    if (!thread) {
     return resp.status(404).send("Thread Was Not Found! Enter An Valid Thread_ID");
    }
    resp.send(thread);
  } catch (err) {
    resp.send(err);
  }
});
// Route to delete An Particular Thread
router.delete("/threads/:thread_id", async (req, resp) => {
  try {
    let id = req.params.thread_id;
    let thread = threadModel.findByIdAndDelete(id);
    if (!thread) {
      resp
        .status(404)
        .send(
          "Thread To Be Delete Are Not Found Please Enter An Valid Thread!",
        );
    }
  } catch (err) {
    resp.send(err);
  }
  resp.send("Thread Was Deleted!");
});

router.post("/chat", async (req, resp) => {
  try {
    let thread;
    let { thread_id, message } = req.body;
    if (!message) {
      resp.status(404).send("Please Enter An Required Fields!");
    }
    if (!thread_id) {
      // if An Thread Id Not given it Means It is An New Chat
      let newThread = new threadModel({
        title: message,
      });
      let newChat = new chatModel({
        content: message,
        role: "user",
      });
      newThread.chats.push(newChat._id);
      newThread.title = message;
      await newThread.save();
      await newChat.save();
      thread = newThread;
    }
    if (thread_id) {
      // fetch An thread First
      let thread2 = await threadModel.findById(thread_id);
      if (!thread2) {
        resp.status(404).send("Enter An Valid Thread_ID!");
      } else {
        // Now Both Are Present
        let chat1 = new chatModel({
          role: "user",
          content: message,
        });
        await thread2.chats.push(chat1._id);
        thread2.save();
        await chat1.save();
        thread = thread2;
      }
    }
    let responce = await chatgpt(message);
    let chat2 = new chatModel({
      role: "assistant",
      content: responce,
    });
    await thread.chats.push(chat2._id);
    thread.updatedAt = new Date();
    thread.save();
    chat2.save();
    resp.send(responce);
  } catch (err) {
    resp.status(404).send(err);
  }
});

module.exports = router;

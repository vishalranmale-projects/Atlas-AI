import "../public/App.css";
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./chatwindow.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Threads, setThreads] = useState([]);
  const [Chats, SetChats] = useState([]);
  const [newChat, SetnewChat] = useState(true);
  const [LatestReplay, setLatestReplay] = useState();
  const [currthreadId, setthreadId] = useState();

  async function fetchthreads() {
    let allThreads = await axios.get("http://localhost:3000/chats/threads");
    setThreads(() => {
      return allThreads.data.allthreads;
    });
    return allThreads.data.allthreads;
  }

  // Function To Fetch An Thread Data According To An Thread_id
  async function getThreadDetails(Thread_id) {
    await axios
      .get(`http://localhost:3000/chats/threads/${Thread_id}`)
      .then((responce) => {
        console.log(responce.data.chats);
        SetChats(responce.data.chats);
        SetnewChat(false);
        setLatestReplay(() => {
          return null;
        });
        setthreadId(() => {
          return Thread_id;
        });
      });
  }

  // Function To Delete An Particular Thread
  async function deleteThread(thread_id) {
    const deleteThraed = await axios.delete(
      `http://localhost:3000/chats/threads/${thread_id}`
    );
    if (thread_id == currthreadId) {
      console.log("Same");
      SetnewChat(() => {
        return true;
      });
    }
    fetchthreads();
  }

  const [prompt, setPrompt] = useState();
  const [replay, setReplay] = useState(null);

  useEffect(() => {
    fetchthreads();
    //  if(replay ===null){
    //   setLatestReplay(null);
    //   return;
    //  }
    if (!Chats.length || typeof replay !== "string") return;
    const content = replay.split(" ");
    let idx = 0;
    const interval = setInterval(() => {
      setLatestReplay(() => {
        return content.slice(0, idx + 1).join(" ");
      });
      idx++;
      if (idx >= content.length) clearInterval(interval);
    }, 40);
    return () => {
      clearInterval(interval);
    };
  }, [replay]);

  const [Loading, setLoading] = useState();

  async function getReplay(e) {
    console.log(currthreadId);
    e.preventDefault();
    setPrompt(() => {
      return e.target.clientInput.value;
    });
    console.log(prompt);
    setLoading(() => {
      return true;
    });
    const responce = await axios.post("http://localhost:3000/chats/chat", {
      message: e.target.clientInput.value,
      thread_id: currthreadId,
    });
    console.log(responce.data);
    setReplay(() => {
      return responce.data;
    });
    if (responce) {
      setLoading(() => {
        return false;
      });
      setPrompt(() => {
        return "";
      });
      if (!newChat) {
        getThreadDetails(currthreadId);
      } else {
        const threads = await fetchthreads();

        SetnewChat(() => {
          return false;
        });
        console.log(threads[0]._id);
        getThreadDetails(threads[0]._id);
        setthreadId(threads[0]._id);
      }
    }
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <div
        className="sidebar"
        style={{
          flex: "0 0 20rem",
          width: "20rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <Sidebar
          Threads={Threads}
          setThreads={setThreads}
          fetchthreads={fetchthreads}
          getThreadDetails={getThreadDetails}
          SetnewChat={SetnewChat}
          setthreadId={setthreadId}
          deleteThread={deleteThread}
          currthreadId={currthreadId}
        />
      </div>

      <div
        style={{
          flex: "1 1 0",
          minWidth: 0,
          height: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ChatWindow
          prompt={prompt}
          setPrompt={setPrompt}
          replay={replay}
          setReplay={setReplay}
          currthreadId={currthreadId}
          setthreadId={setthreadId}
          Loading={Loading}
          setLoading={setLoading}
          getReplay={getReplay}
          Chats={Chats}
          newChat={newChat}
          SetnewChat={SetnewChat}
          LatestReplay={LatestReplay}
          setLatestReplay={setLatestReplay}
        />
      </div>
    </div>
  );
}

export default App;
import "../public/App.css";
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./chatwindow.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [Threads, setThreads] = useState([]);
  const [Chats, SetChats] = useState([]);
  const [newChat, SetnewChat] = useState(true);
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
      });
  }

  const [prompt, setPrompt] = useState("");
  const [replay, setReplay] = useState(null);
  useEffect(() => {
    fetchthreads();
  }, [replay]);
  const [currthreadId, setthreadId] = useState(false);
  const [Loading, setLoading] = useState();
  async function getReplay(e) {
    console.log(currthreadId);
    e.preventDefault();
    setPrompt("");
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
      if (!newChat) {
        getThreadDetails(currthreadId);
      } else {
        const threads = await fetchthreads();

        SetnewChat(()=>{
          return false;
        });
        console.log(threads[0]._id);
        getThreadDetails(threads[0]._id);
        setthreadId(threads[0]._id);
      }
    }
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 sidebar" style={{ width: "20rem" }}>
            <Sidebar
              Threads={Threads}
              setThreads={setThreads}
              fetchthreads={fetchthreads}
              getThreadDetails={getThreadDetails}
              SetnewChat={SetnewChat}
              setthreadId={setthreadId}
            ></Sidebar>
          </div>
          <div
            className="col-9"
            style={{ marginRight: "auto", padding: "0px", marginLeft: "0px" }}
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
            ></ChatWindow>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

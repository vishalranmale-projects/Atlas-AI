import "../public/chatwindow.css";
import { useState } from "react";
import axios from "axios";
function ChatWindow() {
  const [prompt, setPrompt] = useState("");
  const [replay, setReplay] = useState(null);
  const [currthreadId, setthreadId] = useState();
  async function getReplay(e) {
    e.preventDefault();
     setPrompt("");
    console.log(e.target.clientInput.value);
   
   await axios.post("http://localhost:3000/chats/chat",{
      message:e.target.clientInput.value,
      thread_id:"6a9ff605f4e6bbfb6c205eef",
    }).then((responce)=>{
      setReplay(()=>{
        return responce.data;
      })
    })
    
  }
  return (
    <>
      <div className="container-fluid chatwindow d-flex flex-column">
        <div className="Nav">
          <div>
            <span style={{ fontSize: "1.8rem" }}>Atlas-AI</span>
            <i className="fa-solid fa-chevron-down ms-2 mb-2"></i>
          </div>
          <div className="d-flex align-items-center gap-4 middle">
            <i class="fa-regular fa-square-plus ms-3"></i>
            <a href="#" style={{ marginLeft: "1rem" }}>
              Get Team
            </a>
          </div>
          <div className="right">
            <div className="ms-auto">
              <a href="#" className="ms-auto">
                <i
                  class="fa-solid fa-arrow-up-from-bracket"
                  style={{ paddingInlineEnd: "9px" }}
                ></i>
                Share
              </a>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
            <div>
              <i className="fa-regular fa-circle-user"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div
            className="col-10 mainArea"
            style={{ textAlign: "center" }}
          ></div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            <form onSubmit={(e) => {
                  getReplay(e)
                }}>
              <input
                className="chatInp"
                placeholder="Ask Anything!"
                value={prompt}
                name="clientInput"
                onChange={(e)=>{
                 setPrompt(e.target.value)
                }}
                
              ></input>
             <button className="btn btn-secondary btn" onSubmit={(e)=>{
              getReplay(e.target.value);
             }}>
               Submit
              </button>
            </form>
          </div>
        </div>

        <div className="mt-auto">
          <div className="row">
            <p style={{ textAlign: "center" }}>
              Atlas-AI Can Make Mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;

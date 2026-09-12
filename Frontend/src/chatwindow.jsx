import "../public/chatwindow.css";
import { useState } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
function ChatWindow({
  prompt,
  setPrompt,
  replay,
  setReplay,
  currthreadId,
  setthreadId,
  Loading,
  setLoading,
  getReplay,
  Chats,
  newChat,
  SetnewChat,
  LatestReplay,
  setLatestReplay,
}) {
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
        <div className="row" style={{height:"15rem"}}>
          <div className="col-1"></div>
          <div className="col-10 mainArea" style={{ textAlign: "center" }}>
            {newChat ? (
              <div>
                <h1>Start A New Chat</h1>
              </div>
            ) : (
              <div className="chats">
                {Chats.slice(0, -1).map((chat) => {
                  return (
                    <div
                      className={chat.role === "user" ? "userDiv" : "gptDiv"}
                    >
                      {chat.role === "user" ? (
                        <p className="userMessage">{chat.content || prompt}</p>
                      ) : (
                        <p className="gptMessage">{chat.content}</p>
                      )}
                    </div>
                  );
                })}
                {Chats.length > 0 && LatestReplay !== null && (
                  <div className="gptDiv">
                    <div className="gptMessage">{LatestReplay}</div>
                  </div>
                 )}
              </div>
            )}
          </div>
          <div className="col-1"></div>
        </div>
         {Loading? <ScaleLoader color="#fff" height={20} width={3}></ScaleLoader>:null}
       
        <div></div>

        <div className="row" style={{ marginTop: "18rem" }}>
          <div className="col-2"></div>
          <div className="col-10">
            <form
              onSubmit={(e) => {
                getReplay(e);
              }}
            >
              <input
                className="chatInp"
                placeholder="Ask Anything!"
                value={prompt}
                name="clientInput"
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
              ></input>
              <button
                className="btn btn-secondary btn"
                onSubmit={(e) => {
                  getReplay(e.target.value);
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="mt-auto m-0 pt-2">
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

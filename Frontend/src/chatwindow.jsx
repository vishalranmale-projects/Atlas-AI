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
  const [isOpened, setisOpned] = useState(false);

  function userDropDown() {
    setisOpned((prev) => !prev);
  }

  function renderChat(chat, index) {
    return (
      <div key={index} className={chat.role === "user" ? "userDiv" : "gptDiv"}>
        {chat.role === "user" ? (
          <p
            className="userMessage"
            style={{
              marginLeft: 0,
              maxWidth: "min(500px, 80%)",
              overflowWrap: "anywhere",
            }}
          >
            {chat.content}
          </p>
        ) : (
          <p className="gptMessage" style={{ overflowWrap: "anywhere" }}>
            {chat.content}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className="chatwindow d-flex flex-column"
      style={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "70rem",
        height: "100%",
        margin: "0 auto",
        padding: "0 1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ---------- Top bar ---------- */}
      <div className="Nav" style={{ margin: "1.5rem 0 0.5rem", flexShrink: 0 }}>
        <div style={{ whiteSpace: "nowrap" }}>
          <span style={{ fontSize: "1.8rem" }}>Atlas-AI</span>
          <i className="fa-solid fa-chevron-down ms-2 mb-2"></i>
        </div>

        <div
          className="d-flex align-items-center middle"
          style={{
            margin: "0 auto",
            width: "auto",
            padding: "0 1rem",
            gap: "0.75rem",
            whiteSpace: "nowrap",
          }}
        >
          <i className="fa-regular fa-square-plus"></i>
          <a href="#">Get Team</a>
        </div>

        <div className="right">
          <div className="ShareNavicons">
            <a href="#">
              <i
                className="fa-solid fa-arrow-up-from-bracket"
                style={{ paddingInlineEnd: "9px" }}
              ></i>
              Share
            </a>
          </div>
          <div className="Navicons">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div
            className="Navicons"
            style={{ cursor: "pointer" }}
            onClick={userDropDown}
          >
            <i className="fa-regular fa-circle-user"></i>
          </div>
        </div>
      </div>

      {/* ---------- Dropdown (anchored to the top-right of the chat window) ---------- */}
      {isOpened ? (
        <div
          className="dropDownDiv"
          style={{
            position: "absolute",
            top: "4.2rem",
            right: "25px",
            margin: 0,
            boxSizing: "border-box",
          }}
        >
          <div className="dopdownitem">
            <a href="#">
              <i className="fa-solid fa-gear"></i>Settings
            </a>
          </div>
          <div className="dopdownitem">
            <a href="#">
              <i className="fa-solid fa-caret-up"></i>Upgrade Plan
            </a>
          </div>
          <div className="dopdownitem">
            <a href="#">
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </a>
          </div>
        </div>
      ) : null}

      {/* ---------- Messages area: takes all remaining height ---------- */}
      <div
        className="mainArea"
        style={{
          flex: "1 1 0",
          minHeight: 0,
          height: "auto",
          width: "100%",
          maxWidth: "55rem",
          margin: "10px auto 0",
          boxSizing: "border-box",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {newChat ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Start A New Chat</h1>
          </div>
        ) : (
          <div
            className="chats"
            style={{
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "800px",
              height: "100%",
              margin: "0 auto",
              padding: "1.5rem 2rem",
              overflowY: "auto",
            }}
          >
            {LatestReplay == null
              ? Chats.map(renderChat)
              : Chats.slice(0, -1).map(renderChat)}

            {Chats.length > 0 && LatestReplay != null && (
              <div className="gptDiv">
                <div className="gptMessage">{LatestReplay}</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ---------- Loader (fixed height so the layout doesn't jump) ---------- */}
      <div
        style={{
          height: "28px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Loading ? (
          <ScaleLoader color="#fff" height={20} width={3}></ScaleLoader>
        ) : null}
      </div>

      {/* ---------- Input ---------- */}
      <form
        style={{
          flexShrink: 0,
          width: "100%",
          maxWidth: "55rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={(e) => {
          getReplay(e);
        }}
      >
        <input
          className="chatInp"
          placeholder="Ask Anything!"
          value={prompt ?? ""}
          name="clientInput"
          autoComplete="off"
          style={{
            boxSizing: "border-box",
            flex: "1 1 auto",
            minWidth: 0,
            maxWidth: "40rem",
            marginTop: 0,
            marginLeft: 0,
            border: "none",
          }}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn btn-secondary"
          style={{ flexShrink: 0, marginTop: 0, border: "none" }}
        >
          Submit
        </button>
      </form>

      {/* ---------- Footer ---------- */}
      <p
        style={{
          flexShrink: 0,
          textAlign: "center",
          margin: 0,
          padding: "0.75rem 0",
          fontSize: "0.85rem",
        }}
      >
        Atlas-AI Can Make Mistakes. Check important info.
      </p>
    </div>
  );
}

export default ChatWindow;

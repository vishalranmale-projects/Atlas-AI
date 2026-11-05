import "../public/Sidebar.css";
import { useState } from "react";

const HOVER_BG = "rgba(255, 255, 255, 0.2)";

// One row of the top menu (New Chat, Images, ...)
function NavItem({ icon, label, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        boxSizing: "border-box",
        width: "calc(100% - 20px)",
        height: "2.4rem",
        margin: "0 10px",
        padding: "0 1rem",
        borderRadius: "10px",
        textDecoration: "none",
        backgroundColor: hover ? HOVER_BG : "transparent",
      }}
    >
      <i className={icon}></i>
      <h4 style={{ margin: "0 0 0 0.5rem", fontSize: "1.1rem" }}>{label}</h4>
    </a>
  );
}

// One row in the chat history list
function HistoryItem({ thread, onOpen, onDelete }) {
  const [hover, setHover] = useState(false);
  const [hoverDelete, setHoverDelete] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onOpen}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        height: "2.2rem",
        margin: "0 0.5rem",
        padding: "0 0.75rem",
        listStyleType: "none",
        cursor: "pointer",
        borderRadius: "10px",
        backgroundColor: hover ? HOVER_BG : "transparent",
      }}
    >
      <span
        title={thread.title}
        style={{
          flex: "1 1 0",
          minWidth: 0,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontSize: "0.95rem",
        }}
      >
        {thread.title}
      </span>
      <i
        className="fa-solid fa-trash"
        onMouseEnter={() => setHoverDelete(true)}
        onMouseLeave={() => setHoverDelete(false)}
        onClick={(e) => {
          e.stopPropagation(); // don't also open the thread
          onDelete();
        }}
        style={{
          flexShrink: 0,
          marginLeft: "0.5rem",
          // visibility (not display) so the row doesn't jump on hover
          visibility: hover ? "visible" : "hidden",
          color: hoverDelete ? "red" : "inherit",
        }}
      ></i>
    </li>
  );
}

function Sidebar({
  Threads,
  setThreads,
  fetchthreads,
  getThreadDetails,
  SetnewChat,
  setthreadId,
  deleteThread,
  currthreadId,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* ---------- Logo row ---------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          margin: "10px",
          padding: "0.8rem 1.2rem",
        }}
      >
        <i className="fa-brands fa-openai" style={{ fontSize: "1.5rem" }}></i>
        <i className="fa-solid fa-bars" style={{ fontSize: "1.5rem" }}></i>
      </div>

      {/* ---------- Menu ---------- */}
      <NavItem
        icon="fa-solid fa-pen-to-square"
        label="New Chat"
        onClick={() => {
          SetnewChat(() => true);
          setthreadId(() => null);
        }}
      />
      <NavItem icon="fa-solid fa-images" label="Images" />
      <NavItem icon="fa-solid fa-book" label="Library" />
      <NavItem icon="fa-regular fa-clock" label="Scheduled" />
      <NavItem icon="fa-solid fa-plug-circle-check" label="Plugins" />
      <NavItem icon="fa-solid fa-code" label="Codex" />
      <NavItem icon="fa-solid fa-ellipsis" label="More" />

      {/* ---------- History: fills all remaining height and scrolls ---------- */}
      <div
        className="History-box"
        style={{
          flex: "1 1 0",
          minHeight: 0,
          width: "100%",
          height: "auto",
          marginTop: "1rem",
          overflowY: "auto",
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}>
          {(Threads || []).map((thread) => (
            <HistoryItem
              key={thread._id}
              thread={thread}
              onOpen={() => {
                getThreadDetails(thread._id);
                setthreadId(() => thread._id);
              }}
              onDelete={() => deleteThread(thread._id)}
            />
          ))}
        </ul>
      </div>

      {/* ---------- Footer ---------- */}
      <div style={{ flexShrink: 0, padding: "0 0 1.5rem" }}>
        <div
          style={{
            borderTop: "2px solid white",
            margin: "0 0.8rem",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          Made By Vishal &nbsp;<i className="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

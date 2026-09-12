import "../public/Sidebar.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Sidebar({
  Threads,
  setThreads,
  fetchthreads,
  getThreadDetails,
  SetnewChat,
  setthreadId,
  deleteThread,
}) {
  return (
    <>
      <div
        className="container-fluid d-flex flex-column sidebar"
        style={{ margin: "0px", padding: "0px" }}
      >
        <div className="row first-row">
          <div className="col-1" style={{ margin: "0px", padding: "0px" }}>
            <i class="fa-brands fa-openai ChatGptLogo"></i>
          </div>
          <div
            className="col-9"
            style={{ margin: "0px", padding: "0px" }}
          ></div>
          <div className="col-2" style={{ margin: "0px", padding: "0px" }}>
            <i
              class="fa-solid fa-bars"
              style={{
                fontSize: "1.5rem",
                marginTop: "1.2rem",
                marginLeft: "1rem",
              }}
            ></i>
          </div>
        </div>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
            onClick={() => {
              SetnewChat(() => {
                return true;
              });
              setthreadId(() => {
                return null;
              });
            }}
            className="d-flex align-items-center mb-0"
            style={{ marginLeft: "1.5rem" }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
            <h4 className="mb-3.5 ms-2">New Chat</h4>
          </div>
        </a>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center mb-0"
            style={{ marginLeft: "1.5rem" }}
          >
            <i class="fa-solid fa-images"></i>
            <h4 className="mb-3.5 ms-2">Images</h4>
          </div>
        </a>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center mb-0"
            style={{ marginLeft: "1.5rem" }}
          >
            <i class="fa-solid fa-book"></i>
            <h4 className=" ms-2">Library</h4>
          </div>
        </a>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center mb-0"
            style={{ marginLeft: "1.5rem" }}
          >
            <i class="fa-regular fa-clock"></i>
            <h4 className=" ms-2">Scheduled</h4>
          </div>
        </a>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center mb-0"
            style={{ marginLeft: "1.5rem" }}
          >
            <i class="fa-solid fa-plug-circle-check"></i>
            <h4 className=" ms-2">Plugins</h4>
          </div>
        </a>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center mb-0"
            style={{ marginLeft: "1.5rem" }}
          >
            <i class="fa-solid fa-code"></i>
            <h4 className=" ms-2">Codex</h4>
          </div>
        </a>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center mb-0"
            style={{ marginLeft: "1.5rem" }}
          >
            <i class="fa-solid fa-ellipsis"></i>
            <h4 className=" ms-2">More</h4>
          </div>
        </a>

        <div
          className="row History-box d-flex"
          style={{ marginLeft: "0.1rem" }}
        >
          <ul style={{ marginTop: "30px" }}>
            {Threads.map((thread) => {
              return (
                <div className="History">
                  <li
                    className="d-flex align-items-center"
                   
                    style={{ paddingLeft: "2rem", paddingTop: "4px" }}
                  >
                    <div  onClick={() => {
                      getThreadDetails(thread._id);
                      setthreadId(() => {
                        return thread._id;
                      });
                    }}><div className="threadTitle">
      <span>{thread.title}</span>
    </div></div>
                    <i
                      class="fa-solid fa-trash historyDelete ms-auto"
                      style={{ paddingRight: "0.6rem" }}
                      onClick={() => {
                        deleteThread(thread._id);
                      }}
                    ></i>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="bottom mt-auto">
          <div className="Line" style={{ borderTop: "2px solid white" }}></div>
          <div className="bottom-content">
            Made By Vishal &nbsp;<i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

import "../public/chatwindow.css";
function ChatWindow() {
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
            <form>
                <input className="chatInp" placeholder="Enter Anything!"></input>
                <a href="#" style={{marginLeft:"13px"}}><i class="fa-regular fa-paper-plane"></i></a>
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

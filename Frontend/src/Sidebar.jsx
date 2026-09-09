import "../public/Sidebar.css";
function Sidebar() {
  return (
    <>
      <div
        className="container-fluid outer"
        style={{ margin: "0px", padding: "0px" }}
      >
        <div className="row">
          <div className="col-1" style={{ margin: "0px", padding: "0px" }}>
            <img src="./public/images.png" className="ChatGptLogo"></img>
          </div>
          <div
            className="col-9"
            style={{ margin: "0px", padding: "0px" }}
          ></div>
          <div className="col-2" style={{ margin: "0px", padding: "0px" }}>
            <i
              class="fa-solid fa-bars"
              style={{ fontSize: "1.5rem", marginTop: "1.5rem" }}
            ></i>
          </div>
        </div>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center mb-0"
            style={{ marginLeft: "1.5rem" }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
            <h4 className="mb-3.5 ms-2" style={{ marginBottom: "20px" }}>
              Images
            </h4>
          </div>
        </a>
        <a href="#" className="r2" style={{ textDecoration: "none" }}>
          <div
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
      </div>
    </>
  );
}

export default Sidebar;

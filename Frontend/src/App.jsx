import "../public/App.css";
import Sidebar from "./Sidebar.jsx"
import ChatWindow from "./chatwindow.jsx";
function App() {
  return (
    <>
   <div className="container-fluid">
    <div className="row">
      <div className="col-1 sidebar" style={{width:"20rem"}}><Sidebar></Sidebar></div>
      <div className="col-9" style={{marginRight:"auto",padding:"0px",marginLeft:"0px"}}><ChatWindow></ChatWindow></div>
    </div>
   </div>
    </>
      
)}

export default App

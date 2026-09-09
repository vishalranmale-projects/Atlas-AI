import "../public/App.css";
import Sidebar from "./Sidebar.jsx"
import ChatWindow from "./chatwindow.jsx";
function App() {
  return (
    <>
   <div className="container-fluid">
    <div className="row">
      <div className="col-4 sidebar"><Sidebar></Sidebar></div>
      <div className="col-6"><ChatWindow></ChatWindow></div>
    </div>
   </div>
    </>
      
)}

export default App

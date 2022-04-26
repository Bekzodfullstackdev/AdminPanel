import Sidebar from "./componet/sidebar/Sidebar"
import Tobar from "./componet/Tobar";
import "./app.css"
import Home from "./pages/home/Home";


function App() {
  return (
    <div>
      <Tobar/>
      <div className="container">
        <Sidebar />
        <Home/>
        
      </div>
    </div>
  );
}

export default App;

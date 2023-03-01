import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="body">
        <Outlet />
      </div>
      <div className="footer">
      </div>

    </div>
  )
}

export default App

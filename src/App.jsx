import { Outlet } from "react-router-dom"
import { useStore } from "./utils/store"
import Navbar from "./components/Navbar"
import './App.css'

function App() {
  const fetchUserAsync = useStore((state) => state.fetchUserAsync)
  fetchUserAsync()

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

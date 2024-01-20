import { useState } from 'react'
import './App.css'
import Navbar from "./pages/Navbar/Navbar.jsx"
import { Outlet } from 'react-router-dom'
import WishProvoyder from './context/wishContext.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WishProvoyder>
    <Navbar/>
      <Outlet/>
    </WishProvoyder>
   
     
    </>
  )
}

export default App

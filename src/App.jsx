import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'


function App() {
  const [value , setValue] = useState(8); // hooks

  function inc(){
    setValue(value+1)
    console.log(value)
  }

  
  return (
    <Navbar/>
  )
}

export default App

import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'


function App() {
  const [a , setA] = useState(8); // hooks

  function inc(){
    setA(a+1)
    console.log(a)
  }

  
  return (
    <div>
      <Navbar/>
      
      <button onClick={inc}> inc </button>
      <h1>Home page {a} </h1> 
    </div>
  )
}

export default App

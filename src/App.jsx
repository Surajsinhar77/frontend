import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Navbar from './components/Navbar.jsx'
import { useEffect, useState } from 'react'
import Login from './Pages/Login.jsx'
import About from './Pages/About.jsx'
import Foodpage from './components/Foodpage.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [data , setData ]= useState();

  async function getASingleData(){
    let response = await fetch('https://dummyjson.com/recipes/1');
    response = await response.json();
    console.log(" res : ", response);
    setData(response);
  }

  useEffect(()=>{
    getASingleData()
  },[])
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/'  element={ <Home/> } />
        <Route path='/login' element={< Login />} />
        <Route path='/about' element={< About />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/service' element={< Service />} />
      </Routes>
      
      </>
  )
}

export default App

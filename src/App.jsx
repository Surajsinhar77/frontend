import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Navbar from './components/Navbar.jsx'
import Login from './Pages/Login.jsx'
import About from './Pages/About.jsx'
import Foodpage from './components/Foodpage.jsx'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './common/AuthProvider.jsx'

function App() {
  const { user } = useAuth();

  return (
    <>
      {
          (user ?  <Navbar />  : " " 
        )
      }
      <Routes>
        {
          (user ?
            <>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={< About />} />
              <Route path='/contact' element={< Contact />} />
              <Route path='/service/' element={< Service />} />
              <Route path='/product/:id' element={< Foodpage />} />
              <Route path="*" element={<h1> 4o4 page Not Found </h1>} />
            </>
            :

            <>
              <Route path='/login' element={< Login />} />
              <Route path='/Signup' element={< Login />} />
              <Route path="*" element={<Login />} />
            </>
          )
        }
      </Routes>
    </>
  )
}

export default App

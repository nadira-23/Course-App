import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Course from './components/Course'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
   
     <Navbar/>
     
     <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/add' element={<Course/>}></Route> 
 </Routes>
     
    </>
  )
}

export default App

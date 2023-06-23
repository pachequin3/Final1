import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/componentes/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/componentes/Home'
import Dashboard from './assets/componentes/Dashboard'
import About from './assets/componentes/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

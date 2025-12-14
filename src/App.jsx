import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testing from './components/Testing'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import SignUpPage from './components/Pages/SignUpPage'
import AdminHomePage from './components/Pages/AdminHomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Toaster></Toaster>
     <Routes path="/*">
       <Route path="/" element={<HomePage />}></Route>
       <Route path="/admin/*" element={<AdminHomePage/>}></Route>
       <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
       <Route path="/*" element={<HomePage />}></Route>
     </Routes>
     
     
     
     
     
     </BrowserRouter>

   

    
   
    </>
  )
}

export default App

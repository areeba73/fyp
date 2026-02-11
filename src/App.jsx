import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Result from './Pages/emotions'
import Login from './Pages/login'

// import Signin from './Pages/signin'
// import ForgotPassword from './Pages/forget'
// import ResetPassword from './Pages/Resetpassword'
// import Admin from './Pages/admindash'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="result" element={<Result />} />
      <Route path="/login" element={<Login />} />

      {/* <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/admin" element={<Admin />} /> */}






    </Routes>
    </>
  )
}

export default App

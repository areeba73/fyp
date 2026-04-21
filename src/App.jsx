import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Result from './Pages/result'
import ScanMethods from './Pages/scanmethods'
import UserLogin from './Pages/userlogin'
import UserSignup from './Pages/usersignup'
import DoctorLogin from './Pages/doclogin'
import DoctorSignup from './Pages/docsignup'
import ResetPassword from './Pages/Resetpassword'
import ForgotPassword from './Pages/forget'
import Doctors from './Pages/doctors'
import Chatbot from './Pages/chatbot'
import UserDashboard from './Pages/userdash'
import AdminDashboard from './Pages/admindash'
import DoctorDashboard from './Pages/dctrdash'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/scan" element={<ScanMethods />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/doclogin" element={<DoctorLogin />} />
      <Route path="/docsignup" element={<DoctorSignup />} />
      <Route path="/forget" element={<ForgotPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/userdash" element={<UserDashboard />} />
      <Route path="/admindash" element={<AdminDashboard />} />
      <Route path="/dctrdash" element={<DoctorDashboard />} />







    </Routes>
    </>
  )
}

export default App

import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import Result from './Pages/result';
import ScanMethods from './Pages/scanmethods';
import UserLogin from './Pages/userlogin';
import UserSignup from './Pages/usersignup';
import DoctorLogin from './Pages/doclogin';
import DoctorSignup from './Pages/docsignup';
import ResetPassword from './Pages/Resetpassword';
import ForgotPassword from './Pages/forget';
import Doctors from './Pages/doctors';
import Chatbot from './Pages/chatbot';
import UserDashboard from './Pages/userdash';
import AdminDashboard from './Pages/admindash';
import DoctorDashboard from './Pages/dctrdash';

function App() {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  return (
    <Routes>
      {/* ===== PUBLIC ROUTES ===== */}
      <Route path="/" element={<Home />} />
      
      {/* LOGIN & SIGNUP ROUTES */}
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/doclogin" element={<DoctorLogin />} />
      <Route path="/docsignup" element={<DoctorSignup />} />
      <Route path="/forget" element={<ForgotPassword />} />
      <Route path="/reset" element={<ResetPassword />} />

      {/* ===== PROTECTED ROUTES (Role-based) ===== */}
      
      {/* USER ROUTES */}
      <Route 
        path="/userdash" 
        element={isAuthenticated && (role === 'user' || role === 'admin') ? <UserDashboard /> : <Navigate to="/userlogin" />} 
      />
      <Route 
        path="/chatbot" 
        element={isAuthenticated && (role === 'user' || role === 'admin') ? <Chatbot /> : <Navigate to="/userlogin" />} 
      />
      <Route 
        path="/result" 
        element={isAuthenticated && (role === 'user' || role === 'admin') ? <Result /> : <Navigate to="/userlogin" />} 
      />
      <Route 
        path="/scan" 
        element={isAuthenticated && (role === 'user' || role === 'admin') ? <ScanMethods /> : <Navigate to="/userlogin" />} 
      />
      
      {/* DOCTORS ROUTE - User, Doctor ya Admin sab access kar sakte hain */}
      <Route 
        path="/doctors" 
        element={isAuthenticated && (role === 'user' || role === 'doctor' || role === 'admin') ? <Doctors /> : <Navigate to="/userlogin" />} 
      />

      {/* DOCTOR ROUTES - Sirf Doctor access kar sakte hain */}
      <Route 
        path="/dctrdash" 
        element={isAuthenticated && role === 'doctor' ? <DoctorDashboard /> : <Navigate to="/doclogin" />} 
      />

      {/* ADMIN ROUTES - Sirf Admin access kar sakte hain */}
      <Route 
        path="/admindash" 
        element={isAuthenticated && role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} 
      />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
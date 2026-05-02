import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Saare Pages ke Imports
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
  // Redux se status lena security ke liye zaroori hai
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  return (
    <Routes>
      {/* --- Public Routes --- */}
      <Route path="/" element={<Home />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/doclogin" element={<DoctorLogin />} />
      <Route path="/docsignup" element={<DoctorSignup />} />
      <Route path="/forget" element={<ForgotPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/doctors" element={<Doctors />} />

      {/* --- Protected Routes (Role based security) --- */}
      
      {/* User Dashboard */}
      <Route 
        path="/userdash" 
        element={isAuthenticated && role === 'user' ? <UserDashboard /> : <Navigate to="/userlogin" />} 
      />

      {/* Admin Dashboard */}
      <Route 
        path="/admindash" 
        element={isAuthenticated && role === 'admin' ? <AdminDashboard /> : <Navigate to="/userlogin" />} 
      />

      {/* Doctor Dashboard */}
      <Route 
        path="/dctrdash" 
        element={isAuthenticated && role === 'doctor' ? <DoctorDashboard /> : <Navigate to="/doclogin" />} 
      />

      {/* Other Secured Pages */}
      <Route path="/chatbot" element={isAuthenticated ? <Chatbot /> : <Navigate to="/userlogin" />} />
      <Route path="/result" element={<Result />} />
      <Route path="/scan" element={<ScanMethods />} />

      {/* Fallback: Agar URL galat ho toh Home par bhej do */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
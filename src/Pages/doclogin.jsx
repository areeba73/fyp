import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { loginDoctor, setError, clearError } from '../store/slices/authSlice'; 
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // ===== VALIDATION START =====
    if (!email.trim() || !password.trim()) {
      dispatch(setError("Email and Password are required!"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      dispatch(setError("Please enter a valid email address!"));
      return;
    }

    if (password.length < 6) {
      dispatch(setError("Password must be at least 6 characters!"));
      return;
    }
    // ===== VALIDATION END =====

    const resultAction = await dispatch(loginDoctor({ email, password }));

    if (loginDoctor.fulfilled.match(resultAction)) {
      const user = resultAction.payload.user;
      
      // Strict Security: Sirf Doctor hi is page se login ho
      if (user.role === 'doctor') {
        navigate('/dctrdash');
      } else if (user.role === 'admin') {
        navigate('/admindash');
      } else {
        dispatch(setError("Access Denied! This login is only for Doctors."));
        localStorage.clear();
        window.location.reload();
      }
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-[950px] flex flex-col md:flex-row bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/80 overflow-hidden">
        <div className="w-full md:w-[58%] p-8 md:p-12">
          <div className="mb-8">
            <img src={logoImg} alt="EmoTrack Logo" className="w-44 h-auto object-contain" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-1 tracking-tight">
            <span className="text-[#5390F5]">Welcome Back</span>
            <span className="text-[#2F357D] block md:inline font-bold"> as a Doctor</span>
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 text-xs rounded-lg text-center font-bold animate-pulse">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:col-span-2 px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="md:col-span-2 px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" 
            />
            
            <div className="md:col-span-2 flex justify-end">
              <Link to="/forget" className="text-[11px] text-[#2F357D] font-bold hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="md:col-span-2 w-full py-4 bg-[#2F357D] hover:bg-blue-700 text-white rounded-xl font-bold transition-all active:scale-95 mt-2 disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login Now"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm">
            Don't have an account?
            <Link to="/docsignup" className="ml-2 text-[#2F357D] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="hidden md:flex w-full md:w-[42%] bg-gradient-to-br from-blue-600/5 to-indigo-600/15 flex-col items-center justify-center p-10 border-l border-white/40">
           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="doctor" className="w-48 h-48 rounded-full object-cover border-[8px] border-white shadow-2xl" />
           <div className="mt-10 text-center">
              <h3 className="text-2xl font-black text-[#2F357D]">Premium Healthcare</h3>
              <p className="text-slate-500 text-sm mt-3">Join professionals managing health data securely.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
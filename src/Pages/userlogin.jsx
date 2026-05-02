import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setError, clearError } from '../store/slices/authSlice'; 
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { loading, error } = useSelector((state) => state.auth);

  // Page load hote hi purane errors saaf karein
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // 1. Validation
    if (!email.trim() || !password.trim()) {
      dispatch(setError("Email and Password are required!"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      dispatch(setError("Please enter a valid email address."));
      return;
    }
    
    // 2. API Call
    const resultAction = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(resultAction)) {
      const role = resultAction.payload.user.role;
      console.log("Login Success as:", role);
      
      // Role based routing
      if (role === 'admin') {
        navigate('/admindash');
      } else {
        navigate('/userdash');
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
            <span className="text-[#5390F5]">Welcome </span>
            <span className="text-[#2F357D]">EmoTrack</span>
            <span className="text-[#5390F5] block md:inline font-bold"> Back</span>
          </h2>
          <p className="text-[#2F357D] text-sm mb-8 font-medium tracking-wide">
            Continue your journey to better mental health.
          </p>
          
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
              className="md:col-span-2 px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" 
            />
            
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="md:col-span-2 px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" 
            />
            
            <div className="md:col-span-2 flex justify-end mt-[-8px]">
              <Link to="/forget" className="text-[11px] text-[#2F357D] font-bold hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="md:col-span-2 w-full py-4 bg-[#2F357D] hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 mt-2 disabled:opacity-70"
            >
              {loading ? "Verifying..." : "Login Now"}
            </button>
          </form>

          <p className="mt-8 text-center text-[#2F357D] text-sm">
            Don't have an account?
            <Link to="/usersignup" className="ml-2 text-[#2F357D] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="hidden md:flex w-full md:w-[42%] bg-gradient-to-br from-blue-600/5 to-indigo-600/15 flex-col items-center justify-center p-10 border-l border-white/40 relative text-center">
          <div className="text-8xl mb-6 animate-bounce drop-shadow-lg">😊</div>
          <div className="relative z-10">
              <h3 className="text-2xl font-black text-[#2F357D] tracking-tight">Your Mind Matters</h3>
              <p className="text-[#2F357D] text-sm mt-3 leading-relaxed max-w-[240px] mx-auto font-medium">
                Quickly access your personal mood tracker and emotional progress.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
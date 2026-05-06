import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { clearError, registerUser, setError } from '../store/slices/authSlice'; 
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const UserSignup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { loading, error } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSignup = async (e) => {
    e.preventDefault();

    // --- FRONTEND VALIDATION START ---
    
    // 1. Check for empty fields
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      dispatch(setError("Please fill in all fields."));
      return;
    }

    // 2. Email format validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      dispatch(setError("Please enter a valid email address."));
      return;
    }

    // 3. Password length validation
    if (password.length < 6) {
      dispatch(setError("Password must be at least 6 characters long."));
      return;
    }

    // --- FRONTEND VALIDATION END ---

    // Agar validation pass ho jaye, tab dispatch karein
    const resultAction = await dispatch(registerUser({ fullName, email, password }));

    if (registerUser.fulfilled.match(resultAction)) {
      alert("Account created! Please check your email for verification.");
      setFullName('');
      setEmail('');
      setPassword('');
      navigate('/userlogin'); 
    } else {
      console.error("Signup failed:", resultAction.payload);
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
            <span className="text-[#5390F5]">Join </span>
            <span className="text-[#2F357D]">EmoTrack</span>
            <span className="text-[#5390F5] block md:inline font-bold"> Community</span>
          </h2>
          <p className="text-[#2F357D] text-sm mb-8 font-medium tracking-wide">
            Start tracking your emotions and progress today.
          </p>
          
          {/* Error Message Display */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 text-xs rounded-lg text-center font-bold animate-pulse">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="md:col-span-2 w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" 
            />
            
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:col-span-2 px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" 
            />
            
            <input 
              type="password" 
              placeholder="Password (Min 6 chars)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="md:col-span-2 px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" 
            />
            
            <button 
              type="submit"
              disabled={loading}
              className="md:col-span-2 w-full py-4 bg-[#2F357D] hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 mt-2 disabled:opacity-70"
            >
              {loading ? "Checking..." : "Create Account"}
            </button>
          </form>

          <p className="mt-8 text-center text-[#2F357D] text-sm">
            Already have an account?
            <Link to="/userlogin" className="ml-2 text-[#2F357D] font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>

        <div className="hidden md:flex w-full md:w-[42%] bg-gradient-to-br from-blue-600/5 to-indigo-600/15 flex flex-col items-center justify-center p-10 border-l border-white/40 relative text-center">
          <div className="text-8xl mb-6 animate-bounce drop-shadow-lg">😊</div>
          <div className="relative z-10">
              <h3 className="text-2xl font-black text-[#2F357D] tracking-tight">Your Mind Matters</h3>
              <p className="text-[#2F357D] text-sm mt-3 leading-relaxed max-w-[240px] mx-auto font-medium">
                Quickly access your personal mood tracker, daily insights, and emotional progress.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;